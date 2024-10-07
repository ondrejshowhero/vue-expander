<template>
  <section class="header">
    <div class="logo-container">
      <img src="@/assets/logo.png" class="small-logo" />
      <img src="@/assets/logo_2.png" class="large-top-logo" />
    </div>
  </section>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://ad.doubleclick.net/ddm/trackclk/N1675542.5277392SHOWHEROESABDIGI/B32695971.405188712;dc_trk_aid=596770660;dc_trk_cid=211669632;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      name="Main Video"
    />
  </section>

  <a
    href="https://ad.doubleclick.net/ddm/trackclk/N1675542.5277392SHOWHEROESABDIGI/B32695971.405188712;dc_trk_aid=596770660;dc_trk_cid=211669632;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
    target="_blank"
    data-name="cta"
  >
    <section class="section-main">
      <div class="main-txt">
        <h1 class="heading">
          Nu är det enkelt att ta fantastiska bilder i svagt ljus
        </h1>
        <p class="lead">
          Xiaomi 14T-seriens professionella nattfotograferingsfunktioner återger
          verkliga färger och bevarar ögonblick och känslor.
        </p>
      </div>
      <img src="@/assets/img_1.png" class="main-img" />
    </section>
  </a>

  <!-- <section class="section-scroller">
    <ExpanderScroller />
  </section> -->

  <section class="section-slider">
    <ExpanderSlider />
  </section>

  <section class="bottom">
    <div class="bottom-txt-container">
      <h1 class="heading">
        Den strålande metalliska designen framträder tydligt
      </h1>
      <p class="lead">
        Utforska de helt nya Titan-färgerna och upplev den oöverträffade
        briljansen och premiumkvaliteten hos Xiaomi 14T-serien.
      </p>
      <a
        href="https://ad.doubleclick.net/ddm/trackclk/N1675542.5277392SHOWHEROESABDIGI/B32695971.405188712;dc_trk_aid=596770660;dc_trk_cid=211669632;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
        target="_blank"
        class="cta"
        data-name="Read more"
        >Upptäck nu</a
      >
    </div>
    <a
      href="https://ad.doubleclick.net/ddm/trackclk/N1675542.5277392SHOWHEROESABDIGI/B32695971.405188712;dc_trk_aid=596770660;dc_trk_cid=211669632;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      target="_blank"
      data-name="cta"
    >
      <div class="bottom-logo">
        <img src="@/assets/logo_2.png" />
      </div>
    </a>
  </section>

  <!-- <footer class="section-footer sticky">
    <div class="container">
      <a href="" target="_blank" class="logo" data-name="Logo">
        <img src="@/assets/logo.png">
      </a>
    </div>
  </footer> -->
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
// import ExpanderScroller from "./components/ExpanderScroller.vue";
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

body {
  background-color: #000;
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
  background-color: #000;
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
.logo-container {
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10.69rem;
  padding: 0 3.5rem 2.5rem;
}
.small-logo {
  width: 5.5625rem;
  height: 5.5625rem;
}
.large-top-logo {
  width: 26.9375rem;
  height: 4.25rem;
}
.section-video {
  width: 63.125rem;
  height: 35.5625rem;
  border-radius: 1.25rem;
  margin: 0 auto;
  border-radius: 1.25rem;
}
.section-main {
  height: 19.06rem;
  display: flex;
  justify-content: space-between;
}
.heading {
  font-family: "CamphorProForXiaoMi-Bold", sans-serif;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 119%; /* 2.23125rem */
  background: linear-gradient(
    94deg,
    #70645a 5.17%,
    #ccbeb3 24.74%,
    #ccbec7 45%,
    #fff 80.31%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.lead {
  color: #fff;
  font-family: "CamphorProForXiaoMi-Regular", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 158%; /* 1.975rem */
}
.main-txt {
  width: 25.3125rem;
  margin: 3.63rem 0 3.94rem 9.19rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
.main-img {
  width: 30.875rem;
  height: auto;
}
.bottom-txt-container {
  width: 24.625rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 5.25rem 4.25rem 18.06rem 38rem;
}
.cta {
  font-family: "CamphorProForXiaoMi-Regular", sans-serif;
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 158%; /* 1.975rem */
  background: #ff6900;
  display: flex;
  width: 10.9375rem;
  height: 3.375rem;
  padding: 0.6875rem 2.25rem;
  justify-content: center;
  align-items: center;
}
.bottom {
  background-image: url("@/assets/bottom_img.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 40.5rem;
}
.bottom-logo img {
  width: 26.9375rem;
  height: 4.25rem;
}
.bottom-logo {
  padding-left: 40rem;
  padding-bottom: 1.44rem;
}
// .section-slider {
//   padding-left: 3rem;
// }
@media (max-width: 480px) {
  .small-logo {
    width: 10.83vw;
    height: 10.83vw;
  }
  .large-top-logo {
    width: 65vw;
    height: 10.21vw;
  }
  .logo-container {
    padding: 5vw 0 6.25vw 9vw;
    height: auto;
  }
  .section-video {
    width: 100%;
    padding: 3.33vw;
    height: auto;
  }
  .main-img {
    display: none;
  }
  .main-txt {
    padding: 9vw 0 0 11.67vw;
    margin: 0;
    width: 87vw;
  }
  .heading {
    font-size: 5.42vw;
    line-height: 6.45vw; /* 1.93375rem */
  }
  .lead {
    font-size: 4.17vw;
    line-height: 6.58vw; /* 1.975rem */
  }
  .section-main {
    height: 88vw;
    background-image: url("@/assets/img_1.png");
    background-position: right bottom;
    background-size: 78.54vw 54.58vw; /* Set specific size for the background image */
    background-repeat: no-repeat;
  }
  .bottom-txt-container {
    margin: 10.2vw 11.46vw 59.5vw 11.23vw;
    width: 78vw;
  }
  .bottom {
    background-image: url("@/assets/bottom_img.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 120vw;
    background-position: center bottom;
    background-size: 100% 61.5vw;
    background-repeat: no-repeat;
    // padding-bottom: 3vw;
  }
  .bottom-logo {
    padding: 0;
    margin-left: 46.67vw;
    padding-bottom: 3vw;
  }
  .bottom-logo img {
    width: 52.29vw;
    height: auto;
    // padding-bottom: 3vw;
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
