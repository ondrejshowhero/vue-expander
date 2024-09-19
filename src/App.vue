<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" :url="url" name="Main Video" />
  </section>

  <section class="section-image section">
    <img src="@/assets/images/image-1.jpg">
    <p class="text">
      EN SMIDIGARE ELEKTRISK
      UPPLEVELSE MED BMW CHARGING.
    </p>
    <a :href="url" target="_blank" class="link" @click="track('image')"></a>
  </section>

  <section class="section-main section">
    <div class="text">
      <h1 class="heading">SÖMLÖS LADDNING.</h1>
      <p class="lead">
        Aldrig har laddning varit så sömlöst, smidigt och roligt! Våra nya BMW-modeller är uppdaterade med våra senaste laddningsinnovationer som håller räckviddsångest på behörigt avstånd.
      </p>
      <p class="lead">
        Alla våra elbilar kommer med kortet BMW Charging som ger dig tillgång till hela vårt nätverk av laddstationer. I dagsläget hittar du över 19.000 laddpunkter i Sverige och hela 750.000 runtom i Europa – och det växer för varje dag som går. Men du är självklart inte låst till bara BMW:s nätverk. Våra nyare modeller är även utrustade med Plug & Charge. Då behöver du inte tänka på betalningen alls när du laddar, utan kopplar helt enkelt bara in sladden i bilen och så sker registrering, autentisering och betalning automatiskt*. Faktum är att du kan lagra upp till 5 olika kontrakt till olika laddningsnätverk direkt i bilen, så slipper du hålla koll på kort och inlogg till respektive.
      </p>
      <p>
        *Just nu endast tillgängligt med IONITY i Sverige.
      </p>
      <p class="note">
        BMW iX xDrive40. Strömförbrukning. kWh/100 km bl. körning (WLTP): 19,4-21,6. Utsläpp CO₂ g/km: 0.
      </p>
    </div>
    <div class="images">
      <img src="@/assets/images/image-2.jpg">
    </div>
  </section>

  <section class="section-info section">
    <div class="text">
      <h1 class="heading">MER ÄN BARA NAVIGATION.</h1>
      <p class="lead">
        BMW Maps är mer än bara ett navigationssystem. När du skriver in din slutdestination planerar den automatiskt in laddstopp längs vägen för att göra resan så smidig som möjligt. Den räknar även ut hur mycket och hur länge du behöver ladda vid varje stopp för att optimera restiden. Dessutom kontrollerar den automatiskt tillgängligheten vid laddstationen när du närmar dig och ger dig alternativa rutter och kalkyler så fort någonting ändras. Självklart kan du ställa in och sortera dina preferenser för vilka laddstationer systemet ska välja. 
      </p>
      <p class="lead">
        När det är dags att stanna för laddning, ger BMW Maps dig även tips på restauranger, butiker och närliggande aktiviteter som du kan besöka under tiden som du laddar. I våra nyare modeller kan du även välja att koppla av med lite in-car gaming via Curved Display – garanterat bättre och roligare spenderad laddtid som fyller både bilens och dina egna batterier! 
      </p>
    </div>
    <div class="images">
      <img src="@/assets/images/image-3.jpg">
      <video playsinline loop autoplay muted :src="getArticleVideo()"></video>
    </div>
  </section>

  <section class="section-image section">
    <img src="@/assets/images/image-4.jpg">
    <a :href="url" target="_blank" class="link" @click="track('image')"></a>
    <a :href="url" target="_blank" class="cta" @click="track('upptack')">Upptäck BMW Charging</a>
  </section>


</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
    },
    data() {
      return {
        mobile: true,
        videoFile: '640.mp4',
        url: 'https://track.adform.net/C/?bn=76305214;gdpr=${gdpr};gdpr_consent=${gdpr_consent_50}',
      }
    },
    created() {
      if (this.mobile === true) {
        this.url = 'https://track.adform.net/C/?bn=76305213;gdpr=${gdpr};gdpr_consent=${gdpr_consent_50}'
      }
    },
    methods: {
      track(label, category) {
        category = category || 'Click'
        window.customTrack(category, 'interaction', label)
      },
      getArticleVideo() {
        if (this.mobile === 480)
          return require('@/assets/video/article-mobile.mp4')
        else
          return require('@/assets/video/article.mp4')
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
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-image {
    position: relative;
    .text {
      position: absolute;
      left: 3.125rem;
      bottom: 3.125rem;
      width: 33rem;
      font-size: 1.875rem;
      color: #fff;
      line-height: 1.1;
      @include m {
        left: 0;
        bottom: 0;
        padding: 3rem 2rem 1.5rem;
        width: 100%;
        font-size: 1.25rem;
        background: linear-gradient(to bottom, rgba(#000, 0) 0%, rgba(#000, .3) 5%);
      }
    }
    .cta {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      z-index: 3;
      padding: .5rem 1.5rem;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      border: .125rem solid #fff;
      background: rgba(#000, .2);
      border-radius: .125rem;
      transform: translate(-50%, 0);
      transition: .15s;
      @include m {
        bottom: 1rem;
        width: 14rem;
        padding: .5rem 1rem;
        text-align: center;
      }
      &:hover {
        background: rgba(#000, .3);
      }
    }
    .link {
      @include cover;
      z-index: 2;
    }
  }

  .section-main,
  .section-info {
    padding: 2.5rem 2rem 0;
    @include d {
      display: flex;
      justify-content: space-between;
      padding: 3.75rem 3.125rem;
    }
    .heading {
      margin-bottom: 2rem;
      font-size: 1.5rem;
      @include d {
        margin-bottom: 2.875rem;
      }
    }
    .images {
      margin-top: 2rem;
      @include d {
        margin-top: 0;
      }
    }
    p {
      margin-bottom: 1rem;
      font-size: .875rem;
    }
  }

  .section-main {
    @include d {
      .text {
        position: relative;
        width: 28rem;
      }
      .images {
        width: 27.375rem;
      }
    }
    .lead {
      font-size: 1rem;
    }
    .note {
      font-size: .625rem;
      line-height: 1;
      @include d {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 120%;
        margin: 0;
      }
    }
  }

  .section-info {
    padding-bottom: 2rem;
    @include d {
      flex-direction: row-reverse;
      .text {
        width: 27.375rem;
      }
      .images {
        width: 28rem;
      }
    }
    .images {
      video {
        display: block;
        margin-top: .75rem;
        aspect-ratio: 4/3;
        background: lightgrey;
      }
    }
  }

</style>
