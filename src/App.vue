<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="" />
  </section>

  <section class="section-top">
    <img src="@/assets/logo.png" alt="logo" class="logo">
    <h1>Text goes here!</h1>
  </section>

  <section class="section-logo">
    <picture>
      <source srcset="@/assets/logo.png" media="{min-width: 480px}" />
      <img src="@/assets/logo.png" alt="logo">
    </picture>
  </section>

  <section class="section-main">
    <h1 class="heading">Some heading here</h1>
    <article class="items" v-for="item in items" :key="item">
      <h2>{{ item.title }}</h2>
      <ExpanderVideo :filename="item.video" url="" />
      <p>{{ item.text }}</p>
    </article>
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a href="" target="_blank" class="logo">
        <img src="@/assets/logo.png">
      </a> 
      <a href="" target="_blank" class="cta">Read more</a>
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
        videoFile: '1080.mp4',
        items: [
          {
            title: 'Title',
            video: 'test.mp4',
            text: 'Lorem ipsum bla bla blaaa....'
          },
          {
            title: 'Title 2',
            video: 'test-01.mp4',
            text: 'Lorem ipsum bla bla blaaa.... 2'
          },
          {
            title: 'Title 3',
            video: 'test-02.mp4',
            text: 'Lorem ipsum bla bla blaaa.... 3'
          }
        ]
      }
    },
    created() {
      if (window.innerWidth < 480) {
        this.mobile = true
        this.videofile = '480.mp4'
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

  .section-top {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        width: 2rem;
      }
  }

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
