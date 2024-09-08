<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="https://www.spies.dk/de-kanariske-oer/hoteller" name="Main Video" />
  </section>

  <section class="section-main">
    <div class="logo">
      <img src="@/assets/ving.png">
    </div>
    <h1 class="heading">Oplev Spies-effekten på De&nbsp;Kanariske Øer</h1>
    <p class="lead">
      En rigtig god ferie gør noget magisk ved os.<br>
      Nøglen til den magi? En bekymringsfri rejse.<br>
      Når nogen har løst alt det besværlige for dig.<br>
      Det kalder vi for Spies-effekten.
    </p>
  </section>

  <section class="section-gallery">
    <div class="intro">
      <p class="lead">
        De Kanariske Øer har nogle af vores bedste hoteller for dig, der rejser uden børn. Voksenhotellerne har en nedre aldersgrænse, så du bedre kan nyde din ferie i fred og ro.
      </p>
    </div>
    <ExpanderGallery />
    <div class="info">
      <h1 class="heading">Sunprime Hotels</h1>
      <p>
        Sunprime er vores egne koncepthoteller kun for voksne.<br>
        Her kan du nyde godt af skønne spabehandlinger og lækker mad i fredelige omgivelser. Hotellerne har en aldersgrænse på 16 år.
      </p>
    </div>
  </section>
     
  <section class="section-slider">
    <h1 class="heading">Flere hoteltips til dig, <span>der rejser uden børn</span></h1>
    <ExpanderSlider />
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a href="https://www.spies.dk/de-kanariske-oer/hoteller" target="_blank" class="logo" data-name="Logo">
        <img src="@/assets/ving-w.svg">
      </a> 
      <a href="https://www.spies.dk/de-kanariske-oer/hoteller" target="_blank" class="cta" data-name="Boka nu">BOKA NU</a>
    </div>
  </footer>


</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderGallery from './components/ExpanderGallery.vue'
  import ExpanderSlider from './components/ExpanderSlider.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      ExpanderGallery,
      ExpanderSlider,
    },
    data() {
      return {
        mobile: false,
        videoFile: '1080.mp4'
      }
    },
    created() {
      // if (window.innerWidth < 480) {
      //   this.mobile = true
      //   this.videofile = '480.mp4'
      // }
    },
    methods: {
      track(label, category) {
        category = category || 'Click'
        window.customTrack(category, 'interaction', label)
      }
    }
  }
</script>

<style lang="scss">
  @import "node_modules/minireset.css/minireset";
  @import '@/scss/fonts.scss';
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  :root {
    --footer-height: 6rem;
    @include d {
      --footer-height: 10rem;
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

  .section-main {
    padding: 4.75rem 1.5rem 5rem;
    text-align: center;
    background: #fdfdfb url('@/assets/bg.jpg') no-repeat center center / cover;
    @include d {
      background: #fdfdfb url('@/assets/bg.jpg') no-repeat center bottom / 100% auto;
    }
    .logo {
      display: block;
      width: 8.25rem;
      margin: 0 auto 3.5rem;
      @include d {
        width: 13rem;
        margin: 0 auto 2.25rem;
      }
    }
    .heading {
      margin-bottom: 1.75rem;
      font-family: $font-2;
      font-size: 1.625rem;
      @include d {
        font-size: 2.25rem;
      }
    }
    .lead {
      font-size: 1.125rem;
      max-width: 40rem;
      margin: 0 auto;
      @include m {
        br {
          display: none;
        }
      }
      @include d {
        font-size: 1.5rem;
      }
    }
  }

  .section-gallery {
    .intro {
      padding: 2.5rem 1.5rem;
      background: #fff;
      .lead {
        font-size: 1.125rem;
        max-width: 40rem;
        margin: 0 auto;
        text-align: center;
        @include d {
          font-size: 1.5rem;
        }
      }
    }
    .info {
      padding: 2.75rem 1.5rem;
      @include d {
        padding: 3rem 4.75rem;
      }
      .heading {
        margin-bottom: .5rem;
        font-family: $font-2;
        font-size: 1.625rem;
        @include d {
          margin-bottom: 1rem;
          font-size: 2.25rem;
        }
      }
      p {
        font-size: 1.125rem;
        max-width: 41rem;
        @include d {
          font-size: 1.5rem;
        }
      }
    }
  }

  .section-slider {
    padding: .625rem 1.5rem 4.5rem;
    background: #fff;
    box-shadow: .125rem .125rem .625rem 0rem rgba(0, 0, 0, 0.10);
    @include d {
      padding: 2rem 4.75rem 5rem;
    }
    .heading {
      margin-bottom: 1rem;
      font-family: $font-2;
      font-size: 1.625rem;
      @include d {
        font-size: 2.25rem;
      }
      span {
        white-space: nowrap;
      }
    }
  }

  .section-footer {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--footer-height);
      padding: 2rem 1.25rem 0;
      background: url('@/assets/bg-footer-mobile.png') no-repeat center bottom / 100% auto;
      @include d {
        padding: 5rem 3.5rem 0;
        background: url('@/assets/bg-footer.png') no-repeat center bottom / 100% auto;
      }
    }
    .logo {
      width: 8.25rem;
      @include d {
        width: 10rem;
      }
    }
    .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10.125rem;
      height: 2.625rem;
      padding: .25rem .25rem 0;
      font-family: $font-3;
      font-size: 1.5rem;
      border-radius: 3rem;
      color: $color-1;
      background: #fff;
      transition: .15s;
      @include d {
        width: 13.625rem;
        height: 3.625rem;
        padding: .25rem .25rem 0;
        font-size: 1.875rem;
      }
      &:hover {
        font-weight: bold;
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

</style>
