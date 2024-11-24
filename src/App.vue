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

  <a
    href="https://ad.doubleclick.net/ddm/trackclk/N513812.279382DBMAMIDAYSNORWAY26/B32920662.408960566;dc_trk_aid=601105914;dc_trk_cid=226016254;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
    target="_blank"
    data-name="Røykvarslerdagen"
  >
    <section class="section-main">
      <!-- <h1 class="heading">Some heading here</h1>
    <p class="lead">Some introductory text is placed here</p>
    <a href="" target="_blank" class="cta" data-name="Read more">Read more</a> -->
      <img src="@/assets/img1.png" class="overlay" />
    </section>
  </a>

  <section class="tile-container">
    <div class="tile-one">
      <img src="@/assets/mobile1.gif" class="tile-img" />
    </div>
    <div class="tile-two">
      <h1 class="tile-header">Mye julekos og spenning kan fort bli tenning</h1>
      <p class="tile-p">
        Jo, juletreet kan faktisk ta fyr. Hva vet du om de vanligste årsakene
        til brann i jula?
      </p>

      <a
        href="https://ad.doubleclick.net/ddm/trackclk/N513812.279382DBMAMIDAYSNORWAY26/B32920662.408960566;dc_trk_aid=601105914;dc_trk_cid=226016254;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
        target="_blank"
        data-name="Røykvarslerdagen"
      >
        <div class="tile-cta">
          <h2 class="tile-cta-txt">Unngå disse feilene</h2>
          <img src="@/assets/arrow.png" class="tile-arrow" />
        </div>
      </a>
    </div>
  </section>

  <!-- <div class="section branch-overlay">
    <img src="@/assets/overlay2.png" />
  </div> -->

  <section class="tile-container tile-container2">
    <div class="tile-one tile-one2">
      <img src="@/assets/ornament.png" class="tile-img tile-img2" />
    </div>
    <div class="tile-two tile-two2">
      <h1 class="tile-header">
        Bekymret for strømprisene<br />
        i jula?
      </h1>
      <p class="tile-p">
        Her er noen tips til hvordan du kan bruke strømmen smart for å unngå
        overraskelser<br />på strømregningen i januar.
      </p>
      <a
        href="https://ad.doubleclick.net/ddm/trackclk/N513812.279382DBMAMIDAYSNORWAY26/B32920662.408960566;dc_trk_aid=601068614;dc_trk_cid=226053155;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
        target="_blank"
        data-name="Utebelysning"
      >
        <div class="tile-cta">
          <h2 class="tile-cta-txt tile-cta-txt2">Dette bruker mest strøm</h2>
          <img src="@/assets/arrow.png" class="tile-arrow" />
        </div>
      </a>
    </div>
  </section>

  <section class="tile-container tile-container3">
    <div class="tile-one">
      <img src="@/assets/mobile2.gif" class="tile-img" />
    </div>
    <div class="tile-two tile-two3">
      <h1 class="tile-header">Kommer hobbyelektrikeren i deg frem til jul?</h1>
      <p class="tile-p">
        Noe kan du gjøre selv, men det kan være lurt å la fagfolk ta seg av det
        elektriske.
      </p>

      <a
        href="https://ad.doubleclick.net/ddm/trackclk/N513812.279382DBMAMIDAYSNORWAY26/B32920662.408960566;dc_trk_aid=601214604;dc_trk_cid=226053158;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
        target="_blank"
        data-name="Skjoteledninger"
      >
        <div class="tile-cta">
          <h2 class="tile-cta-txt tile-cta-txt3">Les hva kan du gjøre selv</h2>
          <img src="@/assets/arrow.png" class="tile-arrow" />
        </div>
      </a>
    </div>
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a
        href="https://ad.doubleclick.net/ddm/trackclk/N513812.279382DBMAMIDAYSNORWAY26/B32920662.408960566;dc_trk_aid=601214604;dc_trk_cid=226053158;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
        target="_blank"
        class="logo"
        data-name="Logo"
      >
        <img src="@/assets/logo.png" />
      </a>
      <a
        href="https://ad.doubleclick.net/ddm/trackclk/N513812.279382DBMAMIDAYSNORWAY26/B32920662.408960566;dc_trk_aid=601214604;dc_trk_cid=226053158;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
        target="_blank"
        class="cta"
        data-name="cta"
        >LES MER</a
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
  padding-bottom: 9rem;
  overflow: hidden;
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
  height: 34rem;
  background-image: url("@/assets/img-2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -15em;
  z-index: 10;
  position: relative;
  @include mobile {
    height: 113.33vw;
    // background-image: url("@/assets/img-2.png");
    background-size: contain;
    margin-top: -53.33vw;
  }
}
.section-main img {
  @include mobile {
    width: 55vw;
    height: auto;
  }
}

