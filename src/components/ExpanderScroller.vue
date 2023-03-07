<template>
  <div class="scroll-container" :class="{leftmost: leftMost, rightmost: rightMost}" ref="container">
    <div class="scroller" ref="scroller" @scroll="scrollerScrolled">
      <div class="items" ref="items">
        <a href="https://ad.doubleclick.net/ddm/trackclk/N9166.4661577SHOWHEROESNO/B29149617.360566974;dc_trk_aid=551516881;dc_trk_cid=184187065;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=" target="_blank" class="item" v-for="item in scrollerItems" :key="item" @click="$emit('track', `product-${item[4]}`)">
          <div class="image">
            <img :src="getImageUrl(item[4])">
          </div>
          <div class="info">
            <p class="distance">{{item[3]}} km rekkevidde</p>
            <h2 class="title">{{item[0]}}</h2>
            <p class="price">
              <span>Ny veil. pris ink. levering:</span> Kr. {{item[1]}}
            </p>
            <template v-if="item[5]">
              <h2 class="title">{{item[5]}}</h2>
              <p class="price">
                <span>Ny veil. pris ink. levering:</span> Kr. {{item[6]}}
              </p>
            </template>
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
            'Standard Range RWD:',
            '472 300',
            'car-1.jpg',
            '440',
            'standard-range-rwd'
          ],
          [
            'Premium Long Range RWD:',
            '554 300',
            'car-2.jpg',
            '600',
            'premium-long-range-rwd'
          ],
          [
            'Premium Standard Range AWD:',
            '553 800',
            'car-3.jpg',
            '400',
            'premium-standard-range-awd',
          ],
          [
            'Premium Long Range AWD:',
            '597 400',
            'car-1.jpg',
            '550',
            'premium-long-range-awd'
          ],
          [
            'Mach-E GT:',
            '681 700',
            'car-1.jpg',
            '490',
            'mach-e-gt'
          ],
        ],
        leftMost: true,
        rightMost: false
      }
    },
    methods: {
      getImageUrl(image) {
        return require(`@/assets/cars/${image}.png`)
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
      let observer = new IntersectionObserver(handleIntersect, {root: rootEl, rootMargin: '0% -45% 0% -45%'})
      let targets = document.querySelectorAll('.section-scroller .item')
      targets.forEach(target => {
        observer.observe(target)
      });
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
    padding-bottom: 1rem;
    @include m {
      scroll-snap-type: x mandatory;
    }
  }
  .items {
    display: inline-flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 0 15vw;
    @include d {
      padding: 0 2.25rem;
    }
  }
  .item {
    display: block;
    width: 70vw;
    padding: 1.375rem .875rem 0;
    border-radius: .5rem;
    background: #fff;
    overflow: hidden;
    color: #000;
    text-align: center;
    @include m {
      scroll-snap-align: center;
    }
    @include d {
      width: 20.375rem;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 11.875rem;
    }
    .distance {
      position: relative;
      top: -2rem;
      font-weight: bold;
    }
    .title {
      margin-bottom: .25rem;
      font-size: 1.125rem;
      font-weight: bold;
    }
    .price {
      font-size: 1.125rem;
      span {
        font-size: 1rem;
      }
      strong {
        display: block;
        margin-top: .25rem;
        font-size: 1.25rem;
      }
    }
    .image {
      overflow: hidden;
      img {
        transition: .3s;
        transform: translate3d(0,0,0);
      }
    }
    &:hover {
      .image {
        img {
          transform: translate3d(0,0,0) scale(1.03);
        }
      }
    }
  }
  .item + .item {
    margin-left: 1rem;
    @include d {
      margin-left: 1.625rem;
    }
  }

  .nav {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 15vw;
    height: 100%;
    border: 0;
    overflow: hidden;
    cursor: pointer;
    text-indent: -999em;
    @include d {
      width: 8rem;
    }
    &.prev {
      left: 0;
      background: url('../assets/arr-l.svg') no-repeat 25% center / 8vw auto, linear-gradient(90deg, #000000 6.39%, rgba(0, 0, 0, 0) 91.55%);
      @include d {
        background-size: 4rem auto, auto;
        background-position: center center, center;
      }
    }
    &.next {
      right: 0;
      background: url('../assets/arr-r.svg') no-repeat 75% center / 8vw auto, linear-gradient(270deg, #000000 6.39%, rgba(0, 0, 0, 0) 91.55%);
      @include d {
        background-size: 4rem auto, auto;
        background-position: center center, center;
      }
    }
  }

  .leftmost .prev {
    display: none;
  }
  .rightmost .next {
    display: none;
  }

</style>

