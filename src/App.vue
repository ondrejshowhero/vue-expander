<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      :url="generateUrl('https://www.ving.se/kanarieoarna/hotell')"
      name="Main Video"
    />
  </section>

  <section class="section-main section-main-first" ref="sectionMain">
    <div class="section-main-content">
      <div class="logo">
        <img src="@/assets/ving.png" />
      </div>
      <h1 class="heading">Upplev Ving-effekten på Kanarieöarna</h1>
      <p class="lead">
        En riktigt bra semester gör något magiskt med oss. Nyckeln till den
        magin? En bekymmersfri resa. När någon har löst alla problem åt dig. Det
        är vad vi kallar Ving-effekten.
      </p>
    </div>
  </section>

  <section class="section-gallery">
    <div class="intro">
      <p class="lead">
        På Kanarieöarna finns flera av våra bästa hotell för dig som reser utan
        barn. Vuxenhotellen har en högre åldersgräns, så att du bättre kan njuta
        av din semester i lugn och ro.
      </p>
    </div>
    <ExpanderGallery />
    <section class="section-main info" ref="sectionMain">
      <div class="section-main-content">
        <h1 class="heading">Sunprime Hotels</h1>
        <p>
          Sunprime är våra egna koncepthotell bara för vuxna. Här kan du njuta
          av härliga spabehandlingar och utsökt mat i lugna omgivningar.
          Hotellen har en åldersgräns på 16 år.
        </p>
      </div>
    </section>
  </section>

  <section class="section-slider">
    <h1 class="heading">Fler hotelltips för dig som reser utan barn</h1>
    <ExpanderSlider />
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a
        :href="generateUrl('https://www.ving.se/kanarieoarna/hotell')"
        target="_blank"
        class="logo"
        data-name="Logo"
      >
        <img src="@/assets/ving-w.svg" />
      </a>
      <a
        :href="generateUrl('https://www.ving.se/kanarieoarna/hotell')"
        target="_blank"
        class="cta"
        data-name="Boka nu"
      >
        BOKA nu
      </a>
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
import ExpanderGallery from "./components/ExpanderGallery.vue";
import ExpanderSlider from "./components/ExpanderSlider.vue";
import utmDirective from "./directives/utm";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    ExpanderGallery,
    ExpanderSlider,
  },
  directives: {
    utm: utmDirective,
  },
  data() {
    return {
      mobile: false,
      videoFile: "1080.mp4",
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.centerImage();
    const sectionMain = this.$refs.sectionMain;
    if (sectionMain) {
      sectionMain.style.backgroundPositionY = "37.8889px";
      sectionMain.style.backgroundAttachment = "fixed";
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sectionMain = this.$refs.sectionMain;
      if (sectionMain) {
        const scrollPosition = window.scrollY;
        if (scrollPosition <= 11.7778) {
          sectionMain.style.backgroundPositionY = `${scrollPosition * 0.2}px`;
        } else {
          sectionMain.style.backgroundPositionY = "1.7778px";
        }
      }
    },
    track(label, category = "Click") {
      window.customTrack(category, "interaction", label);
    },
    centerImage() {
      const sectionMain = this.$refs.sectionMain;
      const image = sectionMain.querySelector("img");
      if (sectionMain && image) {
        const containerHeight = sectionMain.offsetHeight;
        const imageHeight = image.offsetHeight;
        const topMargin = (containerHeight - imageHeight) / 2;
        image.style.marginTop = `${topMargin}px`;
      }
    },
    generateUrl(baseUrl) {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const utmParams = isMobile
        ? "?utm_source=programmatic&utm_medium=display&utm_campaign=semi-tct-aws-w2425-canarias-longhaul-brd-exp&utm_content=semi-tct-aws-w2425-canarias-longhaul-mix-ia-xpa-mob-v1"
        : "?utm_source=programmatic&utm_medium=display&utm_campaign=semi-tct-aws-w2425-canarias-longhaul-brd-exp&utm_content=semi-tct-aws-w2425-canarias-longhaul-mix-ia-xpa-dsk-v1";
      return `${baseUrl}${utmParams}`;
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
  --footer-height: 6rem;
  @include d {
    --footer-height: 10rem;
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
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.section-main {
  padding: 4.75rem 1.5rem 5rem;
  text-align: center;
  background: #fdfdfb url("@/assets/bg.jpg") no-repeat center center / cover;

  @include d {
    background: #fdfdfb url("@/assets/bg.jpg") no-repeat center bottom / 100%
      auto;
  }
  .logo {
    display: block;
    width: 8.25rem;
    margin: 0 auto 3.5rem;
    @include d {
      width: 15rem;
      margin: 0 auto 2.25rem;
    }
  }
  .heading {
    margin-bottom: 1.75rem;
    font-family: $font-2;
    font-size: 1.625rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    @include d {
      font-size: 2.25rem;
    }
  }
  .lead {
    font-size: 1.125rem;
    max-width: 40rem;
    margin: 0 auto;
    @include m {
      br {
        display: none;
      }
    }
    @include d {
      font-size: 1.5rem;
    }
  }
}

.section-slider {
  padding: 0.625rem 1.5rem 4.5rem;
  background: #fff;
  box-shadow: 0.125rem 0.125rem 0.625rem 0rem rgba(0, 0, 0, 0.1);
  @include d {
    padding: 2rem 4.75rem 5rem;
  }
  .heading {
    margin-bottom: 1rem;
    font-family: $font-2;
    font-size: 1.625rem;
    @include d {
      font-size: 2.25rem;
    }
    span {
      white-space: nowrap;
    }
  }
}

.section-footer {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: var(--footer-height);
    padding: 2rem 1.25rem 0;
    background: url("@/assets/bg-footer-mobile.png") no-repeat center bottom /
      100% auto;
    @include d {
      padding: 5rem 3.5rem 0;
      background: url("@/assets/bg-footer.png") no-repeat center bottom / 100%
        auto;
    }
  }
  .logo {
    width: 27.5vw;
    @include d {
      width: 10rem;
    }
  }
  .cta {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.75vw;
    height: 8.75vw;
    padding: 0.25rem 0.25rem 0;
    font-family: $font-3;
    font-size: 1.5rem;
    border-radius: 3rem;
    color: $color-1;
    background: #fff;
    transition: all 0.3s;
    text-transform: uppercase;

    @include d {
      width: 13.625rem;
      height: 3.625rem;
      padding: 0.25rem 0.25rem 0;
      font-size: 1.875rem;
    }
    &:hover {
      font-weight: bold;
    }
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
      padding-bottom: 1.6rem;
    }
  }
}

// parallax
.section-main {
  position: relative;
  overflow: hidden;
  height: 28rem;
  background-image: url("@/assets/bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
}

.section-main-content {
  position: relative;
  z-index: 1;
  padding: 1rem 4.75rem;
  /* Add more styles for your content */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.logo img {
  margin-top: 0 !important;
}

.section-gallery {
  .intro {
    padding: 4.5rem 1.5rem;
    background: #fff;
    .lead {
      font-size: 1.125rem;
      max-width: 40rem;
      margin: 0 auto;
      text-align: center;
      @include d {
        font-size: 1.5rem;
      }
    }
  }
  .info {
    padding: 1.75rem 0 2.75rem;
    height: 16.8rem !important;
    text-align: left;
    @include d {
      // padding: 3rem 4.75rem;
    }
    .heading {
      font-family: $font-2;
      font-size: 1.625rem;
      text-align: left;
      margin: 0;
      margin-bottom: 1rem;
      @include d {
        margin-bottom: 1rem;
        font-size: 2.25rem;
      }
    }
    p {
      font-size: 1.125rem;
      @include d {
        font-size: 1.5rem;
      }
    }
  }
}

@media (max-width: 480px) {
  .section-gallery {
    .info {
      p {
        max-width: 22rem;
      }
    }
  }
  .section-main-content {
    padding: 1.5rem;

    .logo {
      width: 50vw;
      height: auto;
    }
  }
  .section-main-content {
    padding: 1rem;
  }
  .section-main-first {
    padding: 3.5rem 1.5rem 5rem;
  }
  .container {
    margin-bottom: -0.1rem !important;
  }
  .cta {
    font-size: 5vw !important; /* Converted font-size */
    width: 33.75vw !important;
    height: 8.75vw !important;
  }
}
</style>
