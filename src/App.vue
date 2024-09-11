<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url=""
      name="Main Video"
    />
  </section>

  <section class="two-options-container">
    <a href="#vennlige-frisorer" class="options">
      <div class="options options-transparent">
        <div class="options-title">
          <h1>Vennlige frisører</h1>
        </div>
      </div>
    </a>
    <a href="#arets" class="options">
      <div class="options options-transparent">
        <div class="options-title">
          <h1>ÅRETS STRANDSVEIS 2024</h1>
        </div>
      </div>
    </a>
  </section>

  <section class="section-main">
    <img src="@/assets/top-img-first.jpg" />

    <div class="section-main-txt">
      <h2 class="section-main-txt-h">Ingen klipper flere hoder enn Cutters.</h2>
      <p class="section-main-txt-lead">
        Med mer enn én million klipp i året og en
        <b>kundescore på 9,2 av 10</b> hjelper vi nordmenn med å føle seg fresh.
        Frisørene våre elsker å få folk til å føle seg fresh gjennom effektive
        klipp med god kvalitet i over <b>90 salonger i Norge</b>. Det gir verdi
        for pengene, for det skal ikke koste mye å føle seg fresh.
      </p>
      <!-- <a href="" target="_blank" class="cta" data-name="Read more"
        >Hent rabatt</a
      > -->
      <a
        href="https://www.cutters.no/ps-getfresh"
        target="_blank"
        data-name="cta"
      >
        <div class="cta">
          <p>Hent rabatt</p>
        </div>
      </a>
    </div>
  </section>

  <section class="intro-second-img">
    <img class="second-img" src="@/assets/top-img-second.jpg" />
  </section>

  <section class="gif-scroller">
    <img class="gif-scroller-img" src="@/assets/cut-loop.png" alt="" />
    <img class="gif-scroller-img" src="@/assets/cut-loop.png" alt="" />
  </section>

  <section class="section-tiles">
    <div class="tile tile-first">
      <div class="text">
        <div class="text-inner">
          <h2 class="heading-tile-first" id="vennlige-frisorer">
            Vennlige frisører
          </h2>
          <p class="p-tile-first">
            Under årets Palmesus viste Cutters hva som gjelder:
          </p>
          <div class="heading-under-container">
            <h2 class="heading-under">
              <span style="color: #fd0">vennlige</span> frisører
            </h2>
            <h2 class="heading-under">
              <span style="color: #fd0">god </span>kvalitet
            </h2>
            <h2 class="heading-under">
              og <span style="color: #fd0">god</span> stemning!
            </h2>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="tile-video tile-video-small">
          <ExpanderVideo
            :filename="items[0].video"
            :autoplay="true"
            url=""
            name="Video"
            class="expander-video-style"
          />
        </div>
      </div>
    </div>

    <div class="tile text-tile-second-container">
      <div class="text-tile-second">
        <div class="text-tile-second-inner">
          <p class="text-tile-second-p">
            Våre frisører er ikke bare flinke med saksen – de er lidenskapelig
            opptatt av å gi deg den beste opplevelsen.
          </p>
          <p>
            Flere hundre festivaldeltakere var innom pop-up salongen vår og gikk
            ut med en fresh look og et smil.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="tile-video">
          <ExpanderVideo
            :filename="items[1].video"
            :autoplay="true"
            url=""
            name="Video"
          />
        </div>
      </div>
    </div>

    <div class="tile tile-third">
      <div class="text-tile-third-container">
        <div class="text-tile-third-container-inner">
          <h2 class="text-tile-third-heading" id="arets">
            Årets Strandsveis 2024: Mullet tok seieren hjem!
          </h2>
          <div class="text-tile-third-p">
            <p class="text-tile-third-p-first">
              Før årets Palmesus ga vi publikum sjansen til å stemme frem «Årets
              Strandsveis 2024».
            </p>
            <p>
              Konkurransen var mellom noen av de aller vanligste klippene
              nordmenn foretrekker, og vinneren ble den ikoniske hockyesveisen -
              Mullet! Denne frisyren ble en klar favoritt blant Palmesus følgere
              i sosiale medier.
            </p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="tile-video">
          <ExpanderVideo
            :filename="items[2].video"
            :autoplay="true"
            url=""
            name="Video"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="text-end-container">
    <div class="yellow-line"></div>
    <div class="text-end-inner">
      <h1 class="end-title">
        Alle fortjener å føle seg fresh, og nå kan du gjøre det til en
        fantastisk pris!
      </h1>
      <div class="end-paragraphs">
        <p class="end-paragraphs-one">
          Nå kan alle nye kunder klippe seg hos Cutters for kun 99,-.
        </p>
        <p class="end-paragraphs-two">
          Bruk koden <b>«getfresh99»</b> i Cutters-appen, og møt hverdagen med
          en ny og fresh frisyre. (Koden gjelder dessverre ikke på lørdager)
        </p>
        <p class="end-paragraphs-three">
          Klar for å prøve? Besøk oss nå, og bli en del av Cutters-familien
        </p>
      </div>
      <a
        href="https://www.cutters.no/ps-getfresh"
        target="_blank"
        data-name="cta"
      >
        <div class="cta cta-end">
          <p>Hent kode</p>
        </div>
      </a>
    </div>

    <div class="yellow-line"></div>
  </section>

  <section class="bottom-img">
    <img src="@/assets/bottom-img.jpg" />
  </section>

  <!-- 
  <section class="section-scroller">
    <ExpanderScroller />
  </section>

  <section class="section-slider">
    <ExpanderSlider />
  </section> -->

  <footer class="section-footer sticky">
    <div class="container">
      <a
        href="https://www.cutters.no/ps-getfresh"
        target="_blank"
        class="logo"
        data-name="Logo"
      >
        <img src="@/assets/logo.png" />
      </a>
      <p class="section-footer-p">
        Alle nye kunder kan føle seg fresh for kun 99,- Bruk kode
        <b>«getfresh99»</b> i Cutters-appen
      </p>
      <a
        href="https://www.cutters.no/ps-getfresh"
        target="_blank"
        class="cta cta-end"
        data-name="Read more"
        >Hent kode</a
      >
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
      items: [
        {
          video: "section_video_1.mp4",
        },
        {
          video: "section_video_2.mp4",
        },
        {
          video: "section_video_3.mp4",
        },
      ],
    };
  },
  created() {
    if (window.innerWidth < 480) {
      this.mobile = true;
      this.videoFile = "480.mp4";
    }
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
  padding-bottom: 3rem !important;
  @include desktop {
    padding-bottom: 6.1875rem;
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
.two-options-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.options {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 5.5rem;
  background: #fd0;
  font-size: 1.125rem;
  text-transform: uppercase;
  color: #131313;
  font-family: "BrownRegular", sans-serif;
  transition: all 0.3s;
  cursor: pointer;
}
.options:hover {
  background-color: #fff1a2;
}
.options-transparent {
  background: transparent;
}
.options-transparent:hover {
  background: transparent;
}
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.section-footer {
  .section-footer-p {
    width: 28.5rem;
    text-align: center;
    font-size: 1.125rem;
    letter-spacing: -0.03938rem;
    font-family: "BrownLight", sans-serif;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--footer-height);
    padding: 0 3.4375rem;
    background: #3c3c3c;
    color: white;
    height: 7.1875rem;
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
.section-main {
  display: flex;
  padding: 0 10rem 0;
  background-color: #131313;
}

.section-main img {
  width: 22.625rem;
  height: 34rem;
}
.section-main-txt {
  padding: 4.25rem 4rem 0 5.75rem;
}
.section-main-txt-h {
  width: 21.6875rem;
  font-size: 1.875rem;
  font-family: "BrownRegular", sans-serif;
  color: #fff;
  letter-spacing: -0.06563rem;
  padding-bottom: 2rem;
}
.section-main-txt-lead {
  color: #fff;
  font-size: 1.125rem;
  font-family: "BrownLight", sans-serif;
  width: 25rem;
}
.cta {
  color: #131313;
  font-size: 0.9375rem;
  letter-spacing: -0.03281rem;
  background: #fd0;
  border-radius: 6.25rem;
  width: 10.625rem;
  height: 2.9375rem;
  // padding: 1rem 2.8rem;
  margin-top: 4rem;
  font-family: "BrownRegular", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  cursor: pointer;
}
.cta:hover {
  background-color: #fff1a2;
}
.intro-second-img {
  background-color: #131313;
  margin-top: -3rem;
}
.second-img {
  width: 37.5625rem;
  height: 24.875rem;
  margin-left: 17.87rem;
}

.gif-scroller img {
  background-color: #131313;
}

.gif-scroller {
  display: flex;
  overflow: hidden;
  // height: 9.8rem;
  // width: 100%;
  background-color: #131313;
  max-width: 100%; /* Ensure it does not exceed the parent container's width */
  max-height: 100%; /* Ensure it does not exceed the parent container's height */
  position: relative;
}

.gif-scroller-img {
  flex-shrink: 0;
  width: 100%;
  animation: scroll 10s linear infinite;
  margin: 0;
  padding: 0;
  padding-left: 3.375rem;
  border: none;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.section-tiles {
  .tile {
    @include d {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: black;
      div {
        flex: 1 0;
      }
    }

    .text {
      padding: 2rem 1.5rem;
      text-align: right;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @include d {
        padding: 0;
        text-align: left;
      }
      .heading {
        margin-bottom: 1rem;
        @include d {
          margin-bottom: 1.875rem;
        }
      }
      .cta {
        margin-top: 1.875rem;
        margin-left: 5rem;
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      .text {
        text-align: left;
        @include d {
          padding: 0;
        }
      }
    }
    .text-tile-second {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text-tile-second-inner {
      width: 18.75rem;
      gap: 2.25rem;
      font-family: "BrownLight", sans-serif;
      line-height: normal;
      letter-spacing: -0.03938rem;
      color: #131313;
      padding: 3rem;
    }
    .text-tile-second-p {
      margin-bottom: 2rem;
    }
    .text-tile-third-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .text-tile-third-container-inner {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 3rem;
    }
    .section-tiles .tile .text-tile-third-inner {
      width: 24.75rem;
    }
    .text-tile-third-p {
      font-family: "BrownLight", sans-serif;
      font-size: 1.125rem;
      text-align: left;
      color: white;
    }
  }
  .text-tile-second-container {
    background: #fd0;
  }
  .heading-tile-first {
    font-size: 1.875rem;
    font-family: "BrownRegular", sans-serif;
    color: #131313;
    text-align: left;
  }
  .p-tile-first {
    font-size: 1.125rem;
    font-family: "BrownLight", sans-serif;
    color: #131313;
    text-align: left;
    width: 14.125rem;
    margin-top: 1rem;
    line-height: normal;
    letter-spacing: -0.03938rem;
  }
  .heading-under-container {
    font-size: 1.5rem;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.0525rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-top: 1.44rem;
    font-family: "BrownRegular", sans-serif;
  }
}
.tile-first {
  background: white !important;
}
.tile-third {
  background: #131313;
}
.text-tile-third-p {
  width: 24.75rem;
}
.text-tile-third-heading {
  width: 21.25rem;
  color: #fff;
  font-size: 1.875rem;
  font-family: "BrownRegular", sans-serif;
  margin-bottom: 1.8rem;
}
.text-tile-third-p-first {
  margin-bottom: 2.0625rem;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tile-video {
  width: 33.75rem;
  height: 33.75rem;
  position: relative;
  overflow: hidden;
}
.expander-video-style {
  width: 100%;
  height: 100%;
}

.expander-video {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
}

.expander-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
}
.text-end-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30.44rem;
  color: #131313;
}
.yellow-line {
  height: 1.9375rem;
  width: 100%;
  background: #fd0;
}
.text-end-inner {
  width: 37.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.end-paragraphs {
  display: flex;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.03938rem;
  width: 31.75rem;
}
.end-paragraphs p {
  margin-bottom: 2rem;
}
.end-title {
  font-size: 1.875rem;
  font-family: "BrownRegular", sans-serif;
  line-height: normal;
  letter-spacing: -0.06563rem;
  text-align: center;
  margin-bottom: 1.625rem;
}
.cta-end {
  margin-top: 0;
}
.logo {
  width: 9.25rem;
  height: 3.25rem;
}

@media (max-width: 480px) {
  .tile-video {
    width: 100%;
    height: 100vw;
  }
  .tile-video-small {
    height: 59.5vw; /* Converted from 18.625rem */
    width: 59.5vw;
    padding: 1rem;
  }
  .two-options-container {
    padding: 1.54vw; /* 0.37rem * 4.16667 */
    gap: 1.54vw;
    background: #131313;
  }
  .options-title {
    width: 31.25vw;
    text-align: center;
  }
  .section-main img {
    display: none;
  }
  .section-main {
    padding: 0;
    align-items: center;
    justify-content: center;
    background-image: url("@/assets/top-img-first-mobile.jpg");
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 32vw 48vw;
  }
  .section-main-txt {
    padding: 7.47vw 8vw 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .section-main-txt-lead {
    width: 100%;
  }
  .section-main-txt-h {
    width: 100%;
  }
  .cta {
    margin: 5.6vw 0 13.33vw;
  }
  .second-img {
    width: 87.8vw; /* Converted from 19.87981rem */
    height: auto; /* Converted from 13.17619rem */
    margin-left: 11.8vw;
    padding-bottom: 8.33vw;
    margin-top: 6vw;
  }
  .gif-scroller {
    padding-bottom: 8.33vw;
  }
  .text-tile-third-p {
    width: 100%;
  }
  .text-tile-third-heading {
    width: 100%;
  }
  .end-title {
    margin-top: 3rem;
    padding: 0 3rem;
  }
  .text-end-inner {
    width: 100%;
  }
  .end-paragraphs {
    width: 100%;
    padding: 0 3rem;
  }
  .text-end-container {
    height: auto;
  }
  .cta-end,
  .section-footer-p {
    display: none;
  }
  .section-footer {
    .container {
      justify-content: center;
      height: 3rem;
    }
  }
  .logo {
    width: 5.1875rem;
    height: 1.8125rem;
  }
}
</style>
