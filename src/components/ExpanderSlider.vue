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
          [
            'Active selection',
            'active.jpg',
            'https://www.spies.dk/de-kanariske-oer/hoteller?filters=wChd%2CwCii%2CwCht%2CwCha%2CwChv%2CsTo',
          ],
        ]
      }
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 20,
        controls: true,
        true: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        speed: 750,
        loop: false,
        responsive: {
          480: {
            items: 2,
            gutter: 40,
          }
        }
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
    @include d {
      padding-right: 5rem;
    }
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
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        // padding: 1.125rem .5rem .875rem;
        padding: .125rem .5rem 0;
        font-family: $font-3;
        font-size: 1.25rem;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        background: $color-1;
        transition: .15s;
        @include d {
          font-size: 1.5rem;
        }
      }
      &:hover {
        .title {
          font-weight: bold;
          // background: darken($color-1, 2%);
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
        transition: .15s;
        &:hover {
          background-color: darken($color-1, 5%) !important;
        }
        &:first-child {
          left: -1rem;
          background: url('../assets/211689_left_arrow_icon.svg') no-repeat 35% center / 75% auto;
        }
        &:last-child {
          right: -1rem;
          background: url('../assets/211607_right_arrow_icon.svg') no-repeat 65% center / 75% auto;
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
      bottom: -2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      @include d {
        bottom: -3rem;
      }
      button {
        width: .625rem;
        height: .625rem;
        margin: 0 .375rem;
        background: $color-3;
        border-radius: 50%;
        @include d {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
      .tns-nav-active {
        background: $color-1;
      }
    }
  }

</style>

