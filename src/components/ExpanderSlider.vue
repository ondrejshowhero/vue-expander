<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in 12" :key="item">
        <a
          href="https://ad.doubleclick.net/ddm/trackclk/N1675542.5277392SHOWHEROESABDIGI/B32695971.405188712;dc_trk_aid=596770660;dc_trk_cid=211669632;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
          target="_blank"
          class="inner"
          @click="$emit('track', 'test')"
          :data-name="`Slider - ${item}`"
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
      edgePadding: 50, // Add edge padding to ensure the first item is fully visible
      responsive: {
        110: {
          items: 1,
          gutter: 16,
          edgePadding: 16, // Add edge padding for smaller screens
        },
        480: {
          items: 2.8,
          gutter: 29,
          edgePadding: 48, // Add edge padding for larger screens
        },
      },
      controls: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayButtonOutput: false,
      speed: 750,
      loop: true,
      mouseDrag: true,
      rewind: false,
    });
  },
  methods: {
    getImage(image) {
      return require(`@/assets/${image}.png`);
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
  padding-left: 3rem;
  position: relative;
  .inner {
    display: block;
    img {
      display: block;
      width: 100%;
      width: 23.125rem;
      height: auto;
      margin: 0 auto;
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
        left: 0.5rem;
        @include d {
          left: 1rem;
        }
      }
      &:last-child {
        right: 0.5rem;
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
#tns1 {
  .tns-item {
    width: 23.125rem;
    height: auto;
  }
}

@media (max-width: 480px) {
  .wrapper {
    padding-left: 2vw;
  }
  #tns1 {
    .tns-item {
      width: 60.87vw;
      height: auto;
    }
  }
}
</style>
