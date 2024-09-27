<template>
  <a href="https://pusterommet.webflow.io" target="_blank" data-name="logo">
    <div class="top-logo">
      <img src="@/assets/images/logo.png" />
    </div>
  </a>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://pusterommet.webflow.io"
      name="Main Video"
    />
  </section>

  <section class="section-main">
    <div class="section-left"></div>

    <div class="section-right">
      <div class="padding">
        <h1 class="heading">Hva er Pusterommet?</h1>
        <p class="lead">
          Å sikre liv, helse og verdier. I over 200 år har vi jobbet for akkurat
          dette. Ingenting betyr mer for samfunnet vårt enn at vi som bor her er
          sunne og føler oss bra. Allikevel ser vi at mentale utfordringer er et
          økende problem hos de mellom 18 og 30 år. Det finnes ingen snarveier
          ut av det, men vi mener at åpenhet og positive arenaer, der unge blir
          sett og hørt, er et viktig sted å begynne. Vi i Gjensidige er derfor
          opptatt av å bidra til at unge mennesker får nettopp flere slike
          arenaer og muligheter, og mer av det vi kaller “Pusterom"
        </p>
        <p class="lead">
          I fjor startet vi opp et prosjekt kalt nettopp Pusterom, der vi gir de
          som trenger det muligheten til å trekke seg litt tilbake og snakke med
          fagpersonell. Mange unge føler seg alene, og synes det er vanskelig å
          snakke om utfordringene de føler, og det tar vi på alvor. Pusterom
          kommer vi derfor til å utvikle videre, fordi du skal vite at du ikke
          er alene.
        </p>
        <a
          href="https://mentalhelseungdom.no/chat-med-oss"
          target="_blank"
          class="cta"
          data-name="Ta kontakt"
          >Ta kontakt</a
        >
      </div>
    </div>
  </section>

  <div class="section-txt-one">
    <div class="section-txt-inner">
      <h1 class="heading-dark">
        Hvorfor har Gjensidige lansert Pusterommet på Palmesus?
      </h1>
      <p class="lead-dark">
        Skandinavias største strandfestival, Palmesus, er det største
        kulturarrangementet for unge mennesker i Norge - med mer enn 60 000
        besøkende og en gjennomsnittsalder på 25. Som Norges største
        forsikringsselskap har Gjensidige en tydelig bærekraftstrategi der
        psykisk helse er en av grunnpilarene. Gjensidige vet at forverret
        psykisk helse ikke bare er ødeleggende for den enkelte, men at det også
        vil bli stadig mer kostbart for samfunnet. Derfor er det avgjørende for
        generasjon Z, for samfunnet som helhet og for Gjensidige som
        forsikringsselskap å skape arenaer der dette problemet kan adresseres og
        håndteres.
      </p>
      <a
        href="https://pusterommet.webflow.io"
        target="_blank"
        class="cta"
        data-name="Les mer"
        >Les mer</a
      >
    </div>
  </div>

  <section class="section-video-1-container">
    <ExpanderVideo
      class="section-video-1"
      :filename="video1"
      :mobile="mobile"
      :autoplay="true"
      url="https://pusterommet.webflow.io"
      name="video1"
    />
  </section>

  <div class="section-txt-one">
    <div class="section-txt-inner">
      <p class="lead-dark">
        Gjensidige og Palmesus sitt samarbeid handler om mental helse. Målet er
        å bidra til å ufarliggjøre åpenhet og det å snakke om mentale
        helseutfordringer blant de unge. Vi ønsker også å gjøre de tryggere og
        mer robuste til å takle hverdagen og livet. Som en del av satsingen vår
        lanserte vi et «Pusterom» på Palmesus i 2023 og har videreført dette i
        sommer. Dette tilbudet er rettet mot festivaldeltakere som av ulike
        årsaker har behov for å trekke seg tilbake og snakke med vårt
        fagpersonell. Vi ønsker å senke terskelen for å be om hjelp og øke
        forståelsen for at man ikke er alene med utfordringene sine. Vi mener at
        alle fortjener et pusterom i hverdagen, og særlig de unge.
      </p>
    </div>
  </div>

  <section class="section-video-1-container section-video-2-container">
    <ExpanderVideo
      class="section-video-1"
      :filename="video2"
      :mobile="mobile"
      :autoplay="true"
      url="https://pusterommet.webflow.io"
      name="video2"
    />
  </section>

  <a
    href="https://pusterommet.webflow.io"
    target="_blank"
    data-name="sticky-footer"
  >
    <footer class="section-footer sticky">
      <p>Vi jobber for å gi flere unge et pusterom</p>
    </footer>
  </a>
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
      video1: "video1.mp4",
      video2: "video2.mp4",
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
.top-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.94rem;
}
.section-main {
  display: flex;
  height: 42.12rem;
}
.section-left,
.section-right {
  flex: 1;
  width: 50%;
}
.section-left {
  background-image: url("@/assets/images/teapot.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: fill;
}
.section-right {
  background: #1b1e2f;
  color: #fff;
}
.padding {
  padding: 1.28rem 2.75rem 2.03rem 3.63rem;
}
.heading {
  font-size: 1.75rem;
  font-family: "GjensidigeType", sans-serif;
}
.lead {
  font-size: 1.125rem;
  font-family: "GjensidigeType", sans-serif;
  padding-top: 2.19594rem;
}
.cta {
  display: flex;
  width: 9.5rem;
  height: 3.0625rem;
  padding: 0.9375rem 2.1875rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  background: #7c55ff;
  font-family: "Inter", sans-serif;
  margin-top: 1.38rem;
  color: #fff;
  transition: all 0.3s ease;
}
.cta:hover {
  background-color: #211f54;
}
.heading-dark {
  font-size: 1.75rem;
  font-family: "GjensidigeDisplay", sans-serif;
  color: #090c33;
}
.lead-dark {
  font-size: 1.125rem;
  font-family: "GjensidigeType", sans-serif;
  margin-top: 2.19594rem;
  color: #090c33;
  line-height: normal;
}
.section-txt-inner {
  padding: 3.66rem 8.59rem 3.75rem;
}
.section-video-1-container {
  padding: 0 1.25rem;
}
.section-video-1 {
  border-radius: 3.125rem;
}
.section-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #211f54;
  height: 5.8125rem;
  cursor: pointer;
}
.section-footer p {
  font-family: "GjensidigeDisplay", sans-serif;
  font-size: 2.5rem;
  font-style: normal;
  color: #fff;
}
.section-video-2-container {
  margin-bottom: 3rem;
}
.top-logo img {
  width: 17.625rem;
  height: 4.375rem;
}
a {
  cursor: pointer;
}

