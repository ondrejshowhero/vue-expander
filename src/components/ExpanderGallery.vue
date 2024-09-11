<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in carouselItems" :key="item">
        <a :href="item[2]" target="_blank" class="inner" :data-name="item[0]">
          <p class="title">
            {{ item[0] }}
          </p>
          <div class="image">
            <img :src="getImage(item[1])" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { tns } from "tiny-slider";

export default {
  name: "ExpanderGallery",
  data() {
    return {
      carouselItems: [
        [
          "Sunprime Atlantic View",
          "atlantic.jpg",
          "https://www.spies.dk/de-kanariske-oer/gran-canaria/playa-del-ingles/sunprime-atlantic-view",
        ],
        [
          "Sunprime Coral Suites",
          "suites.jpg",
          "https://www.spies.dk/de-kanariske-oer/tenerife/playa-de-las-americas/sunprime-coral-suites-spa",
        ],
        [
          "Sunprime Ocean View",
          "ocean.jpg",
          "https://www.spies.dk/de-kanariske-oer/tenerife/playa-de-las-americas/sunprime-ocean-view",
        ],
      ],
    };
  },
  mounted() {
    tns({
      container: this.$refs.slider,
      items: 1,
      gutter: 0,
      controls: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayButtonOutput: false,
      loop: true,
      mode: "carousel",
      speed: 900,
    });
  },
  methods: {
    getImage(image) {
      return require(`@/assets/gallery/${image}`);
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/tiny-slider/src/tiny-slider";
</style>

<style scoped lang="scss">
@import "node_modules/tiny-slider/src/tiny-slider";
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.inner {
  position: relative;
  display: block;
  .image {
    img {
      @include m {
        aspect-ratio: 1;
        width: 100%;
        object-fit: cover;
        // max-width: none;
      }
    }
  }
  .title {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0.625rem;
    font-size: 2rem;
    font-family: $font-2;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(255, 126, 51, 0) 0%,
      rgba(255, 126, 51, 0.5) 100%
    );
    color: #fff;
    z-index: 100;
    @include d {
      padding: 1rem 1rem 1rem 4.875rem;
      font-size: 3rem;
      text-align: left;
    }
    &::before {
      content: "";
      @include cover;
      background: $color-1;
      opacity: 0;
      transition: 0.15s;
      z-index: -1;
    }
  }
  &:hover {
    .title {
      &::before {
        opacity: 1;
      }
    }
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
      transition: 0.15s;
    }
    // &:first-child {
    //   background: url('../assets/arr-l.svg') no-repeat center center / contain;
    //   @include m {
    //     left: .5rem;
    //   }
    // }
    // &:last-child {
    //   background: url('../assets/arr-r.svg') no-repeat center center / contain;
    //   @include m {
    //     right: .5rem;
    //   }
    //   @include d {
    //     margin-left: 0.625rem;
    //   }
    // }
    &:hover {
      background-color: darken($color-2, 5%) !important;
    }
    &[disabled] {
      opacity: 0.4;
      &:hover {
        background-color: transparent !important;
      }
    }
  }
}
</style>
