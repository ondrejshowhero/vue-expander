<template>

  <header class="section-header">
    <div class="logo">
      <img src="@/assets/logo-w.png">
    </div>
  </header>

  <section class="section-video">
    <ExpanderVideo :videoId="videoId" :mobile="mobile" />
  </section>

  <section class="section-intro">
    <div class="text">
      <h1 class="heading">
        UPPTÄCK HELT NYA LEXUS RX. LADDAD MED SJÄLVFÖRTROENDE.
      </h1>
      <p class="lead">
        Helt nya RX erbjuder innovativ förarstödsteknik, avancerad fyrhjulsdrift och en kupé som är byggd på japansk hantverkstradition. En helt ny SUV som är laddad med självförtroende – oavsett om du väljer  laddhybriden RX 450h+, elhybriden RX 350h eller turboelhybriden RX 500h. 
      </p>
      <a href="https://ad.doubleclick.net/ddm/trackclk/N526202.4451786SHOWHEROS/B29276508.360566422;dc_trk_aid=551516635;dc_trk_cid=187783875;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=" target="_blank" class="cta" @click="track('upptack-lexus-rx')">Upptäck Lexus RX</a>
    </div>
    <div class="image">
      <img src="@/assets/image-1.jpg">
    </div>
  </section>

  <section class="section-info">
    <div class="text">
      <h2 class="heading">GÖR VÅRT TEST OCH TA REDA<br>PÅ VILKEN RX SOM PASSAR DIG.</h2>
      <p class="lead">
        Det svåra är inte att välja helt nya Lexus RX. Utan vilken av våra tre olika drivlinor du ska välja. Passar elhybriden RX 350h dig? Eller vill du kunna ladda och köra enbart på el är det laddhybriden RX 450h+ du ska ha. Och om det är körglädjen som står i fokus när du väljer bil är det vår nya turboelhybrid RX 500h som förmodligen lockar mest. Gör vårt test nu och ta reda på vilken RX som passar ditt liv och din livsstil.
      </p>
    </div>
    <div class="logo">
      <video autoplay loop muted playsinline>
        <source src="@/assets/RX(matted)-hevc-safari.mp4" type='video/mp4; codecs="hvc1"'>
        <source src="@/assets/RX(matted)-vp9-chrome.webm" type="video/webm">
      </video>
    </div>
  </section>

  <section class="section-quiz">
    <LexusQuiz @track="track" :models="models" />
  </section>
     
  <section class="section-slider">
    <ExpanderSlider @track="track" :items="models" :highlighted="[]" />
  </section>

  <footer class="section-footer">
    <div class="logo">
      <img src="@/assets/logo.png">
    </div>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N526202.4451786SHOWHEROS/B29276508.360566422;dc_trk_aid=551517697;dc_trk_cid=187783878;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=" target="_blank" class="cta" @click="track('boka-provkorning')">Boka provkörning</a>
  </footer>

</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderSlider from './components/ExpanderSlider.vue'
  import LexusQuiz from './components/LexusQuiz.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      ExpanderSlider,
      LexusQuiz,
    },
    data() {
      return {
        resourcesId: 2047,
        videoId: 2668,
        version: 1,
        mobile: false,
        models: [
          [
            'RX 350h',
            'Den RX som passar just dig är helt klart RX 350h. Det är en självladdande elhybrid som aldrig behöver laddas med sladd. En välutrustad elhybrid som har lagom med kraft, utrustning och laddmöjligheter.',
            'Njut av komfort och kontroll i alla situationer med Lexus RX 350h självladdande elhybrid. Bilen styr sömlöst kraften från en 2,5-liters bensinmotor och elmotor(er), som levererar 250 hk.',
            'Bygg din nya RX 350h på lexus.se/RX redan idag!',
            'https://www.lexus.se/new-cars/rx',
            'rx350h',
            'SJÄLVLADDANDE ELHYBRID',
          ],
          [
            'RX 450h+',
            'Den RX som passar just dig är helt klart RX 450h+. En helt ny laddhybrid som går att ladda och köra enbart på el. Den passar även dig bäst på grund av att du bland annat kan ladda din bil hemma vilket gör att du kommer kunna köra en stor del av din tid på enbart el.',
            'Exceptionellt tyst och med låga totala CO2-utsläpp – Lexus RX 450h+ är vår laddhybrid som går att ladda och köra enbart på el. Med en effekt på 309 hk accelererar den från 0–100 km/h på bara 6,5 sekunder.',
            'Bygg din nya RX 450h på lexus.se/RX redan idag!',
            'https://www.lexus.se/new-cars/rx',
            'rx450hplus',
            'LADDHYBRID',
          ],
          [
            'RX 500h',
            'Den RX som passar just dig är helt klart RX 500h. Det är vår första turboelhybrid vilket innebär att den kommer ge dig mer kraft och acceleration än någon av våra andra SUV:ar med elhybrid-drift.',
            'Helt nya RX 500h turboelhybrid är byggd för att leverera elektrifierad premiumprestanda. Den är vår första turboladdade elhybrid någonsin, med en helt ny hybridarkitektur bestående av en 2,4-liters turbomotor med 371 hk och en 6-växlad automatlåda.',
            'Bygg din nya RX 500h på lexus.se/RX redan idag!',
            'https://www.lexus.se/new-cars/rx',
            'rx500h',
            'TURBOELHYBRID',
          ],
        ]
      }
    },
    created() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      let id = params.get('version')
      if (id == 2) {
        this.version = 2
      }
    },
    methods: {
      track(label) {
        window.ad10Resources?.trackAction(`${this.resourcesId}-${label}`)
      },
    },
  }
