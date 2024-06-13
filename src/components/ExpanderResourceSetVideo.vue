<template>
  <div class="video-container">
    <div class="video-frame" :class="{mobile: mobile}">
      <video :data-res-id="videoId" preload="auto"></video>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderVideoResourceSet',
    props: {
      videoId: { type: Number, required: true },
      mobile: { type: Boolean, required: false }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/mixins.scss';

  .video-container {
    width: 100%;
    overflow: hidden;
    background: #000;
  }
  video {
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
  }
  .video-frame {
    &.mobile {
      video {
        aspect-ratio: 9/16;
      }
    }
  }
</style>
