<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in 6" :key="item">
        <a
          href="https://secure.adnxs.com/clktrb?id=808760&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401482261%3Bdc_trk_aid%3D593516858%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
          target="_blank"
          class="inner"
          @click="$emit('track', 'test')"
        >
          <img :src="getImage(item)" />
        </a>
      </div>
    </div>
    <div class="nav-dots">
      <button
        v-for="n in 6"
        :key="n"
        :class="{ 'nav-active': n === activeIndex }"
        @click="goToSlide(n)"
      ></button>
    </div>
  </div>
</template>

<script>
import { tns } from "tiny-slider";

export default {
  name: "ExpanderSlider",
  emits: ["track"],
  data() {
    return {
      slider: null,
      activeIndex: 1,
    };
  },
  mounted() {
    this.slider = tns({
      container: this.$refs.slider,
      items: 1, // Default to 1 item
      gutter: 20,
      controls: false,
      nav: false,
      autoplay: false, // Turn off autoplay
      autoplayTimeout: 8000,
      autoplayButtonOutput: false,
      speed: 1000,
      loop: false, // Disable looping
      onIndexChanged: this.updateActiveIndex,
      responsive: {
        480: {
          items: 3, // Display 3 items starting from 480px
        },
      },
    });
  },
  methods: {
    getImage(image) {
      return require(`@/assets/image${image}.jpg`);
    },
    goToSlide(index) {
      this.slider.goTo(index - 1);
      this.activeIndex = index;
    },
    updateActiveIndex(info) {
      this.activeIndex = info.displayIndex;
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/tiny-slider/src/tiny-slider";
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/fonts.scss";

.wrapper {
  position: relative;
  .inner {
    display: block;
    img {
      display: block;
      width: 100%;
    }
  }

  :deep(.tns-controls) {
    outline: 0;
    button {
      position: absolute;
      height: 1.75rem;
      width: 1.75rem;
      background: none;
      border: 0;
      text-indent: -2000%;
      overflow: hidden;
      border-radius: 50%;
      background-color: $color-2 !important;
      transform: translate(0, -50%);
      &:first-child {
        left: 0.5rem;
        @include d {
          left: 1rem;
        }
      }
      &:last-child {
        right: 0.5rem;
        @include m {
          right: 1rem;
        }
      }
      &[disabled] {
        display: none;
      }
    }
  }

  :deep(.tns-nav) {
    outline: 0;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 0.375rem;
      background: #888;
      border-radius: 50%;
    }
    .tns-nav-active {
      background: #fff;
    }
  }

  .nav-dots {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    button {
      width: 0.625rem;
      height: 0.625rem;
      margin: 0 0.375rem;
      background: transparen;
      border-radius: 50%;
      border: 2px solid #8fcae8;
      &.nav-active {
        background-color: #006698;
        border-radius: none;
        border: none;
      }
    }
  }
}

.slider {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

@media (max-width: 480px) {
  .slider {
    justify-content: center; /* Center horizontally */
    margin: 0;
  }
  img {
    padding: 2rem;
  }
}
</style>
