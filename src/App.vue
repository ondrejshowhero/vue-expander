<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://www.postnord.no/"
      name="Main Video"
    />
  </section>

  <section class="section-main">
    <h1 class="heading">Send julegavene dine med PostNord</h1>
    <p class="lead">
      Med PostNord kan du enkelt, trygt og rimelig sende pakker i hele Norge.
      Bestill og betal enkelt på nett, og send fra et av våre 1600
      leveringssteder. Vi har emballasje og etiketter på alle våre steder for
      enkel innpakning.
    </p>
    <p class="lead lead2">
      Husk å sende pakken din innen 16. desember for å være <br />
      sikker på at den kommer frem til jul.
    </p>
    <a
      href="https://www.postnord.no/"
      target="_blank"
      class="cta"
      data-name="Read more"
      >Bestill frakt her</a
    >
  </section>

  <section class="options-container">
    <div class="options-box">
      <div class="option" v-for="(option, index) in options" :key="index">
        <h1 class="options-heading">{{ option.heading }}</h1>
        <p class="options-p" v-html="option.text"></p>
      </div>
    </div>

    <div class="options-small-txt-container">
      <p class="options-small-txt">
        Maksimal lengde på pakken er 120 cm. Lengde + omkrets kan maksimalt være
        240 cm, uansett vekt.
      </p>
    </div>
  </section>

  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile2"
      :mobile="mobile"
      :autoplay="true"
      url="https://www.postnord.no/"
      name="Video 2"
    />
  </section>

  <section class="footer">
    <div class="logo-cont">
      <a href="https://www.postnord.no/" target="_blank" data-name="Logo">
        <img class="logo" src="@/assets/images/logo.png" />
      </a>
    </div>
    <div class="bottom-p-cont">
      <p class="bottom-p">Vi gjør hverdagen enklere.</p>
    </div>
  </section>

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
// import ExpanderScroller from './components/ExpanderScroller.vue'
// import ExpanderSlider from './components/ExpanderSlider.vue'

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
      videoFile2: "video2.mp4",
      options: [
        {
          heading: "Enkelt",
          text: "Betal på nett og lever pakken på et av våre 1600 pakkeleveringssteder. <span class='underline'>Finn ditt nærmeste sted her.</span>",
        },
        {
          heading: "Trygt",
          text: "Pakken kan spores av både deg og mottaker fra den sendes til den er trygt levert.",
        },
        {
          heading: "Rimelig",
          text: "For pakker opptil 5 kg betaler du kun 69 kroner. Skal du sende større pakker koster det mer. <span class='underline'>Se alle priser her.</span>",
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
  // padding-bottom: var(--footer-height);
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
.section-main {
  background-image: url("@/assets/images/bg-1.jpg");
  background-position: center;
  background-size: cover;
  height: 31.22rem;
  padding: 3rem 0 0 4.69rem;
  @include mobile {
    padding: 2rem 1rem 0;
    background-position: right bottom;
    background-size: contain;
    background-repeat: no-repeat;
    height: 45rem;
    background-color: #e8f9ef;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}
.heading {
  color: #002f24;
  font-family: "PostNordSansBold", sans-serif;
  font-size: 2.625rem;
  margin-bottom: 1.8rem;
  line-height: normal;
}
.lead {
  color: #002f24;
  font-family: "PostNordSansRegular", sans-serif;
  font-size: 1.65625rem;
  padding-bottom: 2rem;
  width: 56.0625rem;
  line-height: normal;
  @include mobile {
    width: 100%;
    font-size: 1.4rem;
  }
}
.cta {
  width: 25.5rem;
  height: 4.5rem;
  border-radius: 3.125rem;
  background: #005e41;
  color: #e8f9ef;
  text-align: center;
  font-family: "PostNord Sans";
  font-size: 2.0625rem;
  font-family: "PostNordSansBold", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @include mobile {
    width: 85vw;
    height: 15vw;
    font-size: 6.875vw;
  }
}
.lead2 {
  padding-bottom: 3.25rem;
}
.underline {
  text-decoration: underline;
}
.options-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 13.31rem;
  background: #abe3bb;
  @include mobile {
    height: auto;
  }
}
.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 18.1rem;
}
.options-heading {
  color: #002f24;
  text-align: center;
  font-family: "PostNord Sans";
  font-size: 2.40625rem;
  font-family: "PostNordSansBold", sans-serif;
  margin-bottom: 0.7rem;
}
.options-p {
  color: #002f24;
  text-align: center;
  font-size: 1.0625rem;
  font-family: "PostNordSansRegular", sans-serif;
}
.options-box {
  display: flex;
  gap: 4.44rem;
  margin: 2.13rem 0 1.6rem;
  @include mobile {
    flex-direction: column;
  }
}
.options-small-txt {
  font-family: "PostNordSansLight", sans-serif;
  margin-bottom: 1rem;
  color: #002f24;
  text-align: center;
  font-size: 0.8125rem;
}
.footer {
  background-color: #002f24;
  height: 9.81rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.logo {
  width: 18.5625rem;
  height: 3.43594rem;
  margin: 2.7rem 0 0.5rem;
}
.bottom-p {
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-family: "PostNordSansRegular", sans-serif;
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
