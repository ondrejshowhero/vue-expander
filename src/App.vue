<template>

  <section class="section-video">
    <ExpanderVideo filename="1080.mp4" url="https://secure.adnxs.com/clktrb?id=804318&redir=https://ad.doubleclick.net/ddm/trackclk/N1081275.5277392SHOWHEROESABDIGI/B31866215.393764859;dc_trk_aid=585067376;dc_trk_cid=139917410;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" autoplay="true" />
  </section>

  <div class="container">

    <section class="section-intro">
      <img src="@/assets/logo.webp" class="logo" width="34">
      <h1 class="heading">
        MAZDA CX-60
      </h1>
      <p>
        Mazda CX-60 laddhybrid är en elegant och kraftfull SUV med en elektrisk räckvidd på 63 km och en dragvikt på 2 500 kg. Mazda CX-60 representerar allt som vi byggt in i vårt DNA de senaste 100 åren.
      </p>
      <div class="info">
        <h2 class="title">Nu från <strong>469 900 kr</strong></h2>
        <p>
          (ord. pris från 517 500 kr)<br>
          Gäller fram till 31/5 2024
        </p>
        <h2 class="title">Förmånsvärde från <strong>2 957 kr/mån</strong></h2>
        <p>
          Förmånsvärdet är beräknat med 50 % marginalskatt.
        </p>
      </div>
    </section>

    <section class="section-image">
      <img src="@/assets/image-1.jpg">
    </section>
    <a href="https://secure.adnxs.com/clktrb?id=804317&redir=https://ad.doubleclick.net/ddm/trackclk/N1081275.5277392SHOWHEROESABDIGI/B31866215.393457073;dc_trk_aid=585067871;dc_trk_cid=139917410;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="cta" @click="track('be-om-offert')">
      <span>Be om offert</span>
    </a>

  </div>

  <section class="section-colors">
    <h2 class="heading">Vilken färg passar dig?</h2>
    <ExpanderColorSelector @track="track" />
    <a href="https://secure.adnxs.com/clktrb?id=804316&redir=https://ad.doubleclick.net/ddm/trackclk/N1081275.5277392SHOWHEROESABDIGI/B31866215.393457070;dc_trk_aid=585067109;dc_trk_cid=139917410;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="cta" @click="track('bygg-din-bil')">
      Bygg din bil
    </a>
  </section>


  <section class="section-slider">
    <ExpanderSlider @track="track" />
  </section>

  <section class="section-banner">

    <div class="image">
      <picture>
        <source srcset="@/assets/image.jpg" media="(min-width: 480px)">
        <img src="@/assets/image-mobile.jpg">
      </picture>
    </div>

    <div class="text">
      <h2 class="heading">
        VAD ÄR DIN BIL VÄRD?
      </h2>
      <p>
        Vill du veta hur mycket din bil är värd? Genom att fylla i vår värderingsmodul med uppgifter om din nuvarande bil får du ett estimerat inbytespris utan att förbinda dig till något. När värderingen är klar kommer du bli kontaktad av din valda Mazda-återförsäljare. Värderingen baseras på generella priser från AutoUncle och den information du angett om din bil.
      </p>
      <a href="https://secure.adnxs.com/clktrb?id=804315&redir=https://ad.doubleclick.net/ddm/trackclk/N1081275.5277392SHOWHEROESABDIGI/B31866215.393430165;dc_trk_aid=585067112;dc_trk_cid=139917410;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="cta" @click="track('berakna-inbytespris')">
        Beräkna inbytespris
      </a>
    </div>

    <a href="https://secure.adnxs.com/clktrb?id=804318&redir=https://ad.doubleclick.net/ddm/trackclk/N1081275.5277392SHOWHEROESABDIGI/B31866215.393764859;dc_trk_aid=585067376;dc_trk_cid=139917410;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="link" @click="track('image')"></a>


  </section>

  <footer class="section-footer">
    <div class="logo">
      <img src="@/assets/logo.webp" width="64">
    </div>
    <a href="https://secure.adnxs.com/clktrb?id=804318&redir=https://ad.doubleclick.net/ddm/trackclk/N1081275.5277392SHOWHEROESABDIGI/B31866215.393764859;dc_trk_aid=585067376;dc_trk_cid=139917410;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="cta" @click="track('upptack-din-bil')">UPPTÄCK MER</a>
  </footer>

