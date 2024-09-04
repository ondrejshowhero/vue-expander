<template>
  <a
    href="https://sfstudios-dk.muvi.film/it-ends-with-us/?utm_medium=display&utm_source=showheroes&utm_campaign=digital-display&utm_content=campaign"
    target="_blank"
    data-name="Main Poster"
  >
    <section class="main-poster">
      <!-- <div class="countdown-container">
        <div class="countdown-title">
          <h1 class="countdown-title-h1">Se IT ENDS WITH US i biografen om:</h1>
        </div>
        <ExpanderCountdown />
      </div> -->
    </section>
  </a>

  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://sfstudios-dk.muvi.film/it-ends-with-us/?utm_medium=display&utm_source=showheroes&utm_campaign=digital-display&utm_content=campaign"
    />
  </section>

  <section class="section-scroller">
    <a
      href="https://sfstudios-dk.muvi.film/it-ends-with-us/?utm_medium=display&utm_source=showheroes&utm_campaign=digital-display&utm_content=campaign"
      target="_blank"
      data-name="I BIOGRAFEN 5. SEPTEMBER"
    >
      <h1 class="heading">I BIOGRAFEN 5. SEPTEMBER</h1>
    </a>
    <ExpanderScroller />

    <a
      href="https://sfstudios-dk.muvi.film/it-ends-with-us/?utm_medium=display&utm_source=showheroes&utm_campaign=digital-display&utm_content=campaign"
      target="_blank"
      data-name="I BIOGRAFEN 5. SEPTEMBER"
    >
      <div class="p-container">
        <p class="lead">
          Lily Bloom (Blake Lively) har ikke altid haft det let, men nu ser alt
          lysere ud. Hun er klar til at starte sit nye liv i Boston og realisere
          sin livslange drøm om at få sin egen blomsterbutik. Helt tilfældigt
          møder hun den meget charmerende neurokirurg Ryle (Justin Baldoni), der
          fuldstændig slår benene væk under hende. De forelsker sig dybt, men
          der er også sider i deres forhold, som skaber udfordringer. Da Lilys
          første kærlighed, Atlas (Brandon Sklenar), pludselig kommer ind i
          hendes liv igen, ændres hendes forhold til Ryle, og Lily indser, at
          hun må lære at stole på egen styrke for at træffe et umuligt valg for
          sin fremtid...
        </p>
      </div>
    </a>
  </section>

  <section class="section-slider">
    <ExpanderSlider />
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a
        href="https://sfstudios-dk.muvi.film/it-ends-with-us/?utm_medium=display&utm_source=showheroes&utm_campaign=digital-display&utm_content=campaign"
        target="_blank"
        data-name="I biografen nu"
      >
        <p class="footer-p">I biografen nu</p>
      </a>

      <!-- <AddToCalendar /> -->
      <!-- <a href="" target="_blank" class="cta">I BIOGRAFEN 5. SEPTEMBER</a> -->
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
import ExpanderSlider from "./components/ExpanderSlider.vue";
// import ExpanderCountdown from "./components/ExpanderCountdown.vue";
// import AddToCalendar from "./components/AddToCalendar.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    ExpanderSlider,
    // ExpanderCountdown,
    // AddToCalendar,
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

.section-scroller {
  background-image: url("@/assets/desktop_background2.jpg");
  width: 100%;
  height: 83.27138rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.section-slider {
  margin-top: -45.5rem;
}
.lead {
  margin-top: 49.5rem;
  display: flex;
  width: 52.875rem;
  height: 15.125rem;
  padding: 0.8125rem 3.25rem 0.8125rem 3.1875rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: linear-gradient(
    180deg,
    rgba(18, 31, 40, 0) 0%,
    rgba(18, 31, 40, 0.7) 23.31%,
    rgba(18, 31, 40, 0.7) 83.67%,
    rgba(18, 31, 40, 0) 99%
  );
  color: #fff;
  font-size: 1.25rem;
  font-family: "Gotham", sans-serif;
  line-height: normal;
}
.p-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
}
.heading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2.3rem;
  color: #fff;
  text-align: center;
  font-size: 2.875rem;
  font-family: $font;
}

code for custom scrollbar ::-webkit-scrollbar {
  width: 0.2em;
}
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0);
}
::-webkit-scrollbar-thumb {
  background: rgba(100, 100, 100, 0.7);
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(85, 85, 85);
}

.countdown-title-h1 {
  color: #fff;
  font-family: "Bebas", sans-serif;
  font-size: 1.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.countdown-container {
  padding-top: 47rem;
  padding-left: 3.75rem;
}

.section-footer {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    padding: 0 1rem;
    color: #fff;
    font-family: "Gotham", sans-serif;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    flex-direction: column;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid #9f9ecf !important;
  background: #121f28;
  -webkit-text-stroke-color: #9f9ecf;
}
.section-footer {
  height: 6rem;
}

@media (max-width: 480px) {
  .section-footer {
    height: 16vw !important;
  }
  .countdown-container {
    padding-top: 94vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    padding-right: 15vw;
  }
  .countdown-title-h1 {
    font-size: 6.042vw;
  }
  .heading {
    padding-top: 4.1vw;
    font-size: 9.583vw;
  }
  .section-scroller {
    background-image: url("@/assets/mobile_background2.jpg");
    height: 233vw;
  }
  .lead {
    margin-top: 95vw;
    width: 100%;
    font-size: 3.333vw;
    height: 93.417vw;
    padding: 1rem 1.5rem;
    line-height: 4.583vw;
  }
  .cta {
    font-size: 5.833vw;
  }
  .section-slider {
    margin-top: -160vw;
  }
}
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.footer-p {
  font-size: 4rem;
  font-family: "Bebas", sans-serif;
}
.main-poster {
  width: 100%;
  height: 94.93763rem;
  background-image: url("@/assets/desktop_background.jpg");
  background-size: cover; /* Ensure the image covers the entire element */
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
}

@media (max-width: 480px) {
  .main-poster {
    height: 135vw;
    background-image: url("@/assets/mobile_background.jpg");
    background-size: cover; /* Ensure the image covers the entire element */
    background-position: center; /* Center the image */
    background-repeat: no-repeat;
    background-color: #121f28;
  }
  .footer-p {
    padding: 0 0 1vw 0;
    font-size: 9vw;
  }
}
</style>
