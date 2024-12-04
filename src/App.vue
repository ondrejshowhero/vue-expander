<template>
  <section class="header-main">
    <h1>Forsvaret og Norwegian flyr foran med biodrivstoff</h1>
  </section>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="false"
      url="https://www.norwegian.no/om-oss/opplev-oss/barekraftig-luftfart/"
      name="Main Video"
    />
  </section>

  <section class="section-main">
    <h1 class="heading">
      I 2024 startet det som er en banebrytende anbudsavtale mellom Norwegian og
      Forsvaret. Avtalen resulterer i at over 1 million flyreiser over fire år
      skal bruke 15 prosent biodrivstoff.
    </h1>
    <p class="lead">
      Vi begynner i hjertet av London by, hvor matoljen fra britenes lunsj ender
      opp som biodrivstoff for Norwegian-flyene på spektakulære Ålesund
      lufthavn.
    </p>
    <p class="lead bold">Norgeshistoriens største biodrivstoffavtale</p>
    <p class="lead">
      Det norske Forsvaret har her gått foran og skapt det som er
      norgeshistoriens største frivillige biodrivstoffavtale.
    </p>
    <p class="lead">
      Avtalens første leveranse, i oktober i år, var på totalt 1 million liter,
      raffinert fra brukt britisk matolje ved St1s bioraffineri i Gøteborg.
    </p>
    <p class="lead">
      Leveransen skal blandes inn på 250 000 flyturer som representerer
      Forsvarssektorens tjenestereiser i løpet av året som har gått.
    </p>
    <p class="lead bold bottom">
      Totalt vil leveransen senke utslippet med nesten 2000 tonn CO2.
    </p>

    <!-- <a href="" target="_blank" class="cta" data-name="Read more">Read more</a> -->
  </section>

  <section class="middle-image">
    <img src="@/assets/img.jpg" alt="" class="image" />
    <div class="middle-paragraph">
      <p class="middle-paragraph">
        For Forsvaret er avtalen et viktig steg i klima- og miljøstrategien.
        Forsvarssektoren har mål å kutte 20 prosent av CO2-utslippene innen 2030
        og redusere utslipp fra innkjøpte varer og tjenester. For å nå målene
        står reduserte utslipp fra tjenestereiser og Forsvarets egne flyvninger
        sentralt.
      </p>
    </div>
  </section>

  <section class="section-main">
    <h1 class="heading">Tankes på norske flyplasser</h1>
    <p class="lead">
      Avtalen handler i hovedsak om å senke utslippene, men den er også med på å
      skape viktig lokal etterspørsel for biodrivstoff, som kan være med på å
      styrke produksjonen i Norden fremover.
    </p>
    <p class="lead bold">
      Spesielt fordi anbudsavtalen inneholder en stipulering om at alt
      biodrivstoffet skal tankes på norske flyplasser.
    </p>
    <p class="lead">
      Tilgang til biodrivstoff er viktig fra et klimaperspektiv, samtidig som
      det bidrar til økt forsyningssikkerhet. Spesielt hvis biodrivstoffet er
      kortreist.
    </p>
    <p class="lead">
      Derfor ønsker forsvarssektoren at det legges til rette for økt produksjon
      av disse drivstofftypene i Norge fremover.
    </p>
    <p class="lead">
      Forsvarsmateriell, som forvalter avtalen, har i prosessen jobbet med
      næringen, organisasjoner og eksperter for å forme anbudet.
    </p>
    <p class="lead bold bottom">
      Arbeidet har vært forut for sin tid og skapt oppmerksomhet i Norge og
      internasjonalt.
    </p>

    <!-- <a href="" target="_blank" class="cta" data-name="Read more">Read more</a> -->
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a href="" target="_blank" class="logo" data-name="Logo">
        <img src="@/assets/logo.png" />
      </a>
      <a
        href="https://www.norwegian.no/om-oss/opplev-oss/barekraftig-luftfart/"
        target="_blank"
        class="cta"
        data-name="Les mer om Norwegians bærekraftsarbeid her"
        >Les mer om Norwegians bærekraftsarbeid her</a
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
  --footer-height: 14vw;
  @include d {
    --footer-height: 5.5625rem;
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

.header-main {
  height: 7.5rem;
  background: #162846;
  color: #fff;
  text-align: center;
  font-size: 2.12688rem;
  font-family: "NorwegianDisplayPro-Bold", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  @include mobile {
    font-size: 5.6vw;
    padding: 1rem;
    height: 23.5vw;
  }
}
.section-main {
  padding: 2.44rem 5.94rem;
  @include mobile {
    padding: 1rem;
  }
}
.heading {
  color: #162846;
  font-family: "NorwegianDisplayPro-Bold", sans-serif;
  font-size: 1.75rem;
  line-height: 2.0625rem; /* 117.857% */
  margin-bottom: 2.75rem;
  @include mobile {
    font-size: 5.6vw;
    line-height: 6.6vw;
    margin-bottom: 8.8vw;
  }
}
.lead {
  color: #162846;
  font-family: "NorwegianDisplayPro-Regular", sans-serif;
  font-size: 1.5625rem;
  line-height: 1.9375rem;
  margin-bottom: 2.75rem;
  @include mobile {
    font-size: 5vw;
    line-height: 6.1vw;
    margin-bottom: 8.8vw;
  }
}
.bold {
  font-family: "NorwegianDisplayPro-Bold", sans-serif;
}
.bottom {
  margin-bottom: 0;
}
.middle-paragraph {
  color: #162846;
  font-family: "NorwegianDisplayPro-Regular", sans-serif;
  font-size: 1.5625rem;
  line-height: 1.9375rem;
  display: flex;
  align-items: center;
  @include mobile {
    font-size: 5vw;
    line-height: 6.1vw;
  }
}
.middle-image {
  padding: 0 5.94rem;
  display: flex;
  gap: 2.69rem;
  align-items: center;
  @include mobile {
    padding: 0 1rem;
    gap: 8.4vw;
    flex-direction: column;
  }
}
.image {
  width: 32.25rem;
  height: 25.125rem;
  @include mobile {
    width: 100vw;
    height: auto;
  }
}
.logo {
  width: 14.90344rem;
  height: 2.31731rem;
  @include mobile {
    width: 46.5vw;
    height: auto;
  }
}
.cta {
  color: #fff;
  font-family: "NorwegianDisplayPro-Bold", sans-serif;
  font-size: 1.75rem;
  @include mobile {
    font-size: 5.6vw;
    display: none;
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
    padding: 0 2.31rem;
    background: #e5212d;
    color: #fff;
    @include mobile {
      padding: 0 7.2vw;
      justify-content: center;
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
    }
  }
}
</style>
