<template>
  <div class="outer">
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in items" :key="item">
        <a href="" target="_blank" class="inner" :data-name="item[0]">
          <img :src="getImage(item[1])">
          <p class="title">
            <span>{{ item[0] }}</span>
          </p>
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider'

  export default {
    name: 'ExpanderSlider',
    emits: ['track'],
    data() {
      return {
        items: [
          [
            'Adult only selection',
            'adult.jpg',
            'https://www.spies.dk/de-kanariske-oer/hoteller?filters=wChd%2CwCii%2CwCht%2CsAo',
          ],
          [
            'Nordic favourite selection',
            'nordic.jpg',
            'https://www.spies.dk/de-kanariske-oer/hoteller?filters=wChd%2CwCii%2CwCht%2CNo',
          ],
          [
            'Top selection',
            'top.jpg',
            'https://www.spies.dk/de-kanariske-oer/hoteller?filters=wChd%2CwCii%2CsTf%2CwCht',
          ],
        ]
      }
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 2,
        gutter: 40,
        controls: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        speed: 750,
        loop: false
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/offer/${image}`)
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

  .outer {
    position: relative;
  }
  .wrapper {
    overflow: hidden;
    padding-right: 5rem;
    :deep(.tns-ovh) {
      overflow: visible;
    }
    .inner {
      display: block;
      img {
        display: block;
        width: 100%;
      }
      .title {
        background: $color-1;
        color: #fff;
        padding: 1.125rem .5rem .875rem;
        font-family: $font-3;
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        transition: .15s;
      }
      &:hover {
        .title {
          background: darken($color-1, 2%);
        }
      }
    }
    
    :deep(.tns-controls) {
      outline: 0;
      button {
        position: absolute;
        top: 50%;
        z-index: 1000;
        height: 2.5rem;
        width: 2.5rem;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        border-radius: 50%;
        background-color: $color-1 !important;
        transform: translate(0, -50%);
        &:first-child {
          left: .5rem;
          background: url('../assets/211689_left_arrow_icon.svg') no-repeat center center / 75% auto;
          @include d {
            left: -1rem;
          }
        }
        &:last-child {
          right: .5rem;
          background: url('../assets/211607_right_arrow_icon.svg') no-repeat center center / 75% auto;
          @include d {
            right: -1rem;
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