.overlay {
  margin-top: 7rem;
  bottom: 1rem;
  position: absolute;
  width: 25.3125rem;
  height: 25.6875rem;
  z-index: 1000 !important;
  @include mobile {
    margin-top: 0;
    bottom: 5rem;
  }
}
.tile-img {
  width: 40.125rem;
  height: auto;
}
.tile-container {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: -5rem;
  z-index: 20;
  @include mobile {
    flex-direction: column-reverse;
  }
}

.tile-one,
.tile-two {
  flex: 1;
}

.tile-header {
  color: #000;
  font-family: "RedHatDisplay-Bold", sans-serif;
  font-size: 2.1875rem;
  margin-bottom: 2rem;
  @include mobile {
    font-size: 5.42vw;
  }
}
.tile-p {
  color: #000;
  font-size: 1.5rem;
  font-family: "RedHatDisplay-Regular", sans-serif;
  margin-bottom: 1.8rem;
  width: 30rem;
  @include mobile {
    width: 100%;
    font-size: 4.17vw;
  }
}
.tile-cta-txt {
  color: #000;
  font-family: "RedHatDisplay-SemiBold", sans-serif;
  font-size: 1.5rem;
  width: auto;
  @include mobile {
    width: auto;
    font-size: 4.17vw;
  }
}
.tile-cta {
  display: flex;
  flex-direction: row;
  align-items: center;
  @include mobile {
    margin-bottom: 2.5rem;
  }
}
.tile-arrow {
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 2.5rem;
}
.tile-two {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  @include mobile {
    margin-bottom: 0.5rem;
    padding: 0 6.67vw 0 10vw;
  }
}
.tile-container2 {
  flex-direction: row-reverse;
  height: 42rem;
  z-index: 0;
  @include mobile {
    flex-direction: column-reverse;
    height: 66rem;
    margin-top: 0;
    height: 234vw;
  }
}
.tile-two2 {
  margin-left: 3.5rem;
  justify-content: flex-start;
  margin-top: 13rem;
  @include mobile {
    margin-left: 0;
    z-index: 1000;
    margin-top: 15vw;
  }
}
.tile-img2 {
  width: 34rem;
  height: 48.9375rem;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  margin-right: -5rem;
  @include mobile {
    margin-top: -8vw;
    width: 104.33vw;
    height: auto;
  }
}
.tile-one2 {
  width: 48.75rem;
  height: 48.75rem;
  margin-right: 0;
  margin-top: -3rem;
}
.branch-overlay {
  // width: 28.125rem;
  // height: 25.6875rem;
  display: flex;
  justify-content: flex-end;
}
.branch-overlay img {
  width: 28.125rem;
  height: 25.6875rem;
  display: flex;
  justify-content: flex-end;
  margin-top: -7rem;
  margin-bottom: -17rem;
  z-index: 30;
}
ul.a {
  list-style-type: disc;
  padding-left: 1rem;
}
.tile-cta-txt2 {
  width: auto;
  @include mobile {
    width: auto;
  }
}
.tile-container3 {
  margin-top: -3rem;
}
.tile-cta-txt3 {
  width: auto;
  @include mobile {
    width: auto;
  }
}
.logo {
  width: 9.9375rem;
  height: 3rem;
  @include mobile {
    width: 19.58vw;
    height: 5.83vw;
  }
}
.cta {
  display: flex;
  width: 12.125rem;
  height: 3.3125rem;
  // padding: 0.625rem 2.8125rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: "RedHatDisplay-Bold", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 6.25rem;
  background: #29d205;
  @include mobile {
    width: 29.58vw;
    height: 9.17vw;
    font-size: 3.33vw;
  }
}
.tile-two3 {
  margin-top: 6rem;
  @include mobile {
    margin-top: 5rem;
  }
}
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.section-footer {
  // background-image: url("@/assets/footer.png");
  // background-size: contain;
  // background-position: center;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: top;
    height: 9rem;
    padding: 3.75rem 2.5rem 0 2.75rem;
    background-image: url("@/assets/footer.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

@include mobile {
  .section-footer {
    .container {
      align-items: center;
      padding: 0 11.27vw;
      background-image: url("@/assets/footer-mobile.png");
    }
  }
}
</style>
