<template>

  <section class="section-video">
    <ExpanderVideo :videoId="videoId" :mobile="mobile" />
  </section>

  <section class="section-intro">
    <div class="subsection subsection-1">
      <div class="text">
        <div class="intro">
          <h1 class="heading">HORNBACHs<br> KONSTHANTVERK</h1>
          <p class="lead">
            Att inte behöva köpa designobjekt, utan bygga dem själv: Det är grundidén i HORNBACHs serie KONSTHANTVERK. Med en lista över material och verktyg och tillhörande bygginstruktioner tar HORNBACH ett steg mot en demokratisering av snygg design. Det som annars skulle vara orimligt dyrt kostar nu inte mer än det rena materialet. Plus en arbetsdag eller två – och såklart lite intresse för DIY.
          </p>
        </div>
        <h1 class="title">Green<br>Hideaway</h1>
        <p>
          Skog och natur är en viktig källa till lugn och trygghet. Så hur får vi i en värld som känns alltmer konstlad och hektisk in mer grönt i vår vardag? Green Hideaway är ett unikt designobjekt som suddar ut gränserna mellan inomhus och utomhus. Ett stycke natur för hemmet.
        </p>
        <a href="https://track.adform.net/C/?bn=61395175" target="_blank" class="cta" @click="track('las-mer')">Läs mer</a>
      </div>
      <div class="image">
        <img src="@/assets/image-1.jpg">
      </div>
    </div>
    <div class="subsection subsection-2">
      <div class="text">
        <h2 class="subheading">Designstudion Front/</h2>
        <p>
          Samarbetspartner till HORNBACHs aktuella KONSTHANTVERK är Front/ från Stockholm. Anna Lindgren och Sophia Lagerkvist arbetar för ett stort antal internationella uppdragsgivare och har varit representerade på bland annat MoMA i New York, Victoria &amp; Albert Museum i London och Centre Pompidou i Paris. De kommenterar designkonventioner, experimenterar och ifrågasätter sig själva. Detta med ett ständigt ökande fokus på naturen.
        </p>
        <a href="https://track.adform.net/C/?bn=61395175" target="_blank" class="cta" @click="track('las-mer')">Läs mer</a>
      </div>
      <div class="image">
        <img src="@/assets/image-2.jpg">
      </div>
    </div>
  </section>

  <section class="section-links">
    <a href="https://cdn.hornbach.se/cmsm/se/green-hideaway-instruktioner.pdf" target="_blank" class="item" @click="track('arbetsbeskrivning')">
      <div class="image">
        <img src="@/assets/thumb-1.jpg">
      </div>
      <div class="info">
        <h3 class="label">Arbetsbeskrivning</h3>
        <p class="text">
          Steg-för-steg-instruktioner för att bygga stolen.
        </p>
        <img src="@/assets/label2.png">
      </div>
    </a>
    <a href="https://cdn.hornbach.se/cmsm/se/green-hideaway-ritning.pdf" target="_blank" class="item" @click="track('ritning')">
      <div class="image">
        <img src="@/assets/thumb-2.jpg">
      </div>
      <div class="info">
        <h3 class="label">Ritning</h3>
        <p class="text">
          Tänk på att denna måste skrivas ut eller tejpas ihop till A0-format.
        </p>
        <img src="@/assets/label2.png">
      </div>
    </a>
    <a href="https://cdn.hornbach.se/cmsm/se/green-hideaway-material-verktyg.pdf" target="_blank" class="item" @click="track('material')">
      <div class="image">
        <img src="@/assets/thumb-3.jpg">
      </div>
      <div class="info">
        <h3 class="label">Material &amp; verktyg</h3>
        <p class="text">
          Lista över de material och verktyg du behöver.
        </p>
        <img src="@/assets/label2.png">
      </div>
    </a>
  </section>

  <section class="section-graphics">
    <div class="image">
      <img src="@/assets/product-1.jpg">
    </div>
    <div class="video">
      <video poster="@/assets/product-2.jpg" src="@/assets/video2.mp4" loop muted autoplay playsinline />
    </div>
    <div class="image">
      <img src="@/assets/product-3.jpg">
    </div>
  </section>

  <footer class="section-footer">
    <a href="https://track.adform.net/C/?bn=61395174" target="_blank" class="logo" @click="track('logo')">
      <img src="@/assets/logo-se.png">
    </a>
    <a href="https://track.adform.net/C/?bn=61437991" target="_blank" class="cta" @lick="track('hitta-hornbach-varuhus')">Hitta <span>ditt</span> HORNBACH-varuhus</a>
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
        resourcesId: 2036,
        // videoId: 2596,
        version: 1,
        mobile: true
      }
    },
    created() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      let id = params.get('version')
      if (id == 2) {
        this.version = 2
      }
      if (window.innerWidth > 480) {
        this.mobile = false
      }
    },
    computed: {
      videoId() {
        if (this.mobile)
          return 2597
        else
          return 2596
      }
    },
    methods: {
      track(label) {
        window.ad10Resources?.trackAction(`${this.resourcesId}-${label}`)
      },
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
    padding-bottom: 5rem;
  }

  img {
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
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-intro {
    padding: 1.625rem 1.5rem 4rem;
    @include d {
      padding: 1.625rem 2.5rem 2rem;
    }
    .subsection {
      @include d {
        display: flex;
        justify-content: space-between;
        .text,
        .image {
          width: 49%;
        }
      }
    }
    .subsection-1 {
      @include d {
        margin-bottom: -1.5rem;
        .text {
          order: 2;
          padding: 0 4rem 0 4rem;
        }
        .image {
          order: 1;
        }
      }
    }
    .subsection-2 {
      .text {
        padding-top: 4rem;
      }
      @include d {
        .text {
          padding: 7.5rem 6rem 2rem 3.25rem;
        }
      }
    }
    .text {
      margin-bottom: 1.5rem;
      @include d {
        margin-bottom: 0;
      }
      p {
        font-size: 1rem;
      }
    }
    .intro {
      margin-bottom: 1rem;
    }
    .heading {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 300;
    }
    .lead {
      font-size: 1rem;
    }
    .title {
      margin-bottom: .625rem;
      font-family: $font2;
      font-size: 2rem;
      font-weight: normal;
      line-height: 1;
      color: #08391F;
    }
    .subheading {
      margin-bottom: 2.75rem;
      font-size: 2rem;
      font-weight: 300;
    }
    .cta {
      position: relative;
      display: block;
      padding-top: 3rem;
      padding-right: 2rem;
      font-size: 1.25rem;
      color: #8C8473;
      text-align: right;
      transition: .15s;
      &::after {
        content: '';
        position: absolute;
        bottom: .125rem;
        right: -.5rem;
        width: 1.375rem;
        height: 1.375rem;
        background: url('assets/arr-g.png') no-repeat center center / contain;
        transition: .15s;
      }
      &:hover {
        color: #000;
        &::after {
          right: -.75rem;
        }
      }
    }
  }

  .section-image {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    @include d {
      margin: 0;
      img {
        width: 43rem;
        margin: 0 auto;
      }
    }
  }

  .section-links {
    padding: 0 1.5rem;
    @include d {
      display: flex;
      justify-content: space-between;
      padding: 0 2.5rem;
    }
    .item {
      display: block;
      @include d {
        width: 33.33%;
      }
      .image {
        padding: 0 .5rem;
      }
      .info {
        position: relative;
        z-index: 2;
        padding: 1.375rem 1.75rem 1rem;
        margin-top: -3.25rem;
        color: #373434;
        .label {
          font-size: 1.25rem;
          font-weight: 600;
          position: relative;
          z-index: 2;
        }
        .text {
          position: relative;
          z-index: 2;
          margin-top: .5rem;
          font-size: 1rem;
          font-weight: normal;
        }
        img {
          @include cover;
          filter: grayscale(100%) brightness(145%);
          transition: .15s;
        }
        &::after {
          content: '';
          position: absolute;
          right: 2.25rem;
          top: 1.5rem;
          width: 1.625rem;
          height: 1.5rem;
          background: url('assets/arr.png') no-repeat center center / contain;
        }
      }
      &:hover {
        .info {
          img {
            filter: none;
          }
        }
      }
    }
    @include m {
      .item + .item {
        margin-top: 2rem;
      }
    }
  }

  .section-graphics {
    display: flex;
    justify-content: space-between;
    padding: 3.875rem 1.5rem 2rem;
    @include d {
      padding: 3.875rem 2.5rem 2rem;
    }
    .image,
    .video {
      height: 42vw;
      @include d {
        height: 30rem;
      }
      img,
      video {
        max-width: none;
        width: auto;
        height: 100%;
      }
    }
  }

  .section-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7rem;
    padding: 3.5rem 1rem 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, rgba(136, 136, 136, 0) 20.24%, rgba(0, 0, 0, 0.34) 100%);
    @include d {
      align-items: flex-start;
      padding: 3.5rem 2.5rem 0;
    }
    .logo {
      width: 8rem;
      @include d {
        width: 11.5rem;
      }
    }
    .cta {
      position: relative;
      padding: .5rem 1.5rem .5rem 1rem;
      font-size: .75rem;
      font-weight: 600;
      color: #fff;
      background: url('assets/cta.png') no-repeat center center / 100% 100%;
      transition: .15;
      line-height: 1;
      @include m {
        span {
          display: none;
        }
      }
      @include d {
        padding: .75rem 3rem .75rem 1.25rem;
        font-size: 1.125rem;
      }
      &:hover {
        opacity: .8;
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        height: 100%;
        top: 0;
        width: 1.5rem;
        background: url('assets/location.png') no-repeat center center / contain;
        @include d {
          right: .75rem;
          width: 2rem;
        }
      }
    }
  }

</style>
