<template>

  <section class="section-video">
    <ExpanderVideo :videoId="resourceVideoId" :mobile="mobile" />
    <div class="logo">
      <img src="@/assets/ford.svg">
    </div>
  </section>

  <section class="section-main">
    <h1 class="heading">Nå er Mustang Mach-E et enda smartere bilkjøp: Bedre priser, fast rente og nye kostnadsfrie tjenester</h1>
    <p class="lead">
      Leveringstiden på Mustang Mach-E er nå mye kortere enn tidligere. I tillegg har SUV-en blitt et enda smartere bilkjøp, med store produktforbedringer og nye kostnadsfrie tjenester inkludert. Prisene på den helelektriske SUV-en har også blitt enda mer attraktive, med en startpris fra bare 472 300 kroner. 
    </p>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N9166.4661577SHOWHEROESNO/B29149617.360566977;dc_trk_aid=551362778;dc_trk_cid=184187065;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=" target="_blank" class="cta" @cilck="track('bestill-provekjoring')">Bestill prøvekjøring <span class="desktop-only">av Mustang Mach-E</span> her</a>
  </section>

  <section class="section-1">
    <div class="text">
      <h1 class="heading">Flere kostnadsfrie tjenester</h1>
      <p class="lead">
        Med 5 års fri service inkludert sikrer Mustang Mach-E kunder seg et forutsigbart eierforhold. I tillegg vil 3 års gratis dekkhotell med dekkskift og kostnadsfri hente- og bringetjeneste* ved service og EU-kontroll gjøre bilholdet enda enklere og bekymringsfritt.
      </p>
    </div>
    <div class="image">
      <img src="@/assets/image-1.jpg">
    </div>
  </section>

  <section class="section-2">
    <div class="text">
      <p class="lead">
        Vi har det siste årets introdusert forbedringer til Mustang Mach-E som har vært spisset mot den norske kunden. Dette inkluderer blant annet mulighet for taklast, opp til 1 500 kg hengervekt, samt enda mer utstyr som standard. Dette kombinert med mulighet for firehjulstrekk, opp til hele 600 km rekkevidde og et hav av innovative teknologier gjør Mustang Mach-E til det beste bilkjøpet for kunden som ønsker den smarteste- og tøffeste elbilen på markedet, sier administrerende direktør i Ford Motor Norge, Per Gunnar Berg. 
      </p>
    </div>
    <div class="image">
      <img src="@/assets/image-2.jpg">
    </div>
  </section>

  <section class="section-3">
      <h1 class="heading">Gunstigere finansiering og 5&nbsp;års fri&nbsp;service</h1>
      <p class="lead">
        Ved kjøp av ny Mustang Mach-E får kunder nå tilbud om 3,49 % fastrente i 3 år** som gjelder både ved lån og privatleasing
      </p>
      <p class="lead">
        – En av våre store styrker er et omfattende nettverk med over 70 Ford-forhandlere i hele Norge som står klare til å gi kundene personlig service – hver eneste dag. Vi skal gjøre alt for at et Mustang Mach-E eierskap ikke bare skal være morsomt men så rimelig, enkelt og tidsbesparende som mulig, sier Ford Motor Norges administrerende direktør.
      </p>
  </section>

  <section class="section-scroller">
    <ExpanderScroller @track="track" />
  </section>

  <section class="section-4">
    <h1 class="heading">Fortsetter produkt- og tjenesteforbedringene fra&nbsp;2022</h1>
    <p class="lead">
      I løpet av 2022 kom også Ford med en rekke produktforbedringer på Mustang Mach-E – for å gjøre bilen enda mer skreddersydd for norske kunder, blant annet økt tilhengervekt på opptil 1500 kg og mulighet for taklast.<br>
      – Med disse endringene har en av de beste og råeste elbilene blitt aktuell for enda flere kunder. Dette er også en av bilene på markedet med lengst rekkevidde og mest omfattende muligheter for over-the-air (OTA) oppdateringer, noe de eksisterende kundene allerede har merket, og i enda større grad vil oppleve i de kommende månedene. Vi liker å si at det er din bil, men det er fortsatt vår baby, avslutter administrerende direktør i Ford Motor Norge, Per Gunnar Berg.
    </p>
  </section>

  <footer class="section-footer">
    <div class="logo">
      <img src="@/assets/logo.svg">
    </div>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N9166.4661577SHOWHEROESNO/B29149617.360566974;dc_trk_aid=551516881;dc_trk_cid=184187065;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=" target="_blank" class="cta" @cilck="track('les-mer')">Les mer</a>
  </footer>
     
