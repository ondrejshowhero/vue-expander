<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in 5" :key="item">
        <a href="" target="_blank" class="inner" @click="$emit('track', 'test')">
          <img :src="getImage(item)">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider'

  export default {
    name: 'ExpanderSlider',
    emits: ['track'],
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 20,
        controls: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        speed: 750,
        loop: true
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/${image}`)
      }
    }
  }
</script>

<style lang="scss">
  @import "node_modules/tiny-slider/src/tiny-slider";
</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .wrapper {
    position: relative;
    .inner {
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
    .tns-controls {
      outline: 0;
      @include d {
        position: absolute;
        bottom: 2.5rem;
        left: 13rem;
        z-index: 10;
      }
      button {
        height: 1.75rem;
        width: 1.75rem;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        border-radius: 50%;
        background-color: $color-2 !important;
        @include m {
          position: absolute;
          top: 8.75rem;
          z-index: 100;
        }
        @include d {
          height: 3.125rem;
          width: 3.125rem;
          transition: .15s;
        }
        &:first-child {
          // background: url('../assets/arr-l.svg') no-repeat center center / contain;
          @include m {
            left: .5rem;
          }
        }
        &:last-child {
          // background: url('../assets/arr-r.svg') no-repeat center center / contain;
          @include m {
            right: .5rem;
          }
          @include d {
            margin-left: 0.625rem;
          }
        }
        &:hover {
          background-color: darken($color-2, 5%) !important;
        }
        &[disabled] {
          opacity: .4;
          &:hover {
            background-color: transparent !important;
          }
        }
      }
    }
  }

</style>

