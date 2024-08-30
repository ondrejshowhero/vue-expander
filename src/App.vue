<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://ad.doubleclick.net/ddm/trackclk/N567206.4848802SHOWHEROES-DIGITA/B32401198.402604039;dc_trk_aid=594610915;dc_trk_cid=221360888;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      name="Main Video"
    />
  </section>

  <section class="section-main">
    <h1 class="heading">Katso Liiga-kausi alusta loppuun</h1>
    <p class="lead">
      Kohta mennään taas! Hanki MTV Katsomo+ Urheilu 1 kk 0 €, jonka jälkeen
      42,95 €kk. Saat sen Telia Playhin.
    </p>
    <a
      href="https://ad.doubleclick.net/ddm/trackclk/N567206.4848802SHOWHEROES-DIGITA/B32401198.402604039;dc_trk_aid=594610915;dc_trk_cid=221360888;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      target="_blank"
      class="cta"
      data-name="cta"
      >Tilaa tästä</a
    >
    <p class="description">
      MTV Katsomo+ Urheilu Telian liittymäasiakkaille 1 kk veloituksetta, jonka
      jälkeen tilaus jatkuu hintaan 42,95 €/kk. Etu voimassa, kun käytössäsi on
      vähintään yksi kuukausimaksullinen Telian puheliittymä,
      mobiililaajakaistaliittymä tai kiinteä laajakaistaliittymä. Ei
      määräaikaisuutta.
    </p>
    <a
      href="https://ad.doubleclick.net/ddm/trackclk/N567206.4848802SHOWHEROES-DIGITA/B32401198.402604039;dc_trk_aid=594610915;dc_trk_cid=221360888;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      target="_blank"
      class="logo"
      data-name="Logo"
    >
      <img src="@/assets/logo.png" />
    </a>
  </section>
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
  padding-bottom: 0;
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
  background-color: #29003e;
  color: #f4e0ff;
  height: 44.75rem;
  display: flex;
  flex-direction: column;
  .heading {
    font-size: 3.4375rem;
    font-family: "TeliaHeading", sans-serif;
    text-align: left;
    padding: 2.94rem 0 4.19rem 4.25rem;
  }
  .lead {
    font-size: 2.25rem;
    font-family: "TeliaRegular", sans-serif;
    text-align: left;
    padding: 0 0 4.56rem 4.25rem;
  }
  .cta {
    font-size: 2rem;
    padding: 1.5rem 4rem;
    border-radius: 13.75rem;
    background: #990ae3;
    font-family: "TeliaBold", sans-serif;
    transition: all 0.3s ease, border 0.3s ease;
    margin: 0 0 4.6rem 4.25rem;
    width: 18.75rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cta:hover {
    background: #29003e;
    border: 2px solid #f4e0ff;
  }
  .description {
    font-size: 1.25rem;
    font-family: "TeliaRegular", sans-serif;
    text-align: left;
    padding: 0 0 3.19rem 4.25rem;
  }
  .logo {
    width: 10.4375rem;
    height: 4.125rem;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .section-main {
    height: 149vw;
    display: flex;
    flex-direction: column;
    .heading {
      font-size: 8.33vw;
      text-align: center;
      padding: 10.47vw 4.8vw;
    }
    .lead {
      font-size: 5vw;
      padding-left: 4.8vw;
      padding: 0 4.8vw 10.83vw 4.8vw;
    }
    .cta {
      font-size: 6.67vw;
      padding: 5vw 14vw;
      border-radius: 45.83vw;
      transition: all 0.3s ease, border 0.3s ease;
      margin: 0 auto;
      width: 62.5vw;
      height: 15vw;
    }
    .description {
      font-size: 2.5vw;
      padding: 10.47vw 4.8vw 10.83vw 4.8vw;
    }
    .logo {
      width: 34.79vw;
      height: 13.75vw;
      margin: 0 auto;
      margin-top: 3vw;
    }
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
