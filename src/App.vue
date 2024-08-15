<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :autoplay="true" :url="theUrl" />
  </section>

  <section class="section-main">
    <div class="text">
      <h1 class="heading">
        En <em>gave</em> som ingen anden<br>
        Til enhver anledning
      </h1>
      <p class="lead">
        En håndmalet gave fra Royal Copenhagen er noget helt særligt. Elegant indpakket i blå og straks genkendelig. Den bærer århundreders dansk designhistorie indeni og kommer til at skabe glæde hver eneste dag.
      </p>
    </div>
    <div class="image">
      <img src="@/assets/image-header.jpg">
    </div>
  </section>

  <section class="section-tiles">

    <div class="tile">
      <div class="text">
        <h2 class="heading">
          Glæd dig til 
          <em>uforglemmelige</em> stunder
        </h2>
        <p>
          Tilføj dine favoritter til din ønskeliste og lad sirlige håndmalede penselstrøg tilføre en unik skønhed til dit hjem.
        </p>
        <a :href="theUrl" target="_blank" class="cta">FÅ INSPIRATION</a>
      </div>
      <div class="image">
        <img src="@/assets/image-1.jpg">
      </div>
    </div>

    <div class="tile">
      <div class="text">
        <h2 class="heading">
          Giv en gave, der skaber <em>minder</em>
        </h2>
        <p>
          Uanset om det er en fødselsdag, en årsdag eller enhver anden særlig begivenhed, vil et stykker Royal Copenhagen-porcelæn være en gave, der skaber glæde og minder for livet.
        </p>
      </div>
      <div class="image">
        <img src="@/assets/image-2.jpg">
      </div>
    </div>

    <div class="tile">
      <div class="text">
        <h2 class="heading">
          Til <em>enhver</em> anledning
        </h2>
        <p>
          Livets små og store øjeblikke fortjener at blive fejret. Inviter på en uforglemmelig dag omgivet af et festligt bord dækket med Royal Copenhagens blåmalede stel. Smukt til enhver anledning.
        </p>
        <a :href="theUrl" target="_blank" class="cta">FÅ INSPIRATION</a>
      </div>
      <div class="image">
        <img src="@/assets/image-3.jpg">
      </div>
    </div>

    <div class="tile">
      <div class="text">
        <h2 class="heading">Den ekstra detalje</h2>
        <p>
          Royal Copenhagens gaveindpakning er næsten lige så særlig som porcelænet selv. Inspireret af origamikunst, udfolder indpakningspapiret på en Royal Copenhagen-gave sig på smukkeste vis som en blomst, når båndet løsnes.
        </p>
      </div>
      <div class="image">
        <img src="@/assets/image-4.jpg">
      </div>
    </div>

  </section>

  <div class="bg">
     
    <section class="section-slider">
      <ExpanderScroller :mobile="mobile" />
    </section>

    <footer class="section-footer">
      <div class="container">
        <a :href="theUrl" target="_blank" class="logo">
          <img src="@/assets/logo.png">
        </a> 
      </div>
    </footer>

  </div>

</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderScroller from './components/ExpanderScroller.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      ExpanderScroller,
    },
    data() {
      return {
        mobile: true,
        videoFile: '1080.mp4',
        theUrl: 'https://secure.adnxs.com/clktrb?id=803853&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584015636;dc_trk_cid=213355345;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1'
      }
    },
    created() {
      if (this.mobile)
        this.theUrl = 'https://secure.adnxs.com/clktrb?id=803857&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584016725;dc_trk_cid=213493649;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1'
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

  .cta {
    display: inline-block;
    padding: 1.125rem 4.375rem;
    background: $color-1;
    font-weight: bold;
    color: #fff;
    &:hover {
      background: #19395b;
    }
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .heading {
    font-family: $font-headings;
    font-weight: bold;
    font-size: 1.25rem;
    @include d {
      font-size: 1.875rem;
    }
  }

  .section-main {
    padding: 2.75rem 0 0;
    text-align: center;
    .text {
      position: relative;
      z-index: 2;
      .heading {
        width: 24rem;
        max-width: 90%;
        margin: 0 auto 1.125rem;
        font-size: 1.75rem;
        @include d {
          font-size: 2.125rem;
        }
      }
      .lead {
        width: 35.875rem;
        max-width: 90%;
        margin: 0 auto;
        font-size: 1.125rem;
        @include d {
          font-size: 1.3125rem;
        }
      }
    }
    .image {
      position: relative;
      margin-top: -2rem;
      @include d {
        margin-top: -5.75rem;
      }
      &::after {
        content: '';
        @include cover;
        background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.61) 28.74%, rgba(255, 255, 255, 0.00) 64.66%);
      }
    }
  }

  .section-tiles {
    .tile {
      @include d {
        display: flex;
        align-items: center;
        div {
          flex: 1 0;
        }
      }
      .text {
        padding: 2rem 1.5rem;
        text-align: right;
        @include d {
          padding: 0 0 0 6.25rem;
          text-align: left;
        }
        .heading,
        p {
          max-width: 21.875rem;
        }
        .heading {
          margin-bottom: 1rem;
          @include d {
            margin-bottom: 1.875rem;
          }
        }
        p {
          font-size: 1.125rem;
          @include d {
            font-size: 1.25rem;
          }
        }
        .cta {
          margin-top: 1.875rem;
        }
      }
      &:nth-child(odd) {
        flex-direction: row-reverse;
        .text {
          text-align: left;
          @include d {
            padding: 0 0 0 5.625rem;
          }
        }
      }
    }
  }

  .bg {
    padding: 5.875rem 0 0;
    background: url('@/assets/image-footer.jpg') no-repeat center center / cover;
  }

  .section-footer {
    .container {
      display: flex;
      justify-content: center;
      padding: 3rem 1rem;
    }
    .logo {
      width: 12rem;
      @include d {
        width: 15.25rem;
      }
    }
  }

</style>