</script>

<style lang="scss">
  @import "node_modules/minireset.css/minireset";
  // @import '@/scss/fonts.scss';
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
    background: $color-bg url('assets/bg.jpg') no-repeat center 160% / 100% auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @include d {
      padding-bottom: 7rem;
    }
  }

  img {
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
  }

  .cta {
    display: inline-block;
    padding: .875rem 1.25rem;
    font-size: 1rem;
    border: 1px solid #fff;
    border-radius: .375rem;
    transition: .15s;
    @include d {
      font-size: 1.125rem;
    }
    &:hover {
      color: #000;
      background: #fff;
    }
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    padding: .375rem 0 0 .5rem;
    @include d {
      display: none;
    }
    .logo {
      width: 7rem;
    }
  }

  .section-intro {
    position: relative;
    @include d {
      padding-left: 17.5rem;
    }
    .text {
      padding: 2.5rem 1.25rem;
      @include d {
        position: absolute;
        left: 8.5rem;
        top: 2.625rem;
        width: 24rem;
        background: #101010;
      }
    }
    .heading {
      margin-bottom: 1.625rem;
      font-size: 1.25rem;
      font-weight: 400;
      @include d {
        font-size: 1.5rem;
      }
    }
    .lead {
      font-size: .75rem;
      font-weight: 300;
      @include d {
        margin-bottom: 2.5rem;
        padding-right: 2rem;
        font-size: 1rem;
      }
    }
    .cta {
      @include m {
        position: absolute;
        left: 50%;
        bottom: .75rem;
        transform: translate(-50%, 0);
      }
    }
    .image {
      @include m {
        aspect-ratio: 2/1;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 90%;
        }
      }
    }
  }

  .section-info {
    position: relative;
    padding: 7rem 1rem 2.25rem 1rem;
    overflow: hidden;
    @include d {
      padding: 5.5rem 0 5.25rem 7.625rem;
      overflow: visible;
    }
    .text {
      @include d {
        width: 24.5rem;
        padding-left: 2rem;
        border-left: 1px solid #fff;
      }
    }
    .heading {
      margin-bottom: .5rem;
      font-size: 1.125rem;
      font-weight: 400;
      @include d {
        font-size: 1.5rem;
      }
    }
    .lead {
      font-size: .75rem;
      @include d {
        font-size: 1rem;
      }
    }
    .logo {
      position: absolute;
      right: -3rem;
      top: -1.25rem;
      width: 12.5rem;
      @include d {
        top: -3.375rem;
        right: 0;
        width: 18.125rem;
      }
    }
  }

  .section-slider {
    overflow: hidden;
  }

  .section-footer {
    display: block;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
    padding: .375rem 2.25rem;
    background: #fff;
    text-align: center;
    @include d {
      position: fixed;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      text-align: left;
    }
    .logo {
      display: none;
      width: 9.75rem;
      @include d {
        display: block;
      }
    }
    .cta {
      border-color: #000;
      color: #000;
      @include m {
        padding-top: .5rem;
        padding-bottom: .5rem;
      }
      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }

</style>
