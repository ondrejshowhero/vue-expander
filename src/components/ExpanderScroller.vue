<template>
  <div class="scroll-container" :class="{leftmost: leftMost, rightmost: rightMost}" ref="container">
    <div class="scroller" ref="scroller" @scroll="scrollerScrolled">
      <div class="items" ref="items">
        <a :href="item[3]" target="_blank" class="item" v-for="item in scrollerItems" :key="item" @click="$emit('track', item[3])">
          <div class="image">
            <img :src="getImageUrl(item[2])">
          </div>
          <div class="info">
            <h3 class="title">{{item[0]}}</h3>
            <p>
              {{item[1]}}
            </p>
          </div>
        </a>
      </div>
    </div>
    <button class="nav prev" @click="scrollToPrev"></button>
    <button class="nav next" @click="scrollToNext"></button>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderScroller',
    emits: ['track'],
    data() {
      return {
        scrollerItems: [
          [
            'Title',
            'The text',
            'image.jpg',
            'https://showheroes.com',
            'title'
          ],
        ],
        leftMost: true,
        rightMost: false,
        autoscroll: false,
        autoscrollSpeed: 2500
      }
    },
    methods: {
      getImageUrl(image) {
        return require(`@/assets/${image}`)
      },
      scrollToPrev: function() {
        let w = this.$refs.items.children[0].offsetWidth
        this.$refs.scroller.scrollBy({left: w * -1, behavior: 'smooth'})
      },
      scrollToNext: function() {
        let w = this.$refs.items.children[0].offsetWidth
        this.$refs.scroller.scrollBy({left: w, behavior: 'smooth'})
      },
      scrollerScrolled: function() {
        this.leftMost = (this.$refs.scroller.scrollLeft < 50)
        this.rightMost = (this.$refs.scroller.scrollLeft > this.$refs.items.offsetWidth - this.$refs.container.offsetWidth - 50)
      }
    },
    mounted() {
      let rootEl = document.querySelector('.section-scroller .container')
      let handleIntersect = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting)
            entry.target.classList.add('active')
          else
            entry.target.classList.remove('active')
        });
      };
      let observer = new IntersectionObserver(handleIntersect, {root: rootEl, rootMargin: '100% -45% 100% -45%'})
      let targets = document.querySelectorAll('.section-scroller .item')
      targets.forEach(target => {
        observer.observe(target)
      });

      if (this.autoscroll) {
        setInterval(() => {
          if (this.rightMost)
            this.$refs.scroller.scrollTo({left: 0, behavior: 'smooth'})
          else
            this.scrollToNext()
        }, this.autoscrollSpeed || 2500)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

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
    justify-content: space-between;
    align-items: flex-start;
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

</style>

