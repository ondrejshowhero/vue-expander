<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="https://ad.doubleclick.net/ddm/trackclk/N381402.2537101SHOWHEROES/B32392063.402624826;dc_trk_aid=594713157;dc_trk_cid=221285867;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" name="Main Video" />
  </section>

  <section class="section-main">
    <h1 class="heading">Hurra! <span>Vi fyller 30 år</span></h1>
    <p class="lead">
      I 30 år har vi försett Sverige med det senaste inom hemelektronik.<br>
      Det tycker vi är värt att firas! Välkommen in att ta del av fantastiska produkter till pressade jubileumspriser.
    </p>
  </section>

  <section class="section-tiles">
    <div class="image">
      <img src="@/assets/image-1.jpg">
    </div>
    <div class="text">
      <h1 class="heading">
        Kalasveckor
      </h1>
      <p>
        Just nu firar vi vårt 30-års jubileum med massa fantastiska jubileumsdeals till pressade priser. Vi&nbsp;fyller på med nya deals varje vecka.<br>
        Välkommen in!
      </p>
    </div>
  </section>
     
  <section class="section-banner">
    <a href="https://ad.doubleclick.net/ddm/trackclk/N381402.2537101SHOWHEROES/B32392063.402624826;dc_trk_aid=594713157;dc_trk_cid=221285867;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="link" data-name="Se alla deals">
      <img src="@/assets/image-2.jpg">
      <div class="content">
        <h1 class="heading">
          Se alla våra
          <span>jubileumsdeals</span>
        </h1>
        <div class="cta">Se alla deals</div>
      </div>
    </a>
  </section>

  <section class="section-info">
    <h1 class="heading">Länge leve tekniken</h1>
    <p>
       VHS-spelaren med omsorgsfullt ställd timer på kvällens film, uppstartsljudet av modemet och hushållets delade hemtelefon. Ja, de senaste 30 åren har bjudit på massa minnesvärda stunder med teknik, och vi är glada över att ha delat de med er. Då, nu och i framtiden.  
    </p>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N381402.2537101SHOWHEROES/B32392063.402624826;dc_trk_aid=594713157;dc_trk_cid=221286233;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="cta" data-name="Länge leve tekniken">Läs mer</a>
  </section>

  <section class="section-gallery">
    <article class="item">
      <img src="@/assets/image-3.jpg">
      <div class="content">
        <h1 class="heading">1994</h1>
        <p>
          Vi öppnade i Sverige,<br>
          med första varuhuset i Barkarby
        </p>
      </div>
    </article>
    <article class="item">
      <img src="@/assets/image-4.jpg">
      <div class="content">
        <h1 class="heading">2018</h1>
        <p>
          Vi utsågs till Årets Butikskedja<br>
          (Retail Awards)
        </p>
      </div>
    </article>
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a href="https://ad.doubleclick.net/ddm/trackclk/N381402.2537101SHOWHEROES/B32392063.402624826;dc_trk_aid=594713157;dc_trk_cid=221749947;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="logo" data-name="Logo">
        <img src="@/assets/logo.png">
      </a> 
      <a href="https://ad.doubleclick.net/ddm/trackclk/N381402.2537101SHOWHEROES/B32392063.402624826;dc_trk_aid=594713157;dc_trk_cid=221749947;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="cta" data-name="Läs mer">Läs mer</a>
    </div>
  </footer>


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
    --footer-height: 4rem;
    @include d {
      --footer-height: 6.25rem;
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
    line-height: 1.1;
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

  .heading {
    font-family: $font-headings;
    font-size: 2rem;
    line-height: 1;
    @include d {
      font-size: 3rem;
    }
  }

  .cta {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2rem;
    padding-top: .25rem;
    font-weight: 600;
    font-size: 1.25rem;
    color: $color-1;
    text-align: center;
    background: $color-3;
    border-radius: 2rem;
    transition: .15s;
    @include d {
      width: 10.75rem;
      height: 2.75rem;
      padding-top: .25rem;
      font-size: 1.75rem;
    }
    &:hover {
      background: #598a2c;
      color: #fff;
    }
  }

  .section-main {
    padding: 1.5rem 1.5rem 2rem;
    text-align: center;
    .heading {
      font-size: 3rem;
      span {
        white-space: nowrap;
      }
      @include d {
        font-size: 4rem;
      }
    }
    .lead {
      max-width: 40rem;
      margin: 0 auto;
      font-size: 1.25rem;
      @include d {
        font-size: 1.5rem;
      }
    }
  }

  .section-tiles {
    background: $color-2;
    @include d {
      display: flex;
      align-items: center;
    }
    .image {
      @include d {
        width: 50%;
      }
    }
    .text {
      padding: 4rem 1.5rem;
      text-align: center;
      @include d {
        width: 50%;
        padding-left: 2rem;
        padding-right: 2.5rem;
        text-align: left;
      }
      p {
        font-size: 1.25rem;
        @include d {
          font-size: 1.5rem;
        }
      }
    }
  }

  .section-banner {
    position: relative;
    .content {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      padding: 1rem 1rem;
      @include d {
        padding: 2.5rem 3rem;
      }
    }
    .heading {
      margin-bottom: 1.25rem;
      font-size: 2.25rem;
      @include d {
        font-size: 5.75rem;
      }
      span {
        display: block;
        color: $color-3;
      }
    }
  }

  .section-info {
    padding: 2rem 1.5rem 2rem;
    text-align: center;
    background: $color-2;
    .heading {
      font-size: 2rem;
      @include d {
        font-size: 3rem;
        margin-bottom: -.125rem;
      }
    }
    p {
      max-width: 44rem;
      margin: 0 auto 1rem;
      font-size: 1.5rem;
    }
  }

  .section-gallery {
    background: $color-2;
    @include d {
      display: flex;
      justify-content: space-between;
    }
    .item {
      position: relative;
      @include d {
        width: 49.75%;
      }
      img {
        max-width: none;
        width: 100%;
      }
      .content {
        @include cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(#000, .5);
        text-align: center;
      }
      .heading {
        color: $color-3;
        font-size: 3rem;
        @include d {
          margin-bottom: -.5rem;
          font-size: 5rem;
        }
      }
      p {
        font-size: 1.5rem;
        @include d {
          font-size: 2rem;
        }
      }
    }
  }

  .section-footer {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--footer-height);
      padding: 0 1.5rem;
      background: $color-1;
      @include d {
        padding: 0 2.5rem 0 3.75rem;
      }
    }
    .logo {
      width: 9rem;
      @include d {
        width: 17.75rem;
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
