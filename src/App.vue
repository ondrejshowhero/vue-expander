<template>
  <section class="header">
    <a
      href="https://ugensavis.xn--minkbmand-o8a.dk/?utm_medium=OLV&utm_source=Showheros&utm_campaign=vinterkampagne"
      target="_blank"
      class="cta-logo"
      data-name="logo"
    >
      <img src="@/assets/logo.png" class="header-img" />
    </a>
    <p class="header-par">Mere lokalt bliver det ik</p>
  </section>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://ugensavis.xn--minkbmand-o8a.dk/?utm_medium=OLV&utm_source=Showheros&utm_campaign=vinterkampagne"
      name="Main Video"
    />
  </section>
  <section class="section-iframe">
    <iframe
      src="https://ugensavis.xn--minkbmand-o8a.dk/"
      class="iframe-content"
      frameborder="0"
      allowfullscreen
    >
    </iframe>
  </section>

  <section class="section-main">
    <img src="@/assets/img.png" alt="" class="bottom-img" />
    <div class="bottom-txt">
      <p class="lead">
        Hos Min Købmand finder du et bredt udvalg, så du kan købe ind til hele
        ugen. Så er du fri for at køre hele byen rundt.
      </p>
      <p class="lead">
        Husk, at du altid kan tage fat i din lokale købmand, hvis du har ønsker
        til nye varer, som du gerne ser i butikkens vareudvalg.
      </p>
      <p class="lead">
        Få det hele uden at besøge dem alle. Mere lokalt bliver det ik’.
      </p>
      <a
        href="https://ugensavis.xn--minkbmand-o8a.dk/?utm_medium=OLV&utm_source=Showheros&utm_campaign=vinterkampagne"
        target="_blank"
        class="cta"
        data-name="Læs ugens avis her"
        >Læs ugens avis her</a
      >
    </div>
  </section>

  <!-- <section class="section-scroller">
    <ExpanderScroller />
  </section>
     
  <section class="section-slider">
    <ExpanderSlider />
  </section> -->

  <footer class="section-footer sticky">
    <div class="container">
      <a
        href="https://xn--minkbmand-o8a.dk/find-butik?utm_medium=OLV&utm_source=Showheros&utm_campaign=vinterkampagne"
        target="_blank"
        class="find"
        data-name="Location"
      >
        <img class="find-img" src="@/assets/find.png" />
      </a>
      <a
        href="https://ugensavis.xn--minkbmand-o8a.dk/?utm_medium=OLV&utm_source=Showheros&utm_campaign=vinterkampagne"
        target="_blank"
        class="cta-logo"
        data-name="logo"
      >
        <img src="@/assets/logo.png" class="cta-img" />
      </a>
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
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
  --footer-height: 12.5vw; // Converted to vw for screen width 480px
  @include d {
    --footer-height: 4.86rem;
  }
}

html {
  font-family: $font, sans-serif;
  font-size: 16px;
  font-weight: $weight;
  color: $color-text;
  text-align: left;
  line-height: 1.3;
  background: #e0e4db;
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
  background: #e0e4db;
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
    background: #054628;
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
.header {
  height: 4.86rem;
  display: flex;
  justify-content: space-between;
  background: #054628;
  align-items: center;
  padding: 0 1.25rem;
  @include m {
    flex-direction: column;
    gap: 1.5vw;
    justify-content: center;
  }
}
.header-img {
  width: 17.375rem;
  height: 2.68919rem;
  @include m {
    width: 25vw;
    height: auto;
  }
}
.header-par {
  color: #fff;
  text-align: right;
  font-size: 2.25rem;
  letter-spacing: 0.1575rem;
  text-transform: uppercase;
  font-family: "ProgramNarOT";
  @include m {
    font-size: 5.42vw; // Converted to vw for screen width 480px
    justify-content: center;
    letter-spacing: 0.328vw; // Converted to vw for screen
  }
}
.section-main {
  height: 28rem;
  background: #e0e4db;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @include m {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
}
.bottom-img {
  width: 29.1875rem;
  height: 19.4375rem;
  @include m {
    width: 62vw;
    height: auto;
    padding-top: 10vw;
  }
}
.bottom-txt {
  width: 26.6875rem;
  color: black;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  font-family: "ProgramOT-Book", sans-serif;
  font-size: 1.25rem;
  @include m {
    font-size: 2.67vw; // Converted to vw for screen width 480px
    width: 70%;
    padding-bottom: 10vw;
  }
}
.lead {
  font-family: "ProgramOT-Book", sans-serif;
  font-size: 1.25rem;
  color: black;
  @include m {
    font-size: 2.67vw; // Converted to vw for screen width 480px
  }
}
.cta {
  text-decoration-line: underline;
}
// .find {
//   width: 9.45869rem;
//   height: 2.9375rem;
// }
.find-img {
  width: 9.45869rem;
  height: 2.9375rem;
  @include m {
    width: 25vw;
    height: auto;
  }
}
.cta-img {
  width: 17.375rem;
  height: 2.68919rem;
  @include m {
    width: 42vw;
    height: auto;
  }
}
.iframe-content {
  width: 100%;
  height: 43.625rem;
  @include m {
    width: 100%;
    height: 97.55vw; // Converted to vw for screen width 480px
  }
}
</style>
