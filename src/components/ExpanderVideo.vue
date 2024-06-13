<template>
  <div class="expander-video">
    <div class="video-frame" :class="{mobile: mobile, playing: playing}">
      <video preload="auto" playsinline ref="video" @play="videoPlays()" @pause="videoPauses()" @click="togglePlay()">
        <source :src="getVideoSrc()" type="video/mp4">
      </video>
      <a :href="url" target="_blank" class="link" v-if="url"></a>
      <button class="play" @click="playButtonClicked()"></button>
      <button class="sound" @click="soundButtonClicked()" :class="{muted: muted}"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderVideo',
    props: {
      filename: { type: String, required: true },
      mobile: { type: Boolean },
      autoplay: { type: Boolean },
      url: { type: String }
    },
    data() {
      return {
        playing: false,
        muted: false,
        unmutedByUser: false
      }
    },
    mounted() {
      let video = this.$refs.video

      if (!this.autoplay)
          return

      let promise = video.play()
      if (promise) {
        promise.catch(() => {
          this.muted = true
          video.muted = true
          video.play()
        })
      }
    },
    created() {
      window.addEventListener("blur", () => {
        this.muted = true
      })
      window.addEventListener("focus", () => {
        if (this.unmutedByUser)
          this.muted = false
      })

    },
    watch: {
      muted(muted) {
        this.$refs.video.muted = muted
      }
    },
    methods: {
      getVideoSrc() {
        return require(`@/assets/video/${this.filename}`)
      },
      videoPlays() {
        this.playing = true
        let videos = document.querySelectorAll(".expander-video video")
        videos.forEach(video => {
          if (video !== this.$refs.video)
            video.pause()
        })
      },
      videoPauses() {
        this.playing = false
      },
      playButtonClicked() {
        if (!this.unmutedByUser)
          this.unmutedByUser = true
        this.muted = false
        this.togglePlay()
      },
      togglePlay() {
        let video = this.$refs.video
        if ( video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2 )
          video.pause()
        else
          video.play()
      },
      pause() {
        this.$refs.video.pause()
      },
      soundButtonClicked() {
        if (!this.unmutedByUser)
          this.unmutedByUser = true
        this.toggleSound()
      },
      toggleSound() {
        if (this.$refs.video.muted) {
          this.muted = false
        } else {
          this.muted = true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/mixins.scss';

  button {
    padding: 0;
    border: 0;
    background: none;
  }

  .expander-video {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #000;
  }
  video {
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    cursor: pointer;
    .mobile & {
      aspect-ratio: 1/1;
    }
  }

  .link {
    @include cover;
    z-index: 2;
    cursor: pointer;
  }

  .play {
    @include cover;
    z-index: 3;
    cursor: pointer;
    background: rgba(#000, .25);
    transition: .15s;
    &:hover {
      background: rgba(#000, .1);
    }
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 10%;
      aspect-ratio: 1;
      transform: translate(-50%, -50%);
      background: rgba(#000, .5) url('../assets/expander/icons/play.svg') no-repeat 60% center / 60% auto;
      border: 2px solid #fff;
      border-radius: 50%;
    }
    .playing & {
      display: none;
    }
  }

  .sound {
    position: absolute;
    right: 1%;
    top: 50%;
    z-index: 4;
    width: 5%;
    aspect-ratio: 1;
    background: rgba(#000, .2) url('../assets/expander/icons/sound-on.svg') no-repeat center center / 50% auto;
    border-radius: 50%;
    border: 1px solid #fff;
    transform: translate(0, -50%);
    transition: background .15s;
    cursor: pointer;
    &.muted {
      display: block;
      background-image: url('../assets/expander/icons/sound-off.svg');
    }
    &:hover {
      background-color: rgba(#000, .4);
    }
  }

</style>
