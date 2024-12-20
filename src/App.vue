<template>
  <footer class="section-footer-top sticky sticky-top">
    <div class="container">
      <div class="container-img">
        <a
          href="https://viaplay.dk/serier/paradise-hotel?utm_source=showheroes&utm_medium=outstream&utm_campaign=mrkt_dk_pub_uf_webm_series-paradise-hotel-s21-danmark_20241227_svod_all_paradise-hotel-s21__reach_showheroes_PD10000075_ref3_204305821_&utm_content=mrkt3_da_paradise-hotel-s21_vid_outstream-mp4_&utm_term=mrkt2_dk_paradise-hotel-s21__ron_websitevisitors_a___"
          target="_blank"
          class="logo"
          data-name="Logo-viaplay"
        >
          <img src="@/assets/logo_viaplay.png" />
        </a>
        <a
          href="https://viaplay.dk/serier/paradise-hotel?utm_source=showheroes&utm_medium=outstream&utm_campaign=mrkt_dk_pub_uf_webm_series-paradise-hotel-s21-danmark_20241227_svod_all_paradise-hotel-s21__reach_showheroes_PD10000075_ref3_204305821_&utm_content=mrkt3_da_paradise-hotel-s21_vid_outstream-mp4_&utm_term=mrkt2_dk_paradise-hotel-s21__ron_websitevisitors_a___"
          target="_blank"
          class="logo-two"
          data-name="Logo-3"
        >
          <img src="@/assets/logo_3.png" />
        </a>
        <a
          href="https://viaplay.dk/serier/paradise-hotel?utm_source=showheroes&utm_medium=outstream&utm_campaign=mrkt_dk_pub_uf_webm_series-paradise-hotel-s21-danmark_20241227_svod_all_paradise-hotel-s21__reach_showheroes_PD10000075_ref3_204305821_&utm_content=mrkt3_da_paradise-hotel-s21_vid_outstream-mp4_&utm_term=mrkt2_dk_paradise-hotel-s21__ron_websitevisitors_a___"
          target="_blank"
          class="slogan"
          data-name="Premiere d. 1. januar "
          >Paradise Hotel Premiere</a
        >
      </div>
      <!-- <a href="" target="_blank" class="slogan" data-name="Read more"
        >Tirsdag-torsdag fra 22.00</a
      > -->
      <div class="container-countdown">
        <ExpanderCountdown
          :date="new Date('2025-01-01T10:00:00').toISOString()"
        />
      </div>
    </div>
  </footer>

  <div class="section-background">
    <section class="section-video">
      <ExpanderVideo
        :filename="videoFile"
        :mobile="mobile"
        :autoplay="true"
        url="https://viaplay.dk/serier/paradise-hotel?utm_source=showheroes&utm_medium=outstream&utm_campaign=mrkt_dk_pub_uf_webm_series-paradise-hotel-s21-danmark_20241227_svod_all_paradise-hotel-s21__reach_showheroes_PD10000075_ref3_204305821_&utm_content=mrkt3_da_paradise-hotel-s21_vid_outstream-mp4_&utm_term=mrkt2_dk_paradise-hotel-s21__ron_websitevisitors_a___"
        name="Main Video"
      />
    </section>
  </div>

  <!-- <section class="section-main">
    <h1 class="heading">Some heading here</h1>
    <p class="lead">Some introductory text is placed here</p>
    <a href="" target="_blank" class="cta" data-name="Read more">Read more</a>
  </section> -->

  <footer class="section-footer sticky">
    <div class="container">
      <div class="container-img">
        <a
          href="https://viaplay.dk/serier/paradise-hotel?utm_source=showheroes&utm_medium=outstream&utm_campaign=mrkt_dk_pub_uf_webm_series-paradise-hotel-s21-danmark_20241227_svod_all_paradise-hotel-s21__reach_showheroes_PD10000075_ref3_204305821_&utm_content=mrkt3_da_paradise-hotel-s21_vid_outstream-mp4_&utm_term=mrkt2_dk_paradise-hotel-s21__ron_websitevisitors_a___"
          target="_blank"
          class="logo"
          data-name="Logo-viaplay-bottom"
        >
          <img src="@/assets/logo_viaplay.png" />
        </a>
        <a
          href="https://viaplay.dk/serier/paradise-hotel?utm_source=showheroes&utm_medium=outstream&utm_campaign=mrkt_dk_pub_uf_webm_series-paradise-hotel-s21-danmark_20241227_svod_all_paradise-hotel-s21__reach_showheroes_PD10000075_ref3_204305821_&utm_content=mrkt3_da_paradise-hotel-s21_vid_outstream-mp4_&utm_term=mrkt2_dk_paradise-hotel-s21__ron_websitevisitors_a___"
          target="_blank"
          class="logo-two"
          data-name="Logo-3-bottom"
        >
          <img src="@/assets/logo_3.png" />
        </a>
        <a
          href="https://viaplay.dk/serier/paradise-hotel?utm_source=showheroes&utm_medium=outstream&utm_campaign=mrkt_dk_pub_uf_webm_series-paradise-hotel-s21-danmark_20241227_svod_all_paradise-hotel-s21__reach_showheroes_PD10000075_ref3_204305821_&utm_content=mrkt3_da_paradise-hotel-s21_vid_outstream-mp4_&utm_term=mrkt2_dk_paradise-hotel-s21__ron_websitevisitors_a___"
          target="_blank"
          class="slogan slogan-two"
          data-name="Tårer, taktik & trekanter"
          >Tårer, taktik & trekanter</a
        >
      </div>
      <a href="" target="_blank" class="cta" data-name="Read more"
        >Premiere d. 1. januar
      </a>
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
import ExpanderCountdown from "./components/ExpanderCountdown.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    ExpanderCountdown,
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
  padding-top: 7.31rem;
  background: #252433;
  @include mobile {
    padding-top: 16.54vw;
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
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.section-footer {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.75rem;
    padding: 0 1rem;
    background: #252433;
    gap: 0.5rem;

    @include mobile {
      flex-direction: column;
      height: 21vw; /* 7.25rem converted to vw for 480px screen width */
      padding: 1.85vw 0 2.08vw; /* 0.89rem and 1rem converted to vw for 480px screen width */
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

.section-footer-top {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.81rem;
    height: 7.31rem;
    background: #252433;
    @include mobile {
      height: 16.54vw;
      padding: 0 2.08vw 0 2.08vw;
    }
  }
  &.sticky-top {
    position: fixed;
    left: 0;
    z-index: 1000;
    width: 100%;
    top: 0;
    .container {
      max-width: $width;
      margin: 0 auto;
    }
  }
}
.section-video {
  padding: 2.37rem 2.5rem 0;
  @include mobile {
    padding: 3vw 3.25vw 0;
  }
}
.container-img {
  display: flex;
  gap: 0.19rem;
  align-items: center;
}
.logo {
  width: 4.75rem;
  height: 4.9375rem;
  @include mobile {
    width: 7.03125vw;
    height: 6.640625vw;
  }
}
.logo-two {
  width: 3.6875rem;
  height: 3.6875rem;
  @include mobile {
    width: 6vw;
    height: 6vw;
  }
}
.slogan {
  color: #fff;
  text-shadow: 0px 4px 27.7px rgba(0, 0, 0, 0.95);
  font-size: 1.875rem;
  align-items: center;
  padding-left: 1.13rem;
  display: flex;
  font-family: "ViaplaySans-Bold", sans-serif;
  @include mobile {
    font-size: 3.125vw;
    width: 23vw;
    margin-left: 2.35vw;
    padding: 0;
  }
}
.section-background {
  background: url("@/assets/img_mobile.jpg") no-repeat top center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 119rem;
  @include mobile {
    background: url("@/assets/img_mobile.jpg") no-repeat top / 100% auto;
    background-size: contain; /* Adjust as needed */
    background-position: top center;
    height: auto;
    padding-bottom: 144vw;
  }
}
.container-countdown {
  color: #fff;
}
.cta {
  display: flex;
  height: 2.9375rem;
  padding: 0.4375rem 1.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  background: var(--Primary-Yellow, #ffc900);
  color: var(--Black, #000);
  text-align: center;
  font-family: "ViaplaySans-Black", sans-serif;
  font-size: 1.5rem;
  letter-spacing: -0.045rem;
  text-transform: uppercase;
  @include mobile {
    display: flex;
    // width: 26.04vw;
    // height: 3.78vw;
    // padding: 7.19vw 1.56vw;
    justify-content: center;
    align-items: center;
    gap: 1.3vw;
    font-size: 3.33vw; /* 16px converted to vw for 480px screen width */
    letter-spacing: -0.125vw; /* Adjusted for better scaling */
    text-transform: uppercase;
    width: auto;
    height: 6.14vw; /* 39px converted to vw for 480px screen width */
    padding: 1vw 3vw;
  }
}
.slogan-two {
  @include mobile {
    font-size: 3.6vw; /* 1.25rem converted to vw for 480px screen width */
  }
  width: auto;
}
.expander-video {
  border: 3px solid var(--White, #fff);

  /* Gold border */
  box-shadow: 0px 0px 15px 7px #e8cb9f;
}
</style>
