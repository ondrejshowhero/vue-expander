<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in items" :key="item">
        <div class="inner">
          <div class="text">
            <h2 class="title">{{item[0]}}</h2>
            <p class="description">
              {{item[1]}}
            </p>
          </div>
          <div class="image">
            <img :src="getImage(item[2])">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="navigation">
    <div class="items">
      <button v-for="item, index in items" :key="item" @click="goToSlide(index)" :class="{active: isNavActive(index)}">{{ item[0] }}</button>
    </div>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider'

  export default {
    name: 'ExpanderGallery',
    data() {
      return {
        slider: undefined,
        active: 0,
        items: [
          [
            'Breeze',
            'Den friske brisen vi lengter etter på solrike dager.',
            'breeze.jpg',
          ],
          [
            'Mist',
            'Morgendugg som glitrer i morgengry.',
            'mist.jpg',
          ],
          [
            'Pine',
            'Det magiske fra de skandinaviske skoger.',
            'pine.jpg',
          ],
          [
            'Indigo',
            'Nattemørket som svinner hen ved morgengry.',
            'indigo.jpg',
          ],
        ]
      }
    },
    mounted() {
      this.slider = tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 0,
        controls: false,
        nav: false,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 4000,
        loop: true
      });
      this.slider.events.on('indexChanged', (e) => {
        this.active = e.index - 1
      })
    },
    methods: {
      getImage(image) {
        return require(`@/assets/interior/${image}`)
      },
      goToSlide(index) {
        this.slider.goTo(index)
      },
      isNavActive(index) {
        return this.active === index
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "node_modules/tiny-slider/src/tiny-slider";
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .inner {
    position: relative;
    .title {
      position: absolute;
      left: 0;
      top: 0;
      padding: 1rem 1rem;
      font-size: 2rem;
      font-weight: 500;
      color: #fff;
      letter-spacing: -.015em;
      text-shadow: 0 0 .5rem rgba(#000, .75);
      @include d {
        top: auto;
        bottom: 0;
        text-shadow: none;
        padding: 1.25rem 1.5rem;
      }
    }
    .description {
      position: absolute;
      left: 0;
      width: 100%;
      padding: 0 1rem;
      bottom: 1.125rem;
      font-size: .875rem;
      color: #fff;
      @include d {
        left: 10.25rem;
        width: 11.25rem;
        padding: 0;
      }
    }
  }

  .navigation {
    position: absolute;
    bottom: 1.25rem;
    left: 0;
    width: 100%;
    padding: 0 var(--padding);
    @include d {
      bottom: 1.75rem;
      left: 50%;
      width: 50%;
      padding: 0 var(--padding) 0 1.5rem;
    }
    .items {
      position: relative;
      display: flex;
      justify-content: start;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #aaa;
      }
      button {
        position: relative;
        z-index: 2;
        width: 6rem;
        padding: 0 0 .5rem .125rem;
        font-size: .875rem;
        text-align: left;
        letter-spacing: -.015;
        &:hover {
          font-weight: 500;
        }
        &.active {
          font-weight: 500;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 3.375rem;
            height: 2px;
            background: #000;
          }
        }
      }
    }
    
  }

</style>

