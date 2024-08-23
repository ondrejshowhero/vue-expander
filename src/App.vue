<template>

  <header class="section-header">
    <a href="https://ad.doubleclick.net/ddm/trackclk/N1969113.2537101SHOWHEROES/B32343376.401754109;dc_trk_aid=593772080;dc_trk_cid=220724984;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=%24%7bGDPR%7d;gdpr_consent=%24%7bGDPR_CONSENT_755%7d;ltd=;dc_tdv=1" target="_blank" class="logo" data-name="Logo">
      <img src="@/assets/norlys.png" alt="Norlys">
    </a>
  </header>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="https://ad.doubleclick.net/ddm/trackclk/N1969113.2537101SHOWHEROES/B32343376.401754109;dc_trk_aid=593772080;dc_trk_cid=220724984;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=%24%7bGDPR%7d;gdpr_consent=%24%7bGDPR_CONSENT_755%7d;ltd=;dc_tdv=1" />
  </section>

  <section class="section-main">
    <h1 class="heading">
      Beskyt din virksomhed med<br>
      Erhvervsinternet Sikker
    </h1>
    <p class="lead">
      Det er ikke længere nok med hurtigt og stabilt internet – det skal også være sikkert.
      Med Erhvervsinternet Sikker fra Norlys får du stabilt internet med integreret it-
      sikkerhed, der gør det enkelt for dig at beskytte din virksomhed mod den stigende
      cyberkriminalitet. Selvfølgelig med en hastighed på 1 Gbit.
    </p>
    <ul class="usp">
      <li class="item">
        <img src="@/assets/icons/internet.png">
        Hurtig forbindelse
      </li>
      <li class="item">
        <img src="@/assets/icons/globus.png">
        Høj sikkerhed
      </li>
      <li class="item">
        <img src="@/assets/icons/price.png">
        Fast pris
      </li>
      <li class="item">
        <img src="@/assets/icons/men.png">
        Skalerbar løsning
      </li>
    </ul>
    <div class="actions">
      <a href="https://ad.doubleclick.net/ddm/trackclk/N1969113.2537101SHOWHEROES/B32343376.401754109;dc_trk_aid=593772080;dc_trk_cid=220724984;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=%24%7bGDPR%7d;gdpr_consent=%24%7bGDPR_CONSENT_755%7d;ltd=;dc_tdv=1" target="_blank" class="cta" data-name="Læs mere">Læs mere</a>
    </div>
  </section>

  <section class="section-content">
    <article class="item">
      <div class="text">
        <h1 class="title">Virksomhedens internet skal bare virke. Men det skal også modvirke.</h1>
        <p>
          Med Erhvervsinternet Sikker får du både serviceaftale, sikkerhedspakke, professionel firewall og mulighed for cyber- og netbanksforsikring i en integreret løsning. Det er sikkerhed gjort enkelt. Bliv klogere på Erhvervsinternet Sikker.
        </p>
      </div>
      <div class="image">
        <img src="@/assets/image-1.jpg">
      </div>
    </article>
    <article class="item">
      <div class="text">
        <h1 class="title">Har du brug for rådgivning?</h1>
        <p>
          Har du spørgsmål til, hvordan Erhvervsinternet Sikker kan hjælpe med at optimere din virksomheds sikkerhed? Kontakt os, og bliv klogere på sikkert internet til din virksomhed.
        </p>
        <a href="https://ad.doubleclick.net/ddm/trackclk/N1969113.2537101SHOWHEROES/B32343376.401754109;dc_trk_aid=594115870;dc_trk_cid=220881997;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=%24%7bGDPR%7d;gdpr_consent=%24%7bGDPR_CONSENT_755%7d;ltd=;dc_tdv=1" target="_blank" class="cta" data-name="Ring mig op">Ring mig op</a>
      </div>
      <div class="image">
        <img src="@/assets/image-2.jpg">
      </div>
    </article>
    <div class="actions">
      <a href="https://ad.doubleclick.net/ddm/trackclk/N1969113.2537101SHOWHEROES/B32343376.401754109;dc_trk_aid=593772080;dc_trk_cid=220724984;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=%24%7bGDPR%7d;gdpr_consent=%24%7bGDPR_CONSENT_755%7d;ltd=;dc_tdv=1" target="_blank" class="cta" data-name="Bestil Erhvervsinternet her">Bestil Erhvervsinternet her</a>
    </div>
  </section>

  <footer class="section-footer sticky">
    <a href="https://ad.doubleclick.net/ddm/trackclk/N1969113.2537101SHOWHEROES/B32343376.401754109;dc_trk_aid=593772080;dc_trk_cid=220724984;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=%24%7bGDPR%7d;gdpr_consent=%24%7bGDPR_CONSENT_755%7d;ltd=;dc_tdv=1" target="_blank" class="logo" data-name="Logo">
      <img src="@/assets/norlys.png">
    </a> 
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

  .cta {
    display: inline-block;
    padding: .875rem 2.875rem;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3;
    letter-spacing: 0.0625rem;
    background: $color-2;
    border-radius: 3rem;
    transition: .3s;
    &:hover {
      box-shadow: 0 1rem 1rem rgba(#000, .3);
    }
  }

  .section-header {
    padding: .5rem;
    display: flex;
    justify-content: center;
    @include d {
      padding: 1rem;
    }
    .logo {
      width: 6rem;
      @include d {
        width: 12.5rem;
      }
    }
  }

  .section-main {
    padding: 2.5rem 1rem;
    text-align: center;
    background: $color-1;
    @include d {
      padding: 5.5rem 1.5rem;
    }
    .heading {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.5;
      @include d {
        margin-bottom: 2rem;
        font-size: 2rem;
        line-height: 1.5;
      }
    }
    .lead {
      max-width: 41rem;
      margin: 0 auto 3.25rem;
      line-height: 1.6875;
    }
    .usp {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 50%;
        margin-bottom: 2rem;
        font-size: .9375rem;
        text-align: center;
        @include d {
          width: auto;
          flex: 1 0;
          margin-bottom: 0;
        }
        img {
          margin: 0 auto .75rem;
        }
      }
    }
    .actions {
      padding-top: 1.5rem;
      display: flex;
      justify-content: center;
      @include d {
        padding-top: 3.5rem;
      }
    }

  }

  .section-content {
    padding: 2.5rem 1.5rem;
    @include d {
      padding: 5.5rem 5.75rem;
    }
    .item {
      margin-bottom: 2.5rem;
      @include d {
        display: flex;
        margin-bottom: 5.5rem;
        &:nth-child(even) {
          flex-direction: row-reverse;
          .text {
            padding: 0 0 0 3.5rem;
          }
        }
      }
    }
    .text, .image {
      flex: 1 0;
    }
    .text {
      position: relative;
      padding-right: 3.25rem;
      .title {
        margin-bottom: 1.25rem;
        font-size: 1.5rem;
        font-weight: 700;
        @include d {
          margin-bottom: 1.75rem;
          font-size: 2rem;
        }
      }
      p {
        line-height: 1.6875;
      }
      .cta {
        margin-top: 1rem;
        @include d {
          position: absolute;
          left: 3.25rem;
          bottom: 0;
          margin-top: 0;
        }
      }
    }
    .image {
      margin-top: 1.5rem;
      @include d {
        margin-top: 0;
      }
    }
    .actions {
      display: flex;
      justify-content: center;
    }
  }

  .section-footer {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0;
    background: $color-1;
    .logo {
      width: 7.4375rem;
    }
  }

</style>
