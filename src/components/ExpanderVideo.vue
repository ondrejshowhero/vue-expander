<template>
  <div class="video-container">
    <div class="video-frame">
      <video :data-res-id="videoId" preload="auto"></video>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderVideo',
    props: {
      videoId: { type: Number, required: true }
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
</style>
