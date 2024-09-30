<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://www.fjallraven.com/de/de-de/"
      name="Main Video"
    />
  </section>

  <section class="top">
    <img src="@/assets/text_1.png" class="text-top" />
  </section>

  <section class="images-long">
    <a
      href="https://www.fjallraven.com/de/de-de/"
      target="_blank"
      data-name="Logo"
    >
      <img src="@/assets/img_tall.png" />
    </a>
  </section>

  <section class="text-two">
    <a
      href="https://www.fjallraven.com/de/de-de/"
      target="_blank"
      data-name="Logo"
    >
      <img src="@/assets/text_2.png" class="text-two-img" />
    </a>
  </section>

  <section class="main-paragraph">
    <p class="main-paragraph-inner">
      <span class="font-style-one">
        Alles, was wir tun, hat Folgen für unsere Umwelt sowie die Menschen und
        Tiere, die darin leben. Als Outdoorunternehmen sind wir uns dieser
        Auswirkungen bewusst und tun unser Bestes, um unseren ökologischen
        Fußabdruck zu minimieren.
      </span>
      <span class="font-style-two">
        Passend dazu entwickeln wir Produkte, die Jahrzehnte überdauern und dann
        an die nächste Generation weitergegeben oder auf dem Secondhandmarkt
        verkauft werden können. Das Ergebnis: Es wird weniger produziert, der
        Energieverbrauch sinkt und weniger Produkte landen im Müll. Natürlich
        ist jedoch immer noch Luft nach oben. Der Weg zur Nachhaltigkeit ist
        nämlich ein ganz besonderer - er hat viele Checkpoints, aber keine
        Ziellinie.
      </span>
    </p>
  </section>

  <section class="buttons">
    <div class="buttons-inner">
      <a href="#" target="_blank" class="cta" data-name="Finde mehr heraus"
        >Finde mehr heraus</a
      >
      <a
        href="https://www.fjallraven.com/de/de-de/bekleidung/jacken/"
        target="_blank"
        class="cta"
        data-name="Jetzt einkaufen"
        >Jetzt einkaufen</a
      >
    </div>
  </section>

  <section class="bottom-img">
    <a
      href="https://www.fjallraven.com/de/de-de/"
      target="_blank"
      data-name="Logo"
    >
      <img src="@/assets/base_img.png" />
    </a>
  </section>

  <section class="footer">
    <a
      href="https://www.fjallraven.com/de/de-de/"
      target="_blank"
      data-name="Logo"
    >
      <img src="@/assets/base_logo.png" />
    </a>
  </section>
  <!-- <section class="section-main">
    <h1 class="heading">Some heading here</h1>
    <p class="lead">Some introductory text is placed here</p>
    <a href="" target="_blank" class="cta" data-name="Read more">Read more</a>
  </section> -->

  <!-- <section class="section-scroller">
    <ExpanderScroller />
  </section>

  <section class="section-slider">
    <ExpanderSlider />
  </section> -->

  <!-- <footer class="section-footer sticky">
    <div class="container">
      <a href="" target="_blank" class="logo" data-name="Logo">
        <img src="@/assets/logo.png">
      </a> 
      <a href="" target="_blank" class="cta" data-name="Read more">Read more</a>
    </div>
  </footer> -->
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
// import ExpanderScroller from "./components/ExpanderScroller.vue";
// import ExpanderSlider from "./components/ExpanderSlider.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    // ExpanderScroller,
    // ExpanderSlider,
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
  // padding-bottom: var(--footer-height);
  background: linear-gradient(0deg, #fba94b 0%, #fba94b 100%), #f4f4f4;
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
.text-top {
  width: 37.6735rem;
  height: 18.96356rem;
  margin-top: 3.23rem;
  margin: 3.23rem 0 3.85rem;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}
.images-long {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin-top: -2.1875rem;
  img {
    width: 100%;
    height: auto;
  }
}
.text-two {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40.22675rem;
    height: 9.17669rem;
    margin-bottom: 1.55rem;
  }
}
.font-style-one {
  font-family: "ArcticFox-Bold", sans-serif;
}

.font-style-two {
  font-family: "ArcticFox-Regular", sans-serif;
}
.main-paragraph-inner {
  width: 55.25rem;
  text-align: center;
  color: #000;
  font-size: 1.375rem;
}
.main-paragraph {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.8rem;
}
.cta {
  display: inline-flex;
  padding: var(--Space-Padding-sm, 1.14206rem)
    var(--Space-Padding-xxl, 2.28406rem);
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "ArcticFox-Bold", sans-serif;
  font-size: 1.52275rem;
  line-height: 1.90344rem; /* 125% */
  text-transform: uppercase;
  border-radius: 0.31606rem;
  background: var(--Color-Interface-Button-SecondaryButtonColor, #303030);
  transition: all 0.3s ease;
}
.cta:hover {
  color: rgba(255, 255, 255, 0.8);
}
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.93rem;
}
.bottom-img {
  margin-top: 0.59rem;
}
.bottom-img img {
  height: 42.75rem;
  width: 100%;
}
.footer img {
  width: 19.4375rem;
  height: 7.125rem;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18.25rem;
  background: #7d94ae;
}
@media (max-width: 480px) {
  .text-top {
    height: auto;
    padding: 0 6.67vw;
  }
  .text-two img {
    height: auto;
    padding: 5vw 6.67vw 0;
  }
  .main-paragraph-inner {
    font-size: 3.33vw;
  }
  .main-paragraph {
    padding: 0 6.67vw;
  }
  .buttons-inner {
    flex-direction: column;
  }
  .bottom-img img {
    height: auto;
  }
  .footer img {
    width: 64.79vw;
    height: 23.75vw;
  }
  .cta {
    padding: var(--Space-Padding-sm, 3.81vw) var(--Space-Padding-xxl, 7.61vw);
    font-size: 5.08vw;
    line-height: 6.34vw; /* 125% */
    border-radius: 1.05vw;
  }
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
</style>
