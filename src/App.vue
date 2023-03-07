<template>

  <section class="section-video">
    <ExpanderVideo :videoId="resourcesVideoId" :mobile="mobile" />
  </section>

  <section class="section-heading">
    <h1 class="heading">
      MEGANE E-TECH 100%<br>ELECTRIC
    </h1>
  </section>

  <div class="container">

    <nav class="section-nav">
      <button @click="setActive(0)" :class="{active: isActive(0)}">TECHNO</button>
      <button @click="setActive(1)" :class="{active: isActive(1)}">EQUILIBRE</button>
      <button @click="setActive(2)" :class="{active: isActive(2)}">ICONIC</button>
    </nav>

    <Transition mode="out-in">
    <div :key="currentId">

      <section class="section-info">
        <p class="col" v-html="currentItem.desc1"></p>
        <p class="col" v-html="currentItem.desc2"></p>
      </section>

      <ExpanderCarConfigurer :item="currentItem" @track="track" />

    </div>
    </Transition>

    <section class="section-specs">
      <div class="item">
        <span class="title">motor</span>
        <strong class="value">160 kw</strong>
        <span class="note">eller 220 hk<sup>1</sup></span>
      </div>
      <div class="item">
        <span class="title">acceleration</span>
        <strong class="value">7,4 s</strong>
        <span class="note">0-100 km/t<sup>2</sup></span>
      </div>
      <div class="item">
        <span class="title">op til</span>
        <strong class="value">442 km</strong>
        <span class="note">rækkevidde (WLTP)<sup>3’</sup></span>
      </div>
      <div class="item">
        <span class="title">op til</span>
        <strong class="value">300 km</strong>
        <span class="note">genvundet rækkevidde<br> på 30 min<sup>4</sup></span>
      </div>
    </section>

  </div>

  <section class="section-text">
    <div class="image">
      <img src="@/assets/image-1.jpg">
    </div>
    <div class="text">
      <h1 class="heading">OPLADNINGSLØSNINGER</h1>
      <p>
        Der står et bredt udvalg af brugertilpassede løsninger til din rådighed for opladning i hjemmet, på arbejdet eller på vejen. Renault Megane E-Tech 100% electric leveres med et mode 3 type 2 kabel, der kan bruges til en Wallbox i hjemmet eller på en offentlig ladestation.
      </p>
      <a href="https://www.renault.dk/biler/elbiler/megane-e-tech-electric/opladning?utm_source=showheroes&utm_medium=display&utm_campaign=megane_w10_13&utm_content=expander" target="_blank" class="cta-alt" @click="trakc('læs-mere-om-opladning')">
        LÆS MERE OM OPLADNING
      </a>
    </div>
  </section>

  <section class="section-offer"> 
    <div class="maininfo">
      <h1 class="heading">Genopfindelse af elbilen</h1>
      <p>
        Megane E-Tech 100% electric er med dig, hvor end du tager hen.I kraft af Renaults R&D ekspertise har den en rækkevidde på op til 442 km.
      </p>
    </div>
    <div class="items">
      <a href="https://privatleasing.renault.dk/privat/product/bil/renault/ny-megane-e-tech-100%25-electric/60-kwh,-220hk,-range-450-km?id=3381&financeform=private-leasing&step=step-1" target="_blank" class="item" @click="track('equilibre')">
        <h2 class="title">Gælder kun kundeordre inden 31/3</h2>
        <div class="image">
          <img src="@/assets/megane-equilibre.jpg">
        </div>
        <div class="info">
          <h3 class="name">
            Renault Ny Megane E-Tech 100% Electric
          </h3>
          <div class="label">
            <strong>Equilibre&nbsp;</strong>
            60 kWh, 220HK, range 450 km
          </div>
          <div class="price">
            <div class="price-value"><strong>3.895</strong><span>Kr./md.</span></div>
            <div class="price-cta">Vælg</div>
          </div>
          <div class="table">
            <table><tbody><tr><th>Udbetaling:</th><td>19.995 Kr.</td></tr><tr><th>Samlet leasingydelse i perioden:</th><td>160.815 Kr.</td></tr></tbody></table>
          </div>
        </div>
      </a>
      <a href="https://privatleasing.renault.dk/privat/product/bil/renault/ny-megane-e-tech-100%25-electric/60-kwh,-220hk,-range-450-km?id=3381&financeform=private-leasing&step=step-1" target="_blank" class="item" @click="track('equilibre')">
        <h2 class="title">Gælder kun kundeordre inden 31/3</h2>
        <div class="image">
          <img src="@/assets/megane-techno.jpg">
        </div>
        <div class="info">
          <h3 class="name">
            Renault Ny Megane E-Tech 100% Electric
          </h3>
          <div class="label">
            <strong>Techno&nbsp;</strong>
            60 kWh, 220HK, range 450 km
          </div>
          <div class="price">
            <div class="price-value"><strong>4.195</strong><span>Kr./md.</span></div>
            <div class="price-cta">Vælg</div>
          </div>
          <div class="table">
            <table><tbody><tr><th>Udbetaling:</th><td>19.995 Kr.</td></tr><tr><th>Samlet leasingydelse i perioden:</th><td>171.615 Kr.</td></tr></tbody></table>
          </div>
        </div>
      </a>
      <a href="https://privatleasing.renault.dk/privat/product/bil/renault/ny-megane-e-tech-100%25-electric/60-kwh,-220hk,-range-450-km?id=3381&financeform=private-leasing&step=step-1" target="_blank" class="item" @click="track('equilibre')">
        <h2 class="title">Gælder kun kundeordre inden 31/3</h2>
        <div class="image">
          <img src="@/assets/megane-iconic.jpg">
        </div>
        <div class="info">
          <h3 class="name">
            Renault Ny Megane E-Tech 100% Electric
          </h3>
          <div class="label">
            <strong>Iconic&nbsp;</strong>
            60 kWh, 220HK, range 450 km
          </div>
          <div class="price">
            <div class="price-value"><strong>4.195</strong><span>Kr./md.</span></div>
            <div class="price-cta">Vælg</div>
          </div>
          <div class="table">
            <table><tbody><tr><th>Udbetaling:</th><td>19.995 Kr.</td></tr><tr><th>Samlet leasingydelse i perioden:</th><td>171.615 Kr.</td></tr></tbody></table>
          </div>
        </div>
      </a>
    </div>
  </section>

  <section class="section-note">
    <p>
      Renault Privatleasing via ALD Automotive. Alle priser er vejledende og baseret på 36 måneder med en bindingsperiode på 12 måneder. Inkl. Service- & vedligeholdelsesaftale, eksklusiv dæk, obligatorisk kaskoforsikring og grøn ejerafgift. Positiv kreditvurdering samt betaling via betalingsservice forudsættes. Der tages forbehold for pris- &amp; afgiftsændringer samt trykfejl.
    </p>
  </section>

  <footer class="section-footer">
    <div class="logo">
      <img src="@/assets/renault.png">
    </div>
    <div class="buttons">
      <a href="https://www.renault.dk/opdag/forhandler?utm_source=showheroes&utm_medium=display&utm_campaign=megane_w10_13&utm_content=expander" class="cta" target="_blank" @click="track('find-forhandler')">Find forhandler</a>
      <a href="https://www.renault.dk/opdag/kontakt/bestil-provetur?utm_source=showheroes&utm_medium=display&utm_campaign=megane_w10_13&utm_content=expander" class="cta" target="_blank" @click="track('book-en-provetur')">BOOK EN PRØVETUR</a>
    </div>
  </footer> 


