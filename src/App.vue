<template>

  <section class="section-video">
    <ExpanderVideo :videoId="videoId" />
  </section>

  <section class="section-main">
    <h1 class="headin">Some heading here</h1>
    <p class="lead">
      Some introductory text is placed here
    </p>
  </section>

  <section class="section-scroller">
    <ExpanderScroller @track="track" />
  </section>
     
  <section class="section-slider">
    <ExpanderSlider @track="track" />
  </section>

  <section class="section-countdown">
    <ExpanderCountdown />
  </section>


</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  import ExpanderScroller from './components/ExpanderScroller.vue'
  import ExpanderSlider from './components/ExpanderSlider.vue'
  import ExpanderCountdown from './components/ExpanderCountdown.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      ExpanderScroller,
      ExpanderSlider,
      ExpanderCountdown,
    },
    data() {
      return {
        resourcesId: 1488,
        videoId: 2,
        version: 1
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
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';


</style>
