<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in items" :key="item">
        <div class="inner">
          <div class="image">
            <img :src="getImage(item[5])">
          </div>
          <div class="text">
            <h2 class="title">{{item[0]}}</h2>
            <p class="lead">
              {{item[1]}}
            </p> 
            <a href="https://www.lexus.se/new-cars/rx" target="_blank" class="cta" @click="$emit('track', item[5])">
              Bygg din nya {{item[0]}}
            </a>
          </div>
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
    props: {
      items: Array,
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 0,
        controls: true,
        nav: false,
        autoplay: false,
        autoplayButtonOutput: false,
        speed: 500,
        loop: false,
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/models/detail/${image}.jpg`)
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
      position: relative;
      padding: 2rem 4rem;
      @include d {
        display: flex;
        justify-content: space-between;
        .image {
          width: 50%;
        }
        .text {
          width: 40%;
        }
      }
      .image {
        @include m {
          position: absolute;
          left: 50%;
          width: 18rem;
          top: 7rem;
          margin-left: -9rem;
        }
      }
      .text {
        text-align: center;
        .title {
          font-size: 2.75rem;
        }
        .lead {
          max-width: 20rem;
          margin: 4rem auto;
          font-size: 1rem;
          font-weight: 300;
          @include m {
            margin-top: 18rem;
          }
        }
      }
    }
    :deep(.tns-controls) {
      outline: 0;
      button {
        position: absolute;
        top: 50%;
        height: 1.75rem;
        width: 1.75rem;
        z-index: 1000;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        border-radius: 50%;
        background-color: #fff !important;
        transform: translate(0, -50%);
        &:first-child {
          left: 1rem;
          background: url('../assets/arr-l.svg') no-repeat 35% center / 75%;
        }
        &:last-child {
          right: 1rem;
          background: url('../assets/arr-r.svg') no-repeat 65% center / 75%;
        }
        // &:hover {
        //   background-color: darken($color-2, 5%) !important;
        // }
        &[disabled] {
          display: none;
        }
      }
    }
  }

</style>

