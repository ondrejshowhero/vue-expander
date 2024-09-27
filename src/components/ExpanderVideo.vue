<template>
  <div class="expander-video">
    <div class="video-frame" :class="{ mobile: mobile, playing: playing }">
      <video
        preload="auto"
        playsinline
        ref="video"
        @play="videoPlays()"
        @pause="videoPauses()"
        @click="togglePlay()"
        :poster="poster ? getVideoPoster() : null"
        :data-track="track ? true : false"
        :data-name="name ? name : null"
      >
        <source :src="getVideoSrc()" type="video/mp4" />
      </video>
      <a
        :href="url"
        target="_blank"
        class="link"
        v-if="url"
        :data-name="name ? name : null"
      ></a>
      <button class="play" @click="playButtonClicked()"></button>
      <button
        class="sound"
        @click="soundButtonClicked()"
        :class="{ muted: muted }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpanderVideo",
  props: {
    filename: { type: String, required: true },
    mobile: { type: Boolean },
    autoplay: { type: Boolean },
    url: { type: String },
    poster: { type: String },
    name: { type: String },
    track: { type: Boolean, default: true },
  },
  data() {
    return {
      playing: false,
      muted: false,
      unmutedByUser: false,
      observer: null,
    };
  },
  mounted() {
    if (this.autoplay) {
      this.createObserver();
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener("blur", this.handleWindowBlur);
    window.removeEventListener("focus", this.handleWindowFocus);
  },
  created() {
    window.addEventListener("blur", this.handleWindowBlur);
    window.addEventListener("focus", this.handleWindowFocus);
  },
  watch: {
    muted(muted) {
      this.$refs.video.muted = muted;
    },
  },
  methods: {
    createObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.playVideo();
            } else {
              this.pauseVideo();
            }
          });
        },
        { threshold: 0.5 }
      );
      this.observer.observe(this.$refs.video);
    },
    handleWindowBlur() {
      this.muted = true;
    },
    handleWindowFocus() {
      if (this.unmutedByUser) {
        this.muted = false;
      }
    },
    getVideoSrc() {
      return require(`@/assets/video/${this.filename}`);
    },
    getVideoPoster() {
      return require(`@/assets/video/${this.poster}`);
    },
    videoPlays() {
      this.playing = true;
      let videos = document.querySelectorAll(".expander-video video");
      videos.forEach((video) => {
        if (video !== this.$refs.video) {
          video.pause();
        }
      });
    },
    videoPauses() {
      this.playing = false;
    },
    playButtonClicked() {
      if (!this.unmutedByUser) {
        this.unmutedByUser = true;
      }
      this.muted = false;
      this.togglePlay();
    },
    togglePlay() {
      let video = this.$refs.video;
      if (
        video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2
      ) {
        video.pause();
      } else {
        video.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    },
    playVideo() {
      let video = this.$refs.video;
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    },
    pauseVideo() {
      this.$refs.video.pause();
    },
    soundButtonClicked() {
      if (!this.unmutedByUser) {
        this.unmutedByUser = true;
      }
      this.toggleSound();
    },
    toggleSound() {
      this.muted = !this.$refs.video.muted;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

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
  background: rgba(#000, 0.25);
  transition: 0.15s;
  &:hover {
    background: rgba(#000, 0.1);
  }
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    background: rgba(#000, 0.5) url("../assets/expander/icons/play.svg")
      no-repeat 60% center / 60% auto;
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
  background: rgba(#000, 0.2) url("../assets/expander/icons/sound-on.svg")
    no-repeat center center / 50% auto;
  border-radius: 50%;
  border: 1px solid #fff;
  transform: translate(0, -50%);
  transition: background 0.15s;
  cursor: pointer;
  &.muted {
    display: block;
    background-image: url("../assets/expander/icons/sound-off.svg");
  }
  &:hover {
    background-color: rgba(#000, 0.4);
  }
}
</style>