</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderCarConfigurer from './components/ExpanderCarConfigurer.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      ExpanderCarConfigurer,
    },
    data() {
      return {
        resourcesId: 2055,
        resourcesVideoId: 2711,
        version: 1,
        mobile: false,
        currentId: 0,
        items: [
          {
            title: 'techno',
            desc1: '- høj opbevaringskonsol med armlæn',
            desc2: '- automatisk aircondition',
            colors: [
              [
                'Étoilé Sort',
                'etoile-sort',
              ],
              [
                'Étoilé Sort med Glacier Hvid tag',
                'etoile-sort-hvid-tag',
              ],
              [
                'Étoilé Sort med Schiste Grå tag',
                'etoile-sort-gra-tag',
              ],
              [
                'Flamme Rød',
                'flamme-rod',
              ],
              [
                'Flamme Rød med Étoilé Sort tag',
                'flamme-rod-sort-tag',
              ],
              [
                'Flamme Rød med Schiste Grå tag',
                'flamme-rod-gra-tag',
              ],
              [
                'Glacier Hvid',
                'glacier-hvid',
              ],
              [
                'Glacier Hvid med Étoilé Sort tag',
                'glacier-hvid-sort-tag',
              ],
              [
                'Glacier Hvid med Schiste Grå tag',
                'glacier-hvid-gra-tag',
              ],
              [
                'Nocturne Blå',
                'nocturne-bla',
              ],
              [
                'Nocturne Blå med Étoilé Sort tag',
                'nocturne-bla-sort-tag',
              ],
              [
                'Nocturne Blå med Glacier Hvid tag',
                'nocturne-bla-hvid-tag',
              ],
              [
                'Nocturne Blå med Schiste Grå tag',
                'nocturne-bla-gra-tag',
              ],
              [
                'Rafale Grå',
                'rafale-gra',
              ],
              [
                'Rafale Grå med Étoilé Sort tag',
                'rafale-gra-sort-tag',
              ],
              [
                'Rafale Grå med Glacier Hvid tag',
                'rafale-gra-hvid-tag',
              ],
              [
                'Schiste Grå',
                'schiste-gra',
              ],
              [
                'Schiste Grå med Ètoilé Sort tag',
                'schiste-gra-sort-tag',
              ],
              [
                'Schiste Grå med Glacier Hvid tag',
                'schiste-gra-hvid-tag',
              ],
            ]
          },
          {
            title: 'equilibre',
            desc1: '- 18" oston alufælge<br>- bakkamera',
            desc2: '- køretilstand ændres med styretøj<br>- smartphone-replikation',
            colors: [
              [
                'Étoilé Sort',
                'etoile-sort',
              ],
              [
                'Flamme Rød',
                'flamme-rod',
              ],
              [
                'Glacier Hvid',
                'glacier-hvid',
              ],
              [
                'Nocturne Blå',
                'nocturne-bla',
              ],
              [
                'Rafale Grå',
                'rafale-gra',
              ],
              [
                'Schiste Grå',
                'schiste-gra',
              ],
            ]
          },
          {
            title: 'iconic',
            desc1: '- 20" enos diamantslebne alufælge<br>- forkofanger med "F1 bøjle" i farven varm titanium<br>- 6 trins justerbare forsæder med massagefunktion',
            desc2: '+ lændestøtte<br>- 12" openR link multimediesystem: navigation, Google tjeneste, Harman Kardon premium, 9 højttalere',
            colors: [
              [
                'Étoilé Sort med Schiste Grå tag',
                'etoile-sort-gra-tag',
              ],
              [
                'Flamme Rød med Étoilé Sort tag',
                'flamme-rod-sort-tag',
              ],
              [
                'Glacier Hvid med Étoilé Sort tag',
                'glacier-hvid-sort-tag',
              ],
              [
                'Nocturne Blå med Étoilé Sort tag',
                'nocturne-bla-sort-tag',
              ],
              [
                'Rafale Grå med Étoilé Sort tag',
                'rafale-gra-sort-tag',
              ],
              [
                'Schiste Grå med Ètoilé Sort tag',
                'schiste-gra-sort-tag',
              ],
            ]
          }
        ]
      }
    },
    computed: {
      currentItem() {
        return this.items[this.currentId]
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
      isActive(id) {
        return this.currentId == id
      },
      setActive(id) {
        this.currentId = id
        this.track(`tab-${this.items[id].title}`)
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
    padding-bottom: 4.25rem;
    @include d {
      padding-bottom: 5rem;
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
    cursor: pointer;
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-heading {
    background: #000;
    color: #fff;
    .heading {
      position: relative;
      z-index: 1000;
      top: -.875rem;
      padding-left: 1.25rem;
      font-size: 1.5rem;
      line-height: 1.1875;
      font-weight: bold;
      @include d {
        top: -2.375rem;
        padding-left: 2.5rem;
        font-size: 2rem;
      }
    }
  }

  .container {
    margin: 1rem 1rem 5rem;
    @include d {
      margin: 2.5rem 6rem 5rem;
    }
  }

  .section-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include d {
      justify-content: center;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32%;
      height: 3rem;
      font-size: .875rem;
      font-weight: bold;
      background: #fff;
      box-shadow: 0 .25rem 1.5rem rgba(0, 0, 0, 0.07);
      transition: .15s;
      @include d {
        width: 12.5rem;
        height: 3.75rem;
        margin: 0 1.5rem;
        font-size: 1.25rem;
      }
      &:hover {
        background: #000;
        color: #fff;
      }
      &.active {
        font-size: 1rem;
        font-weight: normal;
        color: #fff;
        background: #000;
        @include d {
          font-size: 1.5rem;
        }
      }
    }
  }

  .section-info {
    margin: 1.5rem 0;
    @include d {
      display: flex;
      justify-content: space-between;
      margin: 2.25rem 0;
      .col {
        width: 27.5rem;
      }
    }
    .col {
      font-size: 1.125rem;
    }
  }

  .section-specs {
    display: flex;
    padding: 2.25rem 2.75rem;
    margin-top: 2.5rem;
    background: #fff;
    box-shadow: 0px .25rem 1.5rem rgba(0, 0, 0, 0.07);
    @include m {
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 2rem 1rem 1rem;
    }
    .item {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $color-2;
      text-align: center;
      @include m {
        width: 45%;
        margin-bottom: 2rem;
        .title, .note {
          font-size: .75rem;
        }
      }
    }
    @include d {
      .item + .item {
        margin-left: 5rem;
      }
    }
    .value {
      font-size: 2rem;
      font-weight: bold;
      @include d {
        font-size: 2.5rem;
      }
    }
    sup {
      font-size: 60%;
    }
  }

  .section-text {
    margin-bottom: 3.5rem;
    position: relative;
    @include d {
      margin-bottom: 12.5rem;
    }
    .text {
      padding: 2rem 2rem;
      background: #fff;
      box-shadow: 0px .25rem 1.5rem rgba(0, 0, 0, 0.07);
      @include d {
        position: absolute;
        top: 23rem;
        right: 2rem;
        width: 31.75rem;
        padding: 2.625rem 3.5rem 4.75rem;
      }
    }
    .heading {
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .cta-alt {
      padding: .75rem 1.5rem;
      display: inline-block;
      margin-top: 2.75rem;
      text-transform: uppercase;
      background: url('assets/cta.png') no-repeat center center / 100% 100%;
      transition: .15s;
      &:hover {
        background-color: #f8f8f8;
      }
    }
  }

  .section-offer {
    .maininfo {
      margin: 0 1.5rem 2.5rem;
      text-align: center;
      @include d {
        width: 31.75rem;
        margin: 0 auto 2.5rem;
      }
      .heading {
        margin-bottom: .75rem;
        font-size: 1.5rem;
        font-weight: bold;
        @include d {
          font-size: 2rem;
        }
      }
      p {
        font-size: 1rem;
        @include d {
          font-size: 1.25rem;
        }
      }
    }
    .items {
      padding: 0 1.5rem;
      @include d {
        display: flex;
        justify-content: space-between;
        padding: 0 3.25rem;
      }
    }
    .item {
      margin-bottom: 1rem;
      display: block;
      border: 1px solid #f4f4f4;
      @include d {
        width: 31.5%;
        margin-bottom: 0;
      }
      .title {
        padding: .5rem .5rem;
        font-size: .625rem;
        background: $color-1;
        text-align: center;
      }
      .image {
        padding: 0 .5rem 1rem;
      }
      .info {
        padding: 1rem;
        background: #d9d9d6;
      }
      .name {
        margin-bottom: .5rem;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.1;
      }
      .label {
        margin-bottom: .375rem;
        font-size: .625rem;
      }
      .price {
        display: flex;
        align-items: stretch;
      }
      .price-value {
        padding: .375rem;
        flex-grow: 1;
        background: #fff;
        strong {
          font-size: 1rem;
        }
        span {
          font-size: .75rem;
          color: $color-2;
          margin-left: .375rem;
        }
      }
      .price-cta {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        background: #000;
        font-weight: bold;
        font-size: .875rem;
        color: #fff;
        transition: .15s;
        &:hover {
          background: $color-1;
          color: #000;
        }
      }
      .table {
        margin-top: .25rem;
        th, td {
          padding-top: .25rem;
          font-size: .75rem;
          font-weight: normal;
        }
        th {
          padding-right: .25rem;
        }
      }
    }
    .ctas {
      margin: 2rem 0 4rem;
      text-align: center;
      @include d {
        margin: 4rem 0 7rem;
      }
    }
  }

  .cta {
    display: inline-block;
    padding: .875rem 1.875rem;
    background: $color-1;
    color: #000;
    font-size: 1rem;
    transition: .15s;
    &:hover {
      color: #fff;
      background: #000;
    }
  }

  .section-note {
    margin-top: 3rem;
    padding: 1.125rem;
    background: #E8E8E8;
    @include d {
      margin-top: 4rem;
    }
    p {
      font-size: .75rem;
      @include d {
        font-size: 1rem;
      }
    }
  }

  .section-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10000;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .875rem 1rem;
    @include d {
      padding: .875rem 3.5rem;
    }
    .logo {
      width: 2rem;
      @include d {
        width: 2.625rem;
      }
    }
    .cta {
      margin-left: 1.75rem;
      @include m {
        padding: .75rem;
        margin-left: .5rem;
        font-size: .75rem;
      }
      &:hover {
        background: #fff;
        color: $color-text;
      }
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

</style>
