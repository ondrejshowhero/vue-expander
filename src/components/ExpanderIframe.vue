<template>
  <div class="container">

    <div class="iframe">
      <iframe src="https://showheroes.com" frameborder="0"></iframe>
    </div>

    <div class="modal" :class="{active: active}" @wheel="hideModal">
      <div class="bg" @click="hideModal"></div>
      <div class="video-wrapper">
        <ExpanderVideo filename="1080.mp4" :autoplay="true" url="https://showheroes.com/" />
        <button class="toggle" @click="toggleModal"></button>
      </div>
    </div>

  </div>
</template>

<script>
  import ExpanderVideo from './ExpanderVideo.vue'

  export default {
    name: 'ExpanderIframe',
    emits: ['track'],
    components: {
      ExpanderVideo,
    },
    data() {
      return {
        active: true
      }
    },
    methods: {
      hideModal() {
        this.active = false
      },
      toggleModal() {
        this.active = !this.active
      },
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .iframe {
    width: 100%;
    height: 100vh;
    iframe {
      display: block;
      width: 100%;
      height: 100vh;
    }
  }

  .modal {
    position: absolute;
    right: 4%;
    bottom: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 33.75vw;
    z-index: 2;
    box-shadow: 0 0 .5rem black;
    transition: .4s;
    @include d {
      right: 3rem;
      bottom: 2rem;
      width: 20rem;
      height: 11.25rem;
    }
    .bg {
      @include cover;
      background: rgba(#000, .5);
    }

    .video-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      transition: .4s;
    }

    .toggle {
      position: absolute;
      z-index: 1000;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: transparent;
    }

    &.active {
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      .video-wrapper {
        width: 90%;
        @include d {
          width: 75%;
          max-width: 62.5rem;
        }
      }
      .toggle {
        right: -.125rem;
        top: -.125rem;
        width: 1.75rem;
        height: 1.75rem;
        background: #000 url('@/assets/expander/icons/minify.svg') no-repeat center center / 40% auto;
      }
    }
  }

  
</style>
