<template>

  <section class="section-video">
    <ExpanderVideo :videoId="videoId" :mobile="mobile" />
  </section>

  <section class="section-banner banner-1">
    <img src="@/assets/banner-1.jpg">
  </section>

  <section class="section-main">
    <h1 class="heading">
      Mennäänkö saunaan?
      <span>Ska vi gå och basta?</span>
    </h1>
    <p class="lead">
      Kun suomalainen ja ruotsalainen menivät saunaan, syntyi aivan ihana mallisto. IKEA ja Marimekko toivat yhteiseen BASTUA-mallistoonsa muun muassa kauniita tekstiilejä, astioita ja kalusteita.
    </p>
    <p class="lead lead-2">
      BASTUA-mallisto IKEA-tavarataloissa 
      ja&nbsp;verkkokaupassa 1.3. 
    </p>
    <p class="note">
      Malliston tuotteita saatavilla rajoitetusti.
    </p>
    <a href="https://www.ikea.com/fi/fi/new/bastua-mallisto-rohkeutta-iloa-ja-hyvaeae-oloa-pub7b1d64c0" target="_blank" class="cta" @click="track('tervetuloa-saunaan')">TERVETULOA SAUNAAN &raquo;</a>
  </section>

  <section class="section-slider">
    <ExpanderShowcase @track="track" />
  </section>

  <section class="section-info">
    <p class="lead">
      ”Yhteistyö Marimekon kanssa tuntui luonnolliselta valinnalta, sillä jaamme halun auttaa ihmisiä rakentamaan parempaa arkea kotona – IKEA BASTUA -mallistossa se alkaa keskittymällä hyvinvointiin.”
    </p>
    <p class="note">
      Henrik Most, luova johtaja, IKEA of Sweden
    </p>
  </section>

  <section class="section-slider">
    <ExpanderSlider @track="track" />
  </section>

  <section class="section-cols">
    <div class="text">
      <h2 class="title">
        Voita<br>
        BASTUA-tuotteita
      </h2>
      <p>
        Pelaa muistipeliä
        ja voita itsellesi
        malliston tuotteita.
      </p>
      <a href="https://www.ikea.com/fi/fi/campaigns/ikea-peli-pub54c6d130" target="_blank" class="cta" @click="track('pelaa-nyt')">PELAA NYT  &raquo;</a>
    </div>
    <div class="image">
      <img src="@/assets/image-1.jpg">
    </div>
  </section>
  
  <section class="section-banner">
    <img src="@/assets/image-2.jpg">
  </section>

  <section class="section-banner banner-2">
    <img src="@/assets/banner-2.jpg">
  </section>



</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderSlider from './components/ExpanderSlider.vue'
  import ExpanderShowcase from './components/ExpanderShowcase.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      ExpanderSlider,
      ExpanderShowcase,
    },
    data() {
      return {
        resourcesId: 2041,
        videoId: 2631,
        version: 1,
        mobile: false
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
  @import '@/scss/fonts.scss';
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  html {
    font-family: $font, sans-serif;
    font-size: 16px;
    font-weight: $weight;
    color: $color-text;
    text-align: center;
    line-height: 1.18;
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

  .cta {
    display: inline-block;
    padding: .5rem 1.5rem;
    font-size: .875rem;
    font-weight: bold;
    color: #fff;
    background: $color-1;
    transition: .15s;
    @include d {
      padding: .75rem 2.125rem;
      font-size: 2rem;
    }
    &:hover {
      background: $color-3;
    }
  }

  .section-main {
    padding: 2rem 2rem 2.5rem;
    background: $color-2;
    @include d {
      padding: 5rem 7.5rem;
    }
    .heading {
      padding: 0 10%;
      margin-bottom: 2rem;
      font-weight: bold;
      font-size: 1.625rem;
      line-height: 1;
      @include d {
        padding: 0;
        font-size: 3.75rem;
      }
      span {
        display: block;
        @include m {
          margin-top: 1rem;
        }
      }
    }
    .lead {
      font-size: 1rem;
      @include d {
        font-size: 2rem;
      }
    }
    .lead-2 {
      margin-top: 2rem;
      font-weight: bold;
    }
    .note {
      margin-top: 1rem;
      font-size: .75rem;
      @include d {
        font-size: 1.125rem;
      }
    }
    .cta {
      margin-top: 2.5rem;
    }
  }

  .section-info {
    padding: 2.5rem 2rem;
    background: $color-3;
    @include d {
      padding: 5rem 8.5rem;
    }
    .lead {
      font-weight: bold;
      font-size: 1rem;
      @include d {
        font-size: 2rem;
      }
    }
    .note {
      margin-top: 1rem;
      font-size: .75rem;
      font-weight: bold;
      @include d {
        margin-top: 1.5rem;
        font-size: 1.5rem;
      }
    }
  }

  .section-cols {
    @include d {
      display: flex;
      .text,
      .image {
        width: 50%;
      }
    }
    .text {
      color: #000;
      background: $color-4;
      @include m {
        padding: 2rem 2.5rem;
      }
      @include d {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-size: 1.625rem;
        font-weight: bold;
        @include d {
          font-size: 2.875rem;
        }
      }
      p {
        margin: 1rem 1.5rem 2.5rem;
        font-size: 1rem;
        @include d {
          margin: 1rem 7rem 2.5rem;
          font-size: 2.875rem;
        }
      }
    }
  }

  .banner-1 {
    overflow: hidden;
    img {
      transform: scale(1.5);
    }
  }
  .banner-2 {
    overflow: hidden;
    img {
      transform: scale(1.75);
    }
  }

</style>