@media (max-width: 480px) {
  .top-logo img {
    width: 36.25vw;
    height: auto;
  }
  .top-logo {
    height: 13.967vw;
  }
  .section-main {
    flex-direction: column;
    height: auto;
  }
  .section-left,
  .section-right {
    flex: initial;
    width: 100%;
    display: block;
  }
  .section-left {
    height: 120vw;
  }
  .heading {
    font-size: 5.833vw;
  }
  .lead {
    font-size: 3.6vw;
    padding-top: 5.32vw;
  }
  .padding {
    padding: 9.567vw 7.9vw 10.2vw;
  }
  .section-txt-inner {
    padding: 9.567vw 7.9vw 10.2vw;
  }
  .heading-dark {
    font-size: 5.833vw;
  }
  .lead-dark {
    font-size: 3.6vw;
    padding-top: 5.32vw;
  }
  .cta {
    width: 31.667vw;
    height: 10.208vw;
    font-size: 3.333vw;
    padding: 3.125vw 7.292vw;
  }
  .section-video-1-container {
    padding: 0 3vw;
  }
  .section-video-1 {
    border-radius: 4.167vw;
  }
  .lead-dark {
    margin-top: 0;
  }
  .section-video-2-container {
    margin-bottom: 9.667vw;
  }
  .section-footer {
    height: 16.25vw;
  }
  .section-footer p {
    font-size: 4.5vw;
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
