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
    <h1 class="heading">Velg levering i pakkeautomat</h1>
    <p class="lead">
      Velger du pakkeautomat når du handler på nett, kan du hente pakken din der
      du bor eller ferdes, når som helst. Pakkeautomatene våre er åpne hele
      døgnet, så du slipper å forholde deg til både kø og åpningstider.
    </p>
    <p class="lead lead2">
      Vi har nå nesten 4000 pakkeautomater rundt omkring i hele landet.<br />Vet
      du hvor din nærmeste pakkeautomat er?
    </p>
    <a
      href="https://www.postnord.no/"
      target="_blank"
      class="cta"
      data-name="Read more"
      >Her er din nærmeste pakkeautomat</a
    >
  </section>

  <section class="section-slider">
    <ExpanderSlider />
  </section>

  <section class="options-container">
    <div class="options-header">
      <h1 class="options-header-txt">Slik fungerer det</h1>
    </div>
    <div class="options-box">
      <div class="option" v-for="(option, index) in options" :key="index">
        <!-- <h1 class="options-heading">{{ option.heading }}</h1> -->
        <img :src="option.imageSrc" class="options-img" />
        <p class="options-p" v-html="option.text"></p>
      </div>
    </div>
  </section>

  <!-- <section class="section-video">
    <ExpanderVideo
      :filename="videoFile2"
      :mobile="mobile"
      :autoplay="true"
      url="https://www.postnord.no/"
      name="Video 2"
    />
  </section> -->

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
import ExpanderSlider from "./components/ExpanderSlider.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    // ExpanderScroller,
    ExpanderSlider,
  },
  data() {
    return {
      mobile: false,
      videoFile: "1080.mp4",
      videoFile2: "video2.mp4",
      options: [
        {
          imageSrc: require("@/assets/images/1.png"),
          text: "Sjekk om nettbutikken tilbyr levering til en automat i nærheten og velg dette alternativet i kassen",
        },
        {
          imageSrc: require("@/assets/images/2.png"),
          text: "Du mottar varsel på SMS når pakken er klar til å hentes i automaten.",
        },
        {
          imageSrc: require("@/assets/images/3.png"),
          text: "Bruk PostNord-appen til å åpne luken. I appen kan du også følge med på sendingen underveis.",
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
    background-color: #8eddf9;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}
.heading {
  color: #0d234b;
  font-family: "PostNordSansBold", sans-serif;
  font-size: 2.625rem;
  margin-bottom: 1.8rem;
  line-height: normal;
}
.lead {
  color: #0d234b;
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
  width: 28.25rem;
  height: 4.875rem;
  border-radius: 3.125rem;
  background: #005d92;
  color: #e0f8ff;
  text-align: center;
  font-size: 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "PostNordSansMedium", sans-serif;
  cursor: pointer;
  @include mobile {
    width: 94.17vw;
    height: 16.25vw;
    font-size: 5.21vw;
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
  justify-content: flex-start;
  align-items: center;
  height: 13.31rem;
  background: #8eddf9;
  @include mobile {
    height: auto;
  }
}
.option {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  // width: 14.8125rem;
}
.options-img {
  width: 4.25rem;
  height: 4.25rem;
  margin-right: 1rem;
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
  width: 14.8125rem;
}
.options-box {
  display: flex;
  gap: 3.9rem;
  // margin: 2.13rem 0 1.6rem;
  align-items: flex-start;
  padding: 2rem 2.19rem 0;
  @include mobile {
    flex-direction: column;
    padding: 2rem 2.19rem;
  }
}
.options-header-txt {
  color: #0d234b;
  text-align: center;
  font-family: "PostNordSansBold", sans-serif;
  font-size: 2.28125rem;
  margin-top: 1rem;
}

.footer {
  background: #005d92;
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
