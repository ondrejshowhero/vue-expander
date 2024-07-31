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
        version: 'post',
        url: 'https://ad.doubleclick.net/ddm/trackclk/N1218306.3993854SHOWHEROES/B32381922.399662644;dc_trk_aid=591774513;dc_trk_cid=219602784;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1'
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
        this.url = 'https://ad.doubleclick.net/ddm/trackclk/N1218306.3993854SHOWHEROES/B32381922.400092153;dc_trk_aid=591771270;dc_trk_cid=219049825;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1'
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
