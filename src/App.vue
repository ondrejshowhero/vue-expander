<template>
  <footer class="section-footer-top sticky sticky-top">
    <div class="container">
      <div class="container-img">
        <a href="" target="_blank" class="logo" data-name="Logo">
          <img src="@/assets/logo_viaplay.png" />
        </a>
        <a href="" target="_blank" class="logo-two" data-name="Logo">
          <img src="@/assets/logo_3.png" />
        </a>
        <a href="" target="_blank" class="slogan" data-name="Read more"
          >Paradise Hotel</a
        >
      </div>
      <!-- <a href="" target="_blank" class="slogan" data-name="Read more"
        >Tirsdag-torsdag fra 22.00</a
      > -->
      <div class="container-countdown">
        <ExpanderCountdown
          :date="new Date('2024-12-31T23:59:59').toISOString()"
        />
      </div>
    </div>
  </footer>

  <div class="section-background">
    <section class="section-video">
      <ExpanderVideo
        :filename="videoFile"
        :mobile="mobile"
        :autoplay="true"
        url=""
        name="Main Video"
      />
    </section>
  </div>

  <!-- <section class="section-main">
    <h1 class="heading">Some heading here</h1>
    <p class="lead">Some introductory text is placed here</p>
    <a href="" target="_blank" class="cta" data-name="Read more">Read more</a>
  </section> -->

  <footer class="section-footer sticky">
    <div class="container">
      <div class="container-img">
        <a href="" target="_blank" class="logo" data-name="Logo">
          <img src="@/assets/logo_viaplay.png" />
        </a>
        <a href="" target="_blank" class="logo-two" data-name="Logo">
          <img src="@/assets/logo_3.png" />
        </a>
        <a href="" target="_blank" class="slogan" data-name="Read more"
          >Tirsdag-torsdag fra 22.00</a
        >
      </div>
      <a href="" target="_blank" class="cta" data-name="Read more">STREAM NU</a>
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
import ExpanderCountdown from "./components/ExpanderCountdown.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    ExpanderCountdown,
  },
  data() {
    return {
      mobile: false,
      videoFile: "1080.mp4",
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
  padding-top: 7.31rem;
  background: #252433;
  @include mobile {
    padding-top: 9.5vw;
  }
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
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.section-footer {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--footer-height);
    padding: 0 1rem;
    background: #fff;
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

.section-footer-top {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.81rem;
    height: 7.31rem;
    background: #252433;
    @include mobile {
      height: 9.5vw;
      padding: 0 1rem 0 1rem;
    }
  }
  &.sticky-top {
    position: fixed;
    left: 0;
    z-index: 1000;
    width: 100%;
    top: 0;
    .container {
      max-width: $width;
      margin: 0 auto;
    }
  }
}
.section-video {
  padding: 2.37rem 2.5rem 0;
  @include mobile {
    padding: 3vw 3.25vw 0;
  }
}
.container-img {
  display: flex;
  gap: 0.19rem;
}
.logo {
  width: 4.75rem;
  height: 4.9375rem;
  @include mobile {
    width: 7.03125vw;
    height: 6.640625vw;
  }
}
.logo-two {
  width: 3.6875rem;
  height: 3.6875rem;
  @include mobile {
    width: 6vw;
    height: 6vw;
  }
}
.slogan {
  color: #fff;
  text-shadow: 0px 4px 27.7px rgba(0, 0, 0, 0.95);
  font-size: 1.875rem;
  align-items: center;
  padding-left: 1.13rem;
  display: flex;
  font-family: "ViaplaySans-Bold", sans-serif;
  @include mobile {
    font-size: 2.5vw;
  }
}
.section-background {
  background: url("@/assets/img_mobile.jpg") no-repeat top center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 119rem;
  @include mobile {
    background: url("@/assets/img_mobile.jpg") no-repeat top / 100% auto;
    background-size: contain; /* Adjust as needed */
    background-position: top center;
    max-height: 206vh;
  }
}
.container-countdown {
  color: #fff;
}
</style>
