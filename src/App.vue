<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="" />
  </section>

  <section class="section-slider">
    <h1 class="heading">Mini Logo™ <span>Decks</span></h1>
    <!-- <ExpanderSlider /> -->
  </section>

  <section class="section-main" :style="{ backgroundImage: 'url(' + img + ')' }">
    <div class="wrapper">
      <div class="content">
        <h2 class="heading">Mini Logo™ Deck Construction</h2>
        <p class="lead">
          Hand made using only the finest materials, Mini Logo™ is the leader of high performance/price point decks in the Industry. Each deck is fused in Skate One's special low stress, AirLam™ presses, with water resistant, high strength glue and sealed against moisture with a lacquer semi-gloss finish.
        </p>
      </div>
      <a href="" target="_blank" class="cta">Read more</a>
    </div>
  </section>

  <section class="section-main">
    <h2 class="heading">Some heading here</h2>
    <article class="items" v-for="item in items" :key="item">
      <h3>{{ item.title }}</h3>
      <img :src="item.image">
      <p>{{ item.text }}</p>
    </article>
  </section>

  <section class="section-contact" :style="{ backgroundImage: 'url(' + img + ')' }">
    <div class="wrapper">
      <h2 class="heading">GET MILITANT!</h2>
      <p class="lead">
        Join the party and sign up for our awesome newsletters!
      </p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="button">Submit</button>
      </form>
    </div>
  </section>

  <footer class="section-footer sticky">
    <div class="container">
      <a href="" target="_blank" class="logo">
        <img src="@/assets/images/logo.svg" width="50" />
      </a> 
      <a href="" target="_blank" class="cta">Read more</a>
    </div>
  </footer>

</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'
  // import ExpanderSlider from './components/ExpanderSlider.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
      // ExpanderSlider,
    },
    data() {
      return {
        mobile: false,
        videoFile: '1080.mp4',
        items: [
          {
            title: 'Title',
            image: '/images/1.png',
            text: 'Lorem ipsum bla bla blaaa....'
          },
          {
            title: 'Title 2',
            image: '/images/2.png',
            text: 'Lorem ipsum bla bla blaaa.... 2'
          },
          {
            title: 'Title 3',
            image: '/images/3.png',
            text: 'Lorem ipsum bla bla blaaa.... 3'
          },
          {
            title: 'Title 3',
            image: '/images/4.png',
            text: 'Lorem ipsum bla bla blaaa.... 3'
          }
        ],
        img: '/images/banner.png'
      }
    },
    created() {
      // if (window.innerWidth < 480) {
      //   this.mobile = true
      //   this.videofile = '480.mp4'
      // }
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

  section {
    padding-top: 4.5rem;
    padding-bottom: 6.375rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    
    h1, h2, h3 {
      font-family: $title-font;
      font-style: normal;
      line-height: 1;
      font-weight: 700;
      margin-bottom: 2.5rem;
    }
    h1 {
      color: $color-primary;
      font-size: 4.813rem;
      span {
        color: $color-secondary;
      }
    }
    h2 {
      color: $color-primary;
      font-size: 4.813rem;
    }
    h3 {
      color: $color-secondary;
      font-size: 2.314rem;
    }
  }

  .section-video {
    padding: 0;
  }

  .section-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    .heading {
      max-width: 34.375rem;
      text-align: center;
    }
  }

  .section-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    .wrapper {
      display: flex;
      flex-direction: column;
      max-width: 59.375rem;
      align-items: center;
      color: $color-3;
      
      form {
        border: 1px solid blue;
      }
    }
  }

  .section-main {
    display: flex;
    justify-content: flex-end;
    .wrapper {
      display: flex;
      flex-direction: column;
      max-width: 65%;
      color: $color-3;
    }
  }

  .section-footer {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--footer-height);
      padding: 0 1rem;
      background: #000;
      color: #fff;
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