</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderSlider from './components/ExpanderSlider.vue'
  import ExpanderColorSelector from './components/ExpanderColorSelector.vue'

  export default {
    name: 'App',
    data() {
      return {
        version: 0,
      }
    },
    components: {
      ExpanderVideo,
      ExpanderSlider,
      ExpanderColorSelector,
    },
    mounted() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      let id = params.get('version')
      if (id == 1)
        this.version = 1
    },
    methods: {
      track(label) {
        return label
        // window.ad10Resources?.trackAction(`2192-${label}`)
      }
    }
  }
</script>

<style lang="scss">
  @import "node_modules/minireset.css/minireset";
  @import '@/scss/fonts.scss';
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  html {
    font-family: $font, sans-serif;
    font-size: 16px;
    font-weight: 400;
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
    background: #000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 4.375rem;
  }

  img {
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  strong {
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
  }
  button {
    font-family: $font;
    padding: 0;
    border: none;
    background: none;
    outline: 0 none;
    cursor: pointer;
  }

  .heading {
    margin-bottom: 1rem;
    font-size: 1.875rem;
    font-weight: 500;
    line-height: 1.25;
    @include d {
      font-size: 2.5rem;
    }
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .container {
    position: relative;
    padding-bottom: 5rem;
    @include d {
      display: flex;
      padding-bottom: 0;
    }
    .cta {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 5rem;
      background: #000;
      @include d {
        width: 43.3%;
        height: 6.25rem;
      }
      span {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        font-size: 1.25rem;
        color: #fff;
        background: $color-1;
        transition: .25s;
      }
      &:hover {
        span {
          width: 100%;
          padding-right: 50%;
        }
      }
      &::after {
        content: '';
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        width: 50%;
        height: 100%;
        background: url('assets/arrow.svg') no-repeat center center / 4rem auto;
      }
    }
  }

  .section-intro {
    padding: 2.375rem 2.375rem 3.25rem;
    background: linear-gradient(to right, $color-3 50%, #fff 50%);
    @include d {
      width: 43.3%;
      padding: 4.125rem 4.625rem 3.25rem 4.125rem;
    }
    .logo {
      width: 2.125rem;
      margin-bottom: 2.375rem;
      @include d {
        width: 3.25rem;
        margin-bottom: 2.625rem;
      }
    }
    .heading {
      @include d {
        margin-bottom: 2.5rem;
      }
    }
    p {
      line-height: 1.75;
    }
    .info {
      margin-top: 2rem;
      .title {
        font-size: 1.25rem;
      }
      p {
        font-size: .625rem;
        line-height: 1.4;
      }
      p + .title {
        margin-top: .75rem;
      }
    }
  }

  .section-image {
    @include d {
      width: 56.7%;
    }
  }

  .section-colors {
    padding-top: 1.375rem;
    padding-bottom: 1.25rem;
    background: #fff;
    .heading {
      font-size: 1.25rem;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      @include d {
        font-size: 1.5rem;
      }
    }
    .cta {
      display: block;
      width: 13rem;
      padding: 1rem;
      margin: 0 auto;
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      background: #000;
      border-radius: .3125rem;
      transition: background .15s;
      &:hover {
        background: $color-1;
      }
      &::before {
        content: '';
        position: relative;
        top: .25rem;
        display: inline-block;
        width: 1.875rem;
        height: 1.125rem;
        background: url('assets/GAT_Open_iPhone6-Copy-14.svg') no-repeat center center / contain;
      }
    }
  }

  .section-banner {
    position: relative;
    .text {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding: 3rem 2.375rem 3.25rem;
      color: #fff;
      @include d {
        padding: 5rem 2.375rem 6.25rem 4.25rem;
      }
      .heading {
        max-width: 20rem;
      }
      p {
        line-height: 1.3;
        @include d {
          max-width: 21.5rem;
        }
      }
    }
    .link {
      @include cover;
      z-index: 1;
    }
    .cta {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14rem;
      height: 3.5rem;
      margin-top: 10rem;
      font-size: 1.25rem;
      color: #fff;
      background: $color-1;
      border-radius: .25rem;
      transition: .15s;
      @include d {
      margin-top: 1rem;
        &:hover {
          background: $color-3;
          color: $color-1;
        }
      }
    }
  }

  .section-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0 0 1.25rem;
    height: 4.375rem;
    background: $color-2;
    @include d {
      padding: 0 0 0 4.875rem;
    }
    .logo {
      width: 3rem;
    }
    .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 11rem;
      height: 4.375rem;
      color: #fff;
      background-color: $color-1;
      text-transform: uppercase;
      transition: .15s;
      @include d {
        width: 16.75rem;
      }
      &:hover {
        background: $color-1;
        border-color: $color-1;
      }
    }
  }

</style>
