<template>

  <header class="section-header">
    <a href="https://secure.adnxs.com/clktrb?id=808720&redir=https://ad.doubleclick.net/ddm/trackclk/N3018.3993854SHOWHEROES/B32474142.401241925;dc_trk_aid=593378376;dc_trk_cid=220238920;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" rel="noopener noreferrer" class="logo">
      <img src="@/assets/synoptik.png" alt="Synoptik">
    </a>
  </header>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="https://secure.adnxs.com/clktrb?id=808720&redir=https://ad.doubleclick.net/ddm/trackclk/N3018.3993854SHOWHEROES/B32474142.401241925;dc_trk_aid=593378376;dc_trk_cid=220238920;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" />
  </section>

  <section class="section-main">
    <a href="https://secure.adnxs.com/clktrb?id=808720&redir=https://ad.doubleclick.net/ddm/trackclk/N3018.3993854SHOWHEROES/B32474142.401241925;dc_trk_aid=593378376;dc_trk_cid=220238920;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" rel="noopener noreferrer">
      <img src="@/assets/campaign.jpg" alt="Briller på abonnement">
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
        mobile: false,
        videoFile: '1080.mp4'
      }
    },
    created() {
      if (window.innerWidth < 480) {
        this.mobile = true
        this.videofile = '480.mp4'
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

  .section-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem 3.25rem;
    @include d {
      padding: 1.5rem 1rem 2rem;
    }
    .logo {
      width: 42%;
      @include d {
        width: 25.5rem;
      }
    }
  }

  .section-main {
    a {
      display: block;
      @include d {
        img {
          width: 67.125rem;
          margin: 0 auto;
        }
      }
    }
  }

</style>
