<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      name="Main Video"
    />
  </section>
  <a
    href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
    target="_blank"
    data-name="Top Text"
  >
    <section class="section-main">
      <h1 class="heading">WINTER 2024</h1>
      <p class="lead">
        Entdecken Sie eine neue Kollektion mit Must-haves für den Winter, bei
        denen hochwertige Materialien, präzise Schnitte und durchdachte Details
        im Vordergrund stehen.
      </p>
      <div class="line"></div>
    </section>
  </a>

  <a
    href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
    target="_blank"
    data-name="Top Text"
  >
    <section class="gallery-text">
      <h2 class="heading2">LUXUS NEU DEFINIERT</h2>
      <p class="lead">
        Bei COS finden Sie Kleidungsstücke und Accessoires, die sich durch ihre
        herausragende Qualität und ihr nachhaltiges Design auszeichnen. Die
        Kollektionen, bei denen der Schwerpunkt auf handwerklicher Expertise,
        Innovation und Langlebigkeit liegt, verbinden Moderne und Zeitlosigkeit
        nahtlos miteinander.
      </p>
    </section>
  </a>

  <section class="products">
    <div v-for="(item, index) in items" :key="index">
      <a :href="item.href" target="_blank" :data-name="'product-' + item.text">
        <img :src="item.image" />
        <p>{{ item.text }}</p>
      </a>
    </div>
  </section>

  <div class="cta-container">
    <a
      href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      target="_blank"
      class="cta"
      data-name="Jetzt entdecken"
      >Jetzt entdecken</a
    >
  </div>

  <a
    href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
    target="_blank"
    data-name="Bottom Images"
  >
    <div class="images-container">
      <img src="@/assets/images/1.jpg" />
      <img src="@/assets/images/2.jpg" />
    </div>
  </a>

  <a
    href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
    target="_blank"
    data-name="Bottom Images"
  >
    <h1 class="heading heading-images">DIE MUST-HAVES DER WINTERGARDEROBE</h1>
  </a>

  <a
    href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
    target="_blank"
    data-name="Bottom Images"
  >
    <div class="images-container">
      <img src="@/assets/images/3.jpg" />
      <img src="@/assets/images/4.jpg" />
    </div>
  </a>

  <div class="footer-container">
    <a
      href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      target="_blank"
      class="cta cta2"
      data-name="Jetzt entdecken"
      >Jetzt entdecken</a
    >
    <a
      href="https://ad.doubleclick.net/ddm/trackclk/N803235.279382DBMHMPORTFOLIOBRA2/B32786214.406458227;dc_trk_aid=598458864;dc_trk_cid=224064571;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1"
      target="_blank"
      class="logo"
      data-name="Logo"
    >
      <img src="@/assets/logo.png" />
    </a>
  </div>

  <!-- <footer class="section-footer sticky">
    <div class="container">
      <a href="" target="_blank" class="logo" data-name="Logo">
        <img src="@/assets/logo.png" />
      </a>
      <a href="" target="_blank" class="cta" data-name="Jetzt entdecken"
        >Jetzt entdecken</a
      >
    </div>
  </footer> -->
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
          image: require("@/assets/products/1.jpg"),
          text: "PULLOVER MIT REISSVERSCHLUSS",
          href: "https://www.cos.com/de-de/men/menswear/knitwear/jumpers/product/woolandcotton-blendhalf-zipjumper-beige-1188205005",
        },
        {
          image: require("@/assets/products/2.jpg"),
          text: "GEFÜTTERTE TEDDYJACKE",
          href: "https://www.cos.com/de-de/men/menswear/coatsjackets/padded/product/padded-faux-shearling-jacket-dark-brown-1203771002",
        },
        {
          image: require("@/assets/products/3.jpg"),
          text: "GEFLOCHTENE TOTE BAG",
          href: "https://www.cos.com/de-de/men/accessories/bagswallets/totebags/product/woven-tote-webbing-dark-brown-1238666002",
        },
        {
          image: require("@/assets/products/4.jpg"),
          text: "LOCKERER ZWEIREIHIGER BLAZER",
          href: "https://www.cos.com/de-de/men/menswear/suits/blazers/product/relaxed-double-breasted-wool-blend-blazer-dark-beige-1250551001",
        },
        {
          image: require("@/assets/products/5.jpg"),
          text: "CORDHOSE MIT WEITEM BEIN",
          href: "https://www.cos.com/de-de/men/menswear/trousers/wide-fit/product/corduroy-wide-leg-trousers-dark-khaki-1243946002",
        },
        {
          image: require("@/assets/products/6.jpg"),
          text: "DOPPELREIHIGE CABANJACKE",
          href: "https://www.cos.com/de-de/men/menswear/coatsjackets/coats/product/double-breasted-wool-pea-coat-navy-1250534001",
        },
        {
          image: require("@/assets/products/7.jpg"),
          text: "DOME BEFLOCKTE JEANS",
          href: "https://www.cos.com/de-de/men/menswear/jeans/straightleg/product/dome-flocked-straight-leg-jeans-black-1265077001",
        },
        {
          image: require("@/assets/products/8.jpg"),
          text: "GROBSTRICKPULLOVER",
          href: "https://www.cos.com/de-de/men/menswear/knitwear/cashmere/product/chunky-pure-cashmere-jumper-beige-1251102001",
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
.heading {
  color: #080808;
  text-align: center;
  font-family: "SuisseIntl-Bold", sans-serif;
  font-size: 3.16263rem;
  font-style: normal;
  letter-spacing: -0.06325rem;
  text-transform: uppercase;
  margin-top: 3.17rem;
  margin-bottom: 1.8rem;
  @include mobile {
    font-size: 6.68063vw;
    letter-spacing: 0.06687vw;
    margin-top: 8.6vw;
    margin-bottom: 3.73333vw;
  }
}
.lead {
  color: #1b1b1b;
  text-align: center;
  font-family: "SuisseIntl-Regular", sans-serif;
  font-size: 0.68544rem;
  line-height: 0.94906rem; /* 138.462% */
  width: 23.83175rem;
  @include mobile {
    width: 90.58833vw;
    font-size: 4.00833vw;
    line-height: 4.81vw;
  }
}
.section-main {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.line {
  width: 64.30656rem;
  height: 0.05269rem;
  justify-content: center;
  align-items: center;
  stroke-width: 0.843px;
  stroke: #eee;
  background-color: #eee;
  margin-top: 3.14rem;
  margin-bottom: 3.22rem;
  @include mobile {
    margin-top: 9.23333vw;
    margin-bottom: 9.63333vw;
    width: 77.8575vw;
  }
}
.heading2 {
  color: #1b1b1b;
  text-align: center;
  font-family: "SuisseIntl-SemiBold", sans-serif;
  font-size: 0.94906rem;
  line-height: 1.0545rem;
  letter-spacing: 0.04325rem;
  text-transform: uppercase;
  margin-bottom: 1.3125rem;
  @include mobile {
    font-size: 4.81vw;
    line-height: 5.34437vw;
    letter-spacing: 0.21917vw;
    margin-bottom: 6.04167vw;
  }
}
.gallery-text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.products {
  margin: 3.13rem 7.54rem 3.31rem 7.54rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(12.50094rem, 1fr));
  gap: 0.85rem;
  transition: all 0.3s ease;
  @include mobile {
    grid-template-columns: repeat(auto-fill, minmax(30.83333vw, 1fr));
    gap: 1.06667vw;
    margin: 7.3vw 3.6vw 9.06667vw 3.6vw;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
    img:hover {
      scale: 1.03;
    }
    p {
      color: #1b1b1b;
      font-family: "SuisseIntl-Regular", sans-serif;
      margin-top: 0.59rem;
      font-size: 0.58rem;
      line-height: 0.55088rem;
      letter-spacing: 0.03475rem;
      text-transform: uppercase;
      @include mobile {
        font-size: 2.93937vw;
        line-height: 3.47396vw; /* 118.182% */
        letter-spacing: 0.21917vw;
      }
    }
  }
}
.cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cta {
  width: 12.65406rem;
  height: 2.31994rem;
  background: #1b1b1b;
  color: #fff;
  text-align: center;
  font-family: "SuisseIntl-Regular", sans-serif;
  font-size: 0.68544rem;
  line-height: 0.84363rem; /* 123.077% */
  letter-spacing: 0.05713rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 3.15rem;
  @include mobile {
    margin-bottom: 9.36667vw;
    width: 64.13333vw;
    height: 11.7577vw;
    font-size: 3.47396vw;
  }
}
.cta:hover {
  scale: 1.05;
}
.images-container {
  display: flex;
  justify-content: center;
  align-items: center;
  @include mobile {
    flex-direction: column;
  }

  img {
    width: 32.45231rem;
    height: 40.56544rem;
    @include mobile {
      width: 90.85563vw;
      height: 121.14167vw;
    }
  }
}
.heading-images {
  width: 29.75rem;
  font-size: 2.6355rem;
  margin: 0 auto;
  margin-top: 3.14rem;
  margin-bottom: 2.383rem;
  text-align: left;
  @include mobile {
    width: 100%;
    font-size: 8.01667vw;
    padding: 0 1rem;
  }
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  @include mobile {
    margin-top: 18.7vw;
  }
}
.cta2 {
  margin-bottom: 3rem;
  @include mobile {
    margin-bottom: 6.66667vw;
  }
}
.logo {
  margin-bottom: 3rem;
  width: 16.00263rem;
  height: 5.66381rem;
  @include mobile {
    width: 36.50833vw;
    height: 12.92146vw;
    margin-bottom: 6.66667vw;
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
