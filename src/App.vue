<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://www.primevideo.com/detail/GTI/amzn1.dv.gti.ffefa84e-6092-433b-9f8a-79c6dd7551ae"
      name="Main Video"
    />
  </section>

  <!-- <section class="countdown-main">
    <div class="countdown-container">
      <p class="countdown-title">Se serien om:</p>
      <ExpanderCountdown />
    </div>
  </section> -->

  <section class="section-main">
    <a
      href="https://www.primevideo.com/detail/GTI/amzn1.dv.gti.ffefa84e-6092-433b-9f8a-79c6dd7551ae"
      target="_blank"
      data-name="The cast"
    >
      <h1 class="heading">The cast</h1>
    </a>
  </section>

  <!-- <section class="section-scroller">
    <ExpanderScroller />
  </section> -->

  <section class="section-slider">
    <ExpanderSlider />
  </section>

  <!-- <section class="section-trailers">
    <a href="" target="_blank" data-name="The cast">
      <h1 class="heading">Trailers</h1>
    </a>
  </section> -->

  <!-- <section class="trailer-videos">
    <article class="items" v-for="item in items" :key="item">
      <div class="video">
        <ExpanderVideo
          :filename="item.video"
          :autoplay="false"
          url=""
          name="Trailer Video"
        />
      </div>
    </article>
  </section> -->

  <a
    href="https://www.primevideo.com/detail/GTI/amzn1.dv.gti.ffefa84e-6092-433b-9f8a-79c6dd7551ae"
    target="_blank"
    data-name="Galadriel"
  >
    <section class="footer-image"></section>
  </a>

  <footer class="section-footer sticky">
    <div class="container">
      <a
        href="https://www.primevideo.com/detail/GTI/amzn1.dv.gti.ffefa84e-6092-433b-9f8a-79c6dd7551ae"
        target="_blank"
        class="logo"
        data-name="Logo"
      >
        <img src="@/assets/logo.png" />
      </a>
      <!-- <a href="" target="_blank" class="cta" data-name="Read more">Read more</a> -->
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
// import ExpanderScroller from "./components/ExpanderScroller.vue";
import ExpanderSlider from "./components/ExpanderSlider.vue";
// import ExpanderCountdown from "./components/ExpanderCountdown.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    // ExpanderScroller,
    ExpanderSlider,
    // ExpanderCountdown,
  },
  data() {
    return {
      mobile: false,
      videoFile: "1080.mp4",
      items: [
        {
          video: "trailer1.mp4",
        },
        {
          video: "trailer2.mp4",
        },
      ],
    };
  },
  created() {
    // if (window.innerWidth < 480) {
    //   this.mobile = true
    //   this.videofile = '480.mp4'
    // }
  },
  methods: {
    track(label, category) {
      category = category || "Click";
      window.customTrack(category, "interaction", label);
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/minireset.css/minireset";
@import "@/scss/fonts.scss";
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

:root {
  --footer-height: 2rem;
  @include d {
    --footer-height: 4rem;
  }
}

html {
  font-family: $font, sans-serif;
  font-size: 16px;
  font-weight: $weight;
  color: $color-text;
  text-align: left;
  line-height: 1.3;
  @include desktop {
    font-size: 1.48vw;
  }
  @media (min-width: $width) {
    font-size: 16px;
  }
}
#app {
  position: relative;
  width: $width;
  max-width: 100%;
  margin: 0 auto;
  background: $color-bg;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: var(--footer-height);
}

img,
picture,
video {
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}
p {
  font-size: 1rem;
}
button {
  font-family: $font;
  font-size: 1rem;
  padding: 0;
  border: 0;
  background: none;
  outline: 0 none;
  cursor: pointer;
}

.section-video {
  padding: 3rem 4.06rem;
  background-image: url("@/assets/background_main.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 108.375rem;
}
.shadow {
  height: 12.6875rem;
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  margin: 0 -8.12rem;
}
.countdown-title {
  color: #fff;
  font-size: 1.8125rem;
  text-transform: uppercase;
  margin-left: 0.8rem;
}
.countdown-main {
  margin-top: -3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}
.section-main {
  background: #000;
  font-size: 1.8125rem;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 2.75rem;
}
.section-slider {
  background-color: #000;
}
.section-trailers {
  background: #000;
  font-size: 1.8125rem;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 1rem;
}
.trailer-videos {
  height: 14rem;
  background-color: #000;
}
.video {
  width: 29.8125rem;
  height: 16.75rem;
}
.trailer-videos {
  display: flex;
  justify-content: center;
}
.footer-image {
  background-image: url("@/assets/background_bottom.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 51.5625rem;
}
.logo {
  width: 25rem;
  height: auto;
}

.section-footer {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--footer-height);
    padding: 0 1rem;
    background: #000000;
    height: 7.9375rem;
  }
  &.sticky {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    .container {
      max-width: $width;
      margin: 0 auto;
    }
  }
}

@media (max-width: 480px) {
  .trailer-videos {
    flex-direction: column;
    width: 100%;
  }
  .video {
    width: 100%;
    height: auto;
  }
  .section-video {
    height: 168vw;
    padding: 0;
  }
  .footer-image {
    height: 88vw;
    margin-bottom: 12vw;
    background-color: #000;
  }
  .logo {
    width: 47vw;
    height: auto;
  }

  .section-footer {
    .container {
      height: 24vw;
    }
  }
}
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
</style>