</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderScroller from './components/ExpanderScroller.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      ExpanderScroller,
    },
    data() {
      return {
        resourcesId: 2053,
        resourceVideoId: 2683,
        version: 1,
        mobile: false
      }
    },
    created() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      let id = params.get('version')
      if (id == 'mobile') {
        // this.version = 2
        this.mobile = true
        this.resourceVideoId = 2684
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
    padding-bottom: 3.25rem;
    @include d {
      padding-bottom: 3.875rem;
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

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-video {
    position: relative;
    .logo {
      position: absolute;
      left: 50%;
      width: 35vw;
      bottom: 4vw;
      transform: translate(-50%, 0);
      z-index: 1000;
      @include d {
        bottom: 2rem;
        width: 18.75rem;
      }
    }
  }

  .heading {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: .055em;
    @include d {
      font-size: 1.5rem;
    }
  }
  .lead {
    font-size: 1rem;
    letter-spacing: .055em;
    line-height: 1.222;
    @include d {
      font-size: 1.125rem;
    }
  }
  .cta {
    display: inline-block;
    padding: .875rem 1.25rem;
    font-size: 1.25rem;
    border: 1px solid #fff;
    border-radius: 3rem;
    transition: .15s;
    letter-spacing: .055em;
    .desktop-only {
      display: none;
      @include d {
        display: inline-b;
      }
    }
    @include d {
      padding: .875rem 1.875rem;
      font-size: 1.5rem;
    }
    &:hover {
      background: #fff;
      color: #000;
    }
  }

  
  .section-main {
    padding: 3rem 1rem;
    text-align: center;
    background: linear-gradient(95.61deg, rgba(0, 0, 0, 0.61) 27.7%, rgba(0, 0, 0, 0) 161.84%), url('assets/bg-1.jpg') no-repeat center center / cover;
    @include d {
      padding: 5rem 1rem 4.25rem;
    }
    .heading {
      max-width: 52.25rem;
      margin: 0 auto 1rem;
      font-size: 1.5rem;
      line-height: 1.1875;
      @include d {
        font-size: 2rem;
      }
    }
    .lead {
      margin: 0 auto 2.5rem;
      max-width: 48rem;
      font-weight: 500;
    }
  }

  .section-1 {
    @include d {
      display: flex;
      .text,
      .image {
        width: 50%;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
    .text {
      padding: 2rem;
      @include d {
        padding: 3.125rem;
      }
    }
    .heading {
      margin-bottom: 1rem;
    }
  }

  .section-2 {
    position: relative;
    .text {
      position: relative;
      padding: 4rem 2rem;
      @include d {
        padding: 0;
        position: absolute;
        right: 1.875rem;
        bottom: -6.75rem;
        width: 24.75rem;
        padding: 1.625rem;
        background: #000;
        z-index: 100;
      }
      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 3rem;
        height: 3rem;
        @include d {
          width: 4.25rem;
          height: 4.25rem;
        }
      }
      &::before {
        left: 1rem;
        top: 1rem;
        background: url('assets/quote-start.png') no-repeat center center / contain;
        @include d {
          left: -.25rem;
          top: -2.375rem;
        }
      }
      &::after {
        right: 1rem;
        bottom: 1rem;
        background: url('assets/quote-end.png') no-repeat center center / contain;
        @include d {
          right: 1.625rem;
          bottom: -1rem;
        }
      }
    }
  }

  .section-3 {
    padding: 2.5rem 2rem;
    @include d {
      padding: 6.75rem 3.25rem 2.5rem;
    }
    .heading {
      margin-bottom: 1rem;
    }
    .lead {
      max-width: 49.875rem;
      margin-bottom: 1.125rem;
    }
  }

  .section-4 {
    margin-top: 3rem;
    padding: 3rem 2rem;
    background: linear-gradient(101.81deg, rgba(0, 0, 0, 0.46) 26.91%, rgba(0, 0, 0, 0) 73.57%), url('assets/bg-2.jpg') no-repeat center 72% / cover;
    @include d {
      margin-top: 5rem;
      padding: 6.25rem 5.25rem 5.25rem;
    }
    .heading {
      margin-bottom: 1rem;
    }
  }

  .section-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10000;
    width: 100%;
    padding: .375rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    @include d {
      padding: .375rem 3.5rem;
    }
    .logo {
      width: 5rem;
      @include d {
        width: 6.375rem;
      }
      img {
        display: block;
        width: 100%;
      }
    }
    .cta {
      font-size: 1.125rem;
      @include m {
        padding-top: .5rem;
        padding-bottom: .5rem;
      }
    }
  }

</style>