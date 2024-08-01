<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :autoplay="true" :url="url" />
  </section>

  <section class="section-main">
    <a :href="url" target="_blank" class="link">
      <picture>
        <source :srcset="imageDesktop" media="(min-width: 480px)" />
        <img :src="imageMobile" />
      </picture>
    </a>
    <a :href="url" target="_blank" class="cta">
      <img src="@/assets/cta.png" alt="Köp biljetter">
    </a>
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
        version: 'pre',
        url: 'https://secure.adnxs.com/clktrb?id=808370&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1218306.3993854SHOWHEROES%2FB32381922.399662644%3Bdc_trk_aid%3D591774513%3Bdc_trk_cid%3D219602784%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1'
      }
    },
    computed: {
      imageDesktop() {
        return require(`@/assets/poster-${this.version}-desktop.jpg`)
      },
      imageMobile() {
        return require(`@/assets/poster-${this.version}-mobile.jpg`)
      },
      videoFile() {
        return `${this.version}.mp4`
      },
    },
    created() {
      if (window.innerWidth < 480) {
        this.url = 'https://secure.adnxs.com/clktrb?id=808371&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1218306.3993854SHOWHEROES%2FB32381922.400092153%3Bdc_trk_aid%3D591771270%3Bdc_trk_cid%3D219049825%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1'
      }
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
    position: relative;
    .link {
      display: block;
    }
    .cta {
      position: absolute;
      left: 50%;
      bottom: 5.185vw;
      width: 31.481vw;
      transform: translate(-50%, 0);
      @include d {
        left: 66.51vw;
        transform: none;
        bottom: 8.541vw;
        width: 17.7vw;
        transition: .15s;
        &:hover {
          background: rgba(#fff, .2);
        }
      }
    }
  }

</style>
