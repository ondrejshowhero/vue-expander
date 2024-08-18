<template>
  <div
    class="scroll-container"
    :class="{ leftmost: leftMost, rightmost: rightMost }"
    ref="container"
  >
    <div class="scroller" ref="scroller" @scroll="scrollerScrolled">
      <div class="items" ref="items">
        <a
          :href="item[3]"
          target="_blank"
          class="item"
          v-for="(item, index) in scrollerItems"
          :key="index"
          @click="handleClick(item[3], $event)"
        >
          <div class="image">
            <img :src="getImageUrl(item[2])" />
          </div>
          <div class="info">
            <h3 class="title">{{ item[0] }}</h3>
            <p>
              {{ item[1] }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <button class="nav prev" @click="scrollToPrev"></button>
    <button class="nav next" @click="scrollToNext"></button>
    <div class="dots">
      <span
        v-for="(item, index) in scrollerItems"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="scrollToIndex(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpanderScroller",
  emits: ["track"],
  data() {
    return {
      scrollerItems: [
        ["", "", "image1.jpg", "https://example.com/1", "title1"],
        ["", "", "image2.jpg", "https://example.com/2", "title2"],
        ["", "", "image3.jpg", "https://example.com/3", "title3"],
        ["", "", "image4.jpg", "https://example.com/4", "title4"],
        ["", "", "image5.jpg", "https://example.com/5", "title5"],
        ["", "", "image6.jpg", "https://example.com/6", "title6"],
      ],
      leftMost: true,
      rightMost: false,
      autoscroll: false,
      autoscrollSpeed: 2500,
      currentIndex: 0,
    };
  },
  methods: {
    getImageUrl(image) {
      try {
        return require(`@/assets/${image}`);
      } catch (e) {
        console.error(`Image not found: ${image}`);
        return ""; // Return a fallback or empty string
      }
    },
    scrollToPrev() {
      let w = this.$refs.items.children[0].offsetWidth;
      this.$refs.scroller.scrollBy({ left: w * -1, behavior: "smooth" });
    },
    scrollToNext() {
      let w = this.$refs.items.children[0].offsetWidth;
      this.$refs.scroller.scrollBy({ left: w, behavior: "smooth" });
    },
    scrollToIndex(index) {
      let w = this.$refs.items.children[0].offsetWidth;
      this.$refs.scroller.scrollTo({ left: w * index, behavior: "smooth" });
      this.currentIndex = index; // Ensure currentIndex is updated
      console.log(
        `Dot clicked: ${index}, currentIndex set to: ${this.currentIndex}`
      );
    },
    scrollerScrolled() {
      let w = this.$refs.items.children[0].offsetWidth;
      this.currentIndex = Math.round(this.$refs.scroller.scrollLeft / w);
      this.leftMost = this.$refs.scroller.scrollLeft < 50;
      this.rightMost =
        this.$refs.scroller.scrollLeft >
        this.$refs.items.offsetWidth - this.$refs.container.offsetWidth - 50;
      console.log(
        `Scrolled: scrollLeft=${this.$refs.scroller.scrollLeft}, currentIndex=${this.currentIndex}`
      );
    },
    handleClick(url, event) {
      event.preventDefault(); // Prevent the default anchor click behavior
      this.$emit("track", url);
      setTimeout(() => {
        const newWindow = window.open(url, "_blank");
        if (newWindow) newWindow.opener = null;
      }, 1000); // Adjust the delay as needed
    },
  },
  mounted() {
    let rootEl = document.querySelector(".section-scroller .container");
    let handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
        else entry.target.classList.remove("active");
      });
    };
    let observer = new IntersectionObserver(handleIntersect, {
      root: rootEl,
      rootMargin: "100% -45% 100% -45%",
    });
    let targets = document.querySelectorAll(".section-scroller .item");
    targets.forEach((target) => {
      observer.observe(target);
    });

    if (this.autoscroll) {
      setInterval(() => {
        if (this.rightMost)
          this.$refs.scroller.scrollTo({ left: 0, behavior: "smooth" });
        else this.scrollToNext();
      }, this.autoscrollSpeed || 2500);
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/fonts.scss";

.scroll-container {
  position: relative;
}
.scroller {
  overflow: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scroller::-webkit-scrollbar {
  display: none;
}
.items {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1rem;
}
.item {
  display: block;
  width: 60vw;
  scroll-snap-align: center;
  @include d {
    width: 27.75rem;
  }
}
.item + .item {
  margin-left: 1rem;
  @include d {
    margin-left: 2.5rem;
  }
}

.nav {
  display: none;
  position: absolute;
  top: 0;
  z-index: 10;
  width: 4rem;
  height: 100%;
  border: 0;
  overflow: hidden;
  cursor: pointer;
  &.prev {
    left: 0;
    // background: url('../assets/arr-l.svg') no-repeat center center / 2rem auto;
  }
  &.next {
    right: 0;
    // background: url('../assets/arr-r.svg') no-repeat center center / 2rem auto;
  }
}

.leftmost .prev {
  display: none;
}
.rightmost .next {
  display: none;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  span {
    width: 10px;
    height: 10px;
    // background-color: #ccc;
    width: 0.625rem;
    height: 0.625rem;

    border-radius: 1.25rem;
    border: 2px solid #8fcae8;

    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    &.active {
      background-color: #006698;
      border-radius: none;
      border: none;
    }
  }
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
