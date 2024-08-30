<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in 7" :key="item">
        <a
          href="https://www.primevideo.com/detail/GTI/amzn1.dv.gti.ffefa84e-6092-433b-9f8a-79c6dd7551ae"
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
      items: 1,
      gutter: 30,
      controls: true,
      nav: false,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayButtonOutput: false,
      speed: 900,
      loop: true,
      responsive: {
        480: {
          items: 5,
          gutter: 18,
        },
      },
    });
  },
  methods: {
    getImage(image) {
      return require(`@/assets/image-${image}.png`);
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
  margin: 0 4.18rem;
  .inner {
    display: block;
    // margin: 0 5rem;
    img {
      display: block;
      width: 100%;
    }
  }

  :deep(.tns-controls) {
    outline: 0;
    button {
      position: absolute;
      width: 2.30413rem;
      height: 2.30413rem;
      background: none;
      border: 0;
      text-indent: -2000%;
      overflow: hidden;
      border-radius: 50%;
      // background-color: $color-2 !important;
      transform: translate(0, -50%);
      &:first-child {
        left: 0.5rem;
        background: url("../assets/arr-l.svg") no-repeat center center / contain;
        @include d {
          left: -3.2rem;
          margin-top: 5.5rem;
        }
      }
      &:last-child {
        right: -3.2rem;
        margin-top: 5.5rem;
        background: url("../assets/arr-r.svg") no-repeat center center / contain;
        @include m {
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
.tns-controls {
  margin: 0 -5rem !important;
}

@media (max-width: 480px) {
  .wrapper {
    position: relative;
    margin: 0; // Adjust margin for mobile screens
    .inner {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 0;
      img {
        display: block;
        width: 50vw; // Set constant width for images
        height: auto;
        // aspect-ratio: 1 / 1;
        z-index: 0;
      }
    }

    :deep(.tns-controls) {
      outline: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      z-index: 10; // Ensure controls are above the images
      button {
        width: 2.30413rem;
        height: 2.30413rem;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        border-radius: 50%;
        &:first-child {
          left: 2.5rem !important;
          background: url("../assets/arr-l.svg") no-repeat center center /
            contain;
          margin-top: -5rem;
        }
        &:last-child {
          right: 2.5rem !important;
          background: url("../assets/arr-r.svg") no-repeat center center /
            contain;
          margin-top: -5rem !important;
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

  .wrapped .tns-controls button:last-child {
    right: 0;
  }
}
</style>
