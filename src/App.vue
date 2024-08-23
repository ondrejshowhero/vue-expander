<template>

  <section class="section-video">
    <ExpanderVideo :autoplay="true" :filename="videoFile" :mobile="mobile" url="https://www.travelhx.com/nb-no/tilbud" />
  </section>

  <section class="section-logo">
    <img src="@/assets/logo-new.png">
  </section>

  <section class="section-intro">

    <h1 class="heading">
      Bli med oss på en moderne oppdagelsesreise. 
    </h1>

    <nav class="nav">
      <template v-for="(item, index) in items" :key="item">
        <button @click="setSectionActive(index)" :class="{active: isSectionActive(index)}" :data-track="`Tab - ${item[0]}`">
          {{item[0]}}
        </button>
      </template>
    </nav>

  </section>

  <section class="section-main">

    <template v-for="(item, index) in items" :key="item">
      <article v-if="isSectionActive(index)">

        <div class="text">
          <h2 class="subheading">
            {{item[0]}}
          </h2>
          <p v-html="item[1]"></p>
          <a :href="item[3]" target="_blank" class="cta" :data-name="item[0]">Les mer her</a>
        </div>

        <a href="https://www.travelhx.com/nb-no/tilbud" target="_blank" class="image" data-name="Image">
          <img :src="getImageUrl(index)">
        </a>

      </article>
    </template>

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
        videoFile: '1080.mp4',
        section: 0,
        items: [
          [
            'Svalbard',
            'Vi dro på vår første ekspedisjon til Svalbard allerede i 1896, og ingen kjenner øygruppen bedre. Bli med når vi utforsker den storslåtte villmarken under midnattssolen i isbjørnens&nbsp;rike. ',
            'svalbard',
            'https://www.travelhx.com/nb-no/destinasjoner/svalbard-cruise/'
          ],
          [
            'Galapagos',
            'Se for deg å våkne i en komfortabel lugar mens Galapagospingviner leker utenfor vinduet ditt.  Natur-entusiaster og eventyrere fra hele verden har Galápagos øverst på sin bucket-liste. Nå har du muligheten til å komme tett på det fabelaktige dyrelivet sammen med ekspedisjonsteamet.',
            'galapagos',
            'https://www.travelhx.com/nb-no/destinasjoner/galapagosoyene-cruise/'
          ],
          [
            'Grønland',
            'Verdens største øy føles nesten som en helt egen verden. Enorm, vakker og uberørt, med en unik kultur og et majestetisk landskap med rikt dyreliv, er Grønland et av de mest fascinerende stedene i verden å utforske på&nbsp;ekspedisjon.',
            'gronland',
            'https://www.travelhx.com/nb-no/destinasjoner/cruise-til-gronland/'
          ],
          [
            'Antarktis',
            'Uansett hvor du har vært tidligere, er det ingenting som kan måle seg med Antarktis. Det er bokstavelig talt et helt kontinent av snø og is og utenomjordisk villmark. Sel og hval holder deg med selskap på ekspedisjonen, i tillegg til omtrent 12 millioner&nbsp;pingviner.',
            'antarktis',
            'https://www.travelhx.com/nb-no/destinasjoner/antarktis/'
          ],
        ]
      }
    },
    created() {
      if (window.innerWidth < 480) {
        this.videoFile = '480.mp4'
        this.mobile = true
      }
    },
    methods: {
      isSectionActive(id) {
        return id === this.section
      },
      setSectionActive(id) {
        this.section = id
        let label = this.items[id][2]
        this.track(`tab--${label}`)
      },
      getImageUrl(index) {
        return require(`@/assets/image-${index + 1}.jpg?2`)
      },
      track(label) {
        return label
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
    text-align: center;
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
    cursor: pointer;
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-logo {
    display: flex;
    justify-content: center;
    img {
      width: 10rem;
      @include d {
        width: 15.75rem;
      }
    }
  }
  .section-intro {
    padding: 7.375rem 2.5rem 1.5rem;
    color: #fff;
    background: url('assets/bg.jpg') no-repeat center center / cover;
    @include d {
      padding: 7.375rem 2.5rem 2.5rem;
    }
    .heading {
      width: 39.375rem;
      max-width: 100%;
      margin: 0 auto;
      font-weight: 600;
      font-size: 2rem;
      line-height: 1.1;
      text-shadow: 0 0 2rem rgba(#000, .2);
      @include d {
        font-size: 3rem;
      }
    }
    .nav {
      display: flex;
      margin-top: 4.5rem;
      button {
        display: flex;
        height: 3.75rem;
        justify-content: center;
        align-items: center;
        padding: 0 2rem;
        flex: 1 0;
        font-family: $font;
        font-size: 1rem;
        font-weight: 900;
        color: #fff;
        background: rgba(#000, .1);
        border: 2px solid #fff;
        transition: background .15s, color .15s;
        cursor: pointer;
        &:hover,
        &.active {
          color: #092C55;
          background: #fff;
        }
      }
      button + button {
        margin-left: 1rem;
      }
      @include m {
        flex-wrap: wrap;
        margin-top: 3.5rem;
        button {
          margin: 0 .5rem 1rem !important;
          width: 7rem;
        }
      }
    }
  }

  .section-main {
    
    .text {
      padding: 4.125rem 0 3.75rem;
      @include m {
        padding: 4.125rem 1.5rem 3.75rem;
      }
    }
    .subheading {
      margin-bottom: 1.5rem;
      font-weight: 600;
      font-size: 3rem;
      line-height: 1.1;
    }
    p {
      max-width: 37.5rem;
      margin: 0 auto;
    }
    .cta {
      display: flex;
      width: 15rem;
      height: 3.75rem;
      margin: 2.5rem auto 0;
      justify-content: center;
      align-items: center;
      color: #fff;
      background: $color-1;
      font-family: $font;
      font-size: 1rem;
      font-weight: 900;
      color: #fff;
      transition: background .15s, color .15s;
      &:hover {
        background: #092C55;
      }
    }
    .image {
      display: block;
    }
  }

</style>
