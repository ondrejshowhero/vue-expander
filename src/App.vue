<template>

  <section class="section-video">
    <ExpanderResourceSetVideo :videoId="resourcesVideoId" :mobile="mobile" />
  </section>

  <section class="section-main">
    <h1 class="heading">Some heading here</h1>
    <p class="lead">
      Some introductory text is placed here
    </p>
    <a href="" target="_blank" @click="track('las-mer')">Läs mer</a>
  </section>

  <section class="section-scroller">
    <ExpanderScroller @track="track" />
  </section>
     
  <section class="section-slider">
    <ExpanderSlider @track="track" />
  </section>

  <footer class="section-footer">
    <div class="logo">
    </div> 
    <a href="" target="_blank" class="cta" @click="track('cta')"></a>
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
    // position: fixed;
    // left: 0;
    // bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 100%;
    height: 4rem;
    padding: .25rem 1rem;
    background: #fff;
  }

</style>
