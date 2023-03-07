<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in items" :key="item">
        <a href="https://ad.doubleclick.net/ddm/trackclk/N526202.4451786SHOWHEROS/B29276508.360566422;dc_trk_aid=551516635;dc_trk_cid=187783875;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=" target="_blank" class="inner" @click="$emit('track', item[5])">
          <div class="image">
            <img :src="getImage(item[5])">
          </div>
          <div class="info">
            <h2 class="title">{{item[0]}}</h2>
            <p class="desc">
              {{item[6]}}
            </p>
          </div>
          <p class="text">
            {{item[2]}}
          </p> 
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
    props: {
      items: Array,
      highlighted: Array,
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 20,
        controls: false,
        nav: true,
        autoplay: false,
        autoplayButtonOutput: false,
        speed: 750,
        loop: false,
        responsive: {
          480: {
            disable: true
          }
        }
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/models/${image}.jpg`)
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
    padding: 3rem 2.25rem;
    @include m {
      padding: 3rem 5rem 5rem;
      :deep(.tns-ovh) {
        overflow: visible;
      }
    }
    .slider {
      @include d {
        display: flex;
        justify-content: space-between;
        .item {
          width: 32%;
        }
      }
    }
    .inner {
      position: relative;
      display: block;
      overflow: hidden;
      .info {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding: .75rem .75rem 1.5rem;
        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
        @include d {
          padding: 1.25rem 1.25rem 1.5rem;
        }
        .title {
          margin-bottom: .25rem;
          font-size: .875rem;
          @include d {
            margin-bottom: .5rem;
            font-size: 1.125rem;
          }
        }
        .desc {
          font-size: 1.125rem;
          line-height: 1.1;
          @include d {
            font-size: 1.375rem;
            line-height: 1.3;
          }
        }
      }
      .text {
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        padding: 2rem .75rem 1rem;
        font-size: .875rem;
        font-weight: 300;
        background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
        opacity: 0;
        transition: opacity .25s;
        line-height: 1.2;
        @include d {
          padding: 2rem 1.25rem 1.25rem;
          bottom: -100%;
          font-size: 1rem;
          transition: .25s;
          opacity: 1;
          line-height: 1.3;
        }
      }
      &:hover {
        .text {
          bottom: 0;
        }
      }
      @include m {
        .info {
          background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 60%);
        }
        .image {
          aspect-ratio: .9;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .tns-slide-active {
      @include m {
        .text {
          opacity: 1;
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
        width: .375rem;
        height: .375rem;
        margin: 0 .375rem;
        background: #fff;
        border-radius: 50%;
      }
      .tns-nav-active {
        background: #454750;
      }
    }
  }

</style>

