<template>

  <div class="topbar">
    <img src="@/assets/car.svg">
    <p>
      I samarbete med Volvo Cars sedan 1959
    </p>
  </div>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="https://www.volvia.se/" />
  </section>

  <section class="section-main">
    <h1 class="heading">Vi finns där när du behöver oss som mest</h1>
    <p class="lead">
      På Volvia vet vi hur viktigt det är med en trygg bilförsäkring. Oavsett om du råkat ut för ett stenskott, en krock eller andra smällar längs med vägen får du alltid snabb och kunnig hjälp.
    </p>
    <div class="trustpilot">
      <div class="trustpilot-widget" data-locale="sv-SE" data-template-id="5418052cfbfb950d88702476" data-businessunit-id="598a7ecd0000ff0005a872c6" data-style-height="30px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-review-languages="sv">
        <a href="https://se.trustpilot.com/review/www.volvia.se" target="_blank" rel="noopener">Trustpilot</a>
      </div>
      <div class="trustpilot-widget" data-locale="sv-SE" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="598a7ecd0000ff0005a872c6" data-style-height="24px" data-style-width="100%" data-theme="light" data-style-alignment="center">
        <a href="https://se.trustpilot.com/review/www.volvia.se" target="_blank" rel="noopener">Trustpilot</a>
      </div>
    </div>
  </section>

  <section class="section-usp">
    <article class="item">
      <h1 class="title">Personlig hjälp</h1>
      <p>
        Om du råkar ut för en skada finns vi där för dig – dygnet runt.
      </p>
    </article>
    <article class="item">
      <h1 class="title">Snabba besked</h1>
      <p>
        De flesta får svar på sina skadeärenden inom 24 timmar.
      </p>
    </article>
    <article class="item">
      <h1 class="title">Extra trygghet</h1>
      <p>
        Marknadens längsta maskin- och elektronikskydd när det gäller mil.
      </p>
    </article>
  </section>

  <section class="section-info">
    <h2 class="heading">Därför har över 300 000 Volvoägare valt oss</h2>
    <div class="items">
      <a href="https://www.volvia.se/bilforsakring/kundfordelar" target="_blank" class="item">
        <article>
          <div class="image">
            <img src="@/assets/image-1.jpg">
          </div>
          <div class="text">
            <h3 class="title">
              Anpassad försäkring för Volvo
            </h3>
            <p>
              Du får många fördelar med märkesförsäkring för Volvo. Bland annat Volvo originaldelar och auktoriserade Volvoverkstäder vid reparation för att bibehålla kvalitén.
            </p>
            <span class="link">
              Läs mer om dina fördelar
              <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
            </span>
          </div>
        </article>
      </a>
      <a href="https://www.volvia.se/bilforsakring/kundfordelar/alltid-nara-dig" target="_blank" class="item">
        <article class="item">
          <div class="image">
            <img src="@/assets/image-2.jpg">
          </div>
          <div class="text">
            <h3 class="title">
              Snabb och kunnig hjälp
            </h3>
            <p>
              Var du än befinner dig, finns vi på Volvia alltid med dig som en trygg partner. Hos oss får du snabb och kunnig hjälp om du råkar ut för en skada – dygnet runt.
            </p>
            <span class="link">
              Så här hjälper vi dig
              <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
            </span>
          </div>
        </article>
      </a>
      <a href="https://www.volvia.se/vid-skada" target="_blank" class="item">
        <article class="item">
          <div class="image">
            <img src="@/assets/image-3.jpg">
          </div>
          <div class="text">
            <h3 class="title">
              Enkel skadeanmälan där du är
            </h3>
            <p>
              Hos oss får du enkel och smidig skadehantering om du råkat ut för en smäll på vägen. Anmäl din skada på det sätt som passar dig bäst: i appen, på telefon, i Volvoverkstaden eller på webben.
            </p>
            <span class="link">
              Så går det till vid skada
              <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
            </span>
          </div>
        </article>
      </a>
    </div>
  </section>
     
  <footer class="section-footer sticky">
    <a href="https://www.volvia.se/" target="_blank" class="cta">
      Läs mer på Volvia.se
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
    line-height: 1.3;
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

  .topbar {
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #333333;
    img {
      width: 2.25rem;
      margin-right: 1rem;
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: -.03em;
      @include d {
        font-weight: 400;
      }
    }
  }

  .section-main {
    padding: 1.5rem;
    @include d {
      padding: 3.375rem 2rem;
    }
    .heading {
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 500;
      color: #323232;
      @include d {
        margin-bottom: 1.25rem;
        font-size: 2.25rem;
        text-align: center;
      }
    }
    .lead {
      margin-bottom: 2rem;
      font-size: 1.125rem;
      @include d {
        width: 43.25rem;
        margin: 0 auto 2rem;
        font-size: 1rem;
        text-align: center;
      }
    }
  }

  .section-usp {
    padding: 2rem 1.5rem;
    background: $color-3;
    @include d {
      padding: 2rem 5.625rem;
      display: flex;
      justify-content: space-between;
    }
    .item {
      width: 16rem;
    }
    .item + .item {
      @include m {
        margin-top: 2rem;
      }
    }
    .title {
      position: relative;
      font-size: 1.25rem;
      font-weight: 500;
      color: $color-1;
      padding: .375rem 3.5rem .75rem;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 2.25rem;
        height: 2.25rem;
        background: url('@/assets/check.svg') no-repeat left center / contain;
      }
    }
  }

  .section-info {
    padding-top: 4.75rem;
    @include d {
      padding-top: 3.625rem;
    }
    .heading {
      margin-bottom: 1.75rem;
      font-size: 1.875rem;
      font-weight: 500;
      color: #595959;
      text-align: center;
      @include d {
        font-size: 1.5rem;
      }
    }
    .items {
      padding: 0 1.5rem;
      background: linear-gradient(to bottom, transparent 5%, $color-2 5%, $color-2 95%, transparent 95%);
      @include d {
        display: flex;
        justify-content: space-between;
        padding: 0 4.5rem 1.75rem;
        background: linear-gradient(to bottom, transparent 15%, $color-2 15%, $color-2 100%);
      }
    }
    .item {
      display: block;
      background: #f6f8f9;
      transition: .15s;
      @include d {
        width: 18.375rem;
      }
      &:hover {
        box-shadow: 0 0 1rem rgba(#000, .1);
      }
      .text {
        padding: 1.75rem 1.625rem;
        @include d {
          padding: 1.25rem 1.125rem 1.5rem;
        }
      }
      .title {
        margin-bottom: 1.25rem;
        font-size: 1.25rem;
        font-weight: 500;
        color: #595959;
        @include d {
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }
      }
      p {
        @include d {
          font-size: .75rem;
          line-height: 1.4;
        }
      }
      .link {
        display: block;
        margin-top: 1rem;
        font-weight: 500;
        color: $color-1;
        @include d {
          font-size: .75rem;
        }
        &:hover {
          text-decoration: underline;
        }
        .icon {
          position: relative;
          top: .125em;
          display: inline-block;
          width: .75rem;
          fill: $color-1;
        }
      }
    }
    .item + .item {
      @include m {
        margin-top: 3.75rem;
      }
    }
  }

  .section-footer {
    display: flex;
    justify-content: center;
    padding: 6.25rem 1.5rem;
    @include d {
      padding: 4rem 2rem 3rem;
    }
    .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 3.125rem;
      color: #fff;
      font-weight: 500;
      text-align: center;
      background: $color-1;
      border-radius: 2px;
      transition: .15s;
      @include d {
        width: 11.25rem;
        height: 2.375rem;
        font-size: .75rem;
      }
      &:hover {
        background: #465A59;
      }
    }
  }

</style>
