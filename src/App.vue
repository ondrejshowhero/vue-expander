<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :autoplay="true" url="https://ad.doubleclick.net/ddm/trackclk/N6344.3993854SHOWHEROES/B32418753.400181035;dc_trk_aid=592303272;dc_trk_cid=219589835;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" />
  </section>

  <section class="section-main">
    <picture>
      <source :srcset="getDesktopImage()" media="(min-width: 480px)" />
      <img :src="getMobileImage()">
    </picture>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N6344.3993854SHOWHEROES/B32418753.400181035;dc_trk_aid=592303272;dc_trk_cid=219589835;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="link"></a>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N6344.3993854SHOWHEROES/B32418753.400181035;dc_trk_aid=592303272;dc_trk_cid=219589835;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="cta"><img src="@/assets/cta.png" alt="Tilmeld dig"></a>
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
        mobile: false,
        // videoFile: '1080.mp4',
        version: 'post',
      }
    },
    computed: {
      videoFile() {
        return `1080-${this.version}.mp4`
      }
    },
    methods: {
      getDesktopImage() {
        return require(`@/assets/${this.version}/desktop.png`)
      },
      getMobileImage() {
        return require(`@/assets/${this.version}/mobile.png`)
      }
    },
    created() {
      // if (window.innerWidth < 480) {
      //   this.mobile = true
      //   this.videofile = '480.mp4'
      // }
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
    background: url('@/assets/bg.jpg') no-repeat center center / auto 150%;
    animation: bgmobile 5s ease-in-out 0s infinite alternate forwards;
    @include d {
      background-size: 150% auto;
      animation: bg 5s ease-in-out 0s infinite alternate forwards;
    }
    .link {
      @include cover;
      z-index: 5;
    }
    .cta {
      display: none;
      @include d {
        display: block;
        position: absolute;
        left: 3.5rem;
        bottom: 6rem;
        width: 13rem;
        z-index: 10;
        transition: .15s;
        &:hover {
          opacity: .8;
        }
      }
    }
  }

  @keyframes bgmobile {
    from {
      background-size: auto 150%;
    }
    to {
      background-size: auto 110%;
    }
  }

  @keyframes bg {
    from {
      background-size: 150% auto;
    }
    to {
      background-size: 110% auto;
    }
  }

</style>
