<template>

  <section class="section-video">
    <ExpanderResourceSetVideo :videoId="resourcesVideoId" :mobile="mobile" />
  </section>

  <section class="section-main">
    <h1 class="heading">Some heading here</h1>
    <p class="lead">
      Some introductory text is placed here
    </p>
    <a href="" target="_blank" class="cta" @click="track('las-mer')">Läs mer</a>
  </section>

  <section class="section-scroller">
    <ExpanderScroller @track="track" />
  </section>
     
  <section class="section-slider">
    <ExpanderSlider @track="track" />
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a href="" target="_blank" class="logo" @click="track('logo')">
        <img src="https://showheroes-group.com/app/uploads/2023/03/SH_logo_green.png?qc-size=1718,191" alt="Showheroes group" width="200">
      </a> 
      <a href="" target="_blank" class="cta" @click="track('cta')">Read more</a>
    </div>
  </footer>


</template>

<script>
  import ExpanderResourceSetVideo from './components/ExpanderResourceSetVideo.vue'
  import ExpanderScroller from './components/ExpanderScroller.vue'
  import ExpanderSlider from './components/ExpanderSlider.vue'

  export default {
    name: 'App',
    components: {
      ExpanderResourceSetVideo,
      ExpanderScroller,
      ExpanderSlider,
    },
    data() {
      return {
        resourcesId: 1488,
        resourcesVideoId: 2,
        version: 1,
        mobile: false
      }
    },
    created() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      let id = params.get('version')
      if (id == 2) {
        this.version = 2
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
  // @import '@/scss/fonts.scss';
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  :root {
    --footer-height: 2rem;
    @include d {
      --footer-height: 4rem;
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

  .section-footer {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--footer-height);
      padding: 0 1rem;
      background: #fff;
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
