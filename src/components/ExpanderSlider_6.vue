<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in 4" :key="item">
        <a
          href="https://www.jumbo.com/recepten/kerst/kerstdiner?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstdiner&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="inner"
          @click="$emit('track', 'test')"
          :data-name="`Slider_B - ${item}`"
        >
          <img :src="getImage(item)" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { tns } from "tiny-slider";

export default {
  name: "ExpanderSlider",
  emits: ["track"],
  mounted() {
    tns({
      container: this.$refs.slider,
      items: 1,
      gutter: 3,
      responsive: {
        480: {
          items: 3,
          gutter: 76,
        },
      },
      controls: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayButtonOutput: false,
      speed: 750,
      loop: true,
      arrowKeys: true,
      mouseDrag: true,
    });
  },
  methods: {
    getImage(image) {
      return require(`@/assets/gallery_2/3/${image}.jpg`);
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

.wrapper {
  position: relative;
  padding: 4rem 7rem;
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  .inner {
    display: block;
    display: flex !important;
    img {
      display: block;
      width: 100%;
      width: 241px;
      // height: 457px;
      height: auto;
    }
  }

  :deep(.tns-controls) {
    outline: 0;
    button {
      position: absolute;
      width: 2.5625vw;
      height: 4.375vw;
      background: none;
      border: 0;
      text-indent: -2000%;
      overflow: hidden;
      transform: translate(0, -50%);
      margin-top: 13rem;
      @include mobile {
        width: 7.5625vw;
        height: 10.375vw;
      }
      &:first-child {
        z-index: 10;
        left: 0.9rem;
        background: url("../assets/arr-l.svg") no-repeat center center / contain;
        // width: 1.5625rem;
        // height: auto;
        @include d {
          left: 2.9rem;
          left: 2.9rem;
        }
      }
      &:last-child {
        z-index: 10;
        right: 2.9rem;
        background: url("../assets/arr-r.svg") no-repeat center center / contain;
        // width: 1.5625rem;
        // height: auto;
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
}
</style>
