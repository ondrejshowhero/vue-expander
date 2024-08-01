<template>

  <div class="container">
    <section class="section-video">
      <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="https://secure.adnxs.com/clktrb?id=808372&redir=https://ad.doubleclick.net/ddm/trackclk/N6344.3993854SHOWHEROES/B32304782.400006214;dc_trk_aid=591880771;dc_trk_cid=219733077;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" />
      <a href="https://secure.adnxs.com/clktrb?id=808372&redir=https://ad.doubleclick.net/ddm/trackclk/N6344.3993854SHOWHEROES/B32304782.400006214;dc_trk_aid=591880771;dc_trk_cid=219733077;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="cta">Stream nu</a>
    </section>
  </div>

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
    background: transparent;
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
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: transparent;
  }

  .section-video {
    position: relative;
    .cta {
      position: absolute;
      left: 50%;
      bottom: -13%;
      padding: .125rem .5rem;
      color: #fff;
      font-size: .75rem;
      font-weight: bold;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      border: 1px solid #fff;
      z-index: 10000;
      transform: translate(-50%, 0);
      @include d {
        bottom: -10%;
        padding: .25rem 1rem;
        font-size: 1.5rem;
        transition: .15s;
        border-width: .125rem;
        &:hover {
          background: #fff;
          color: #000;
        }
      }
    }
  }

</style>
