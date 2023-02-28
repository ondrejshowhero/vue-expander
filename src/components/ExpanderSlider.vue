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
          left: .5rem;
          // background: url('../assets/arr-l.svg') no-repeat center center / contain;
          @include d {
            left: 1rem;
          }
        }
        &:last-child {
          right: .5rem;
          // background: url('../assets/arr-r.svg') no-repeat center center / contain;
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
        width: .5rem;
        height: .5rem;
        margin: 0 .375rem;
        background: #888;
        border-radius: 50%;
      }
      .tns-nav-active {
        background: #fff;
      }
    }
  }

</style>

