<template>
  <vue-countdown
    :time="remainingSeconds"
    :transform="padWithZeroes"
    v-slot="{ days }"
    class="countdown"
  >
    <div class="container-numbers">
      <span class="part">
        <span class="value">{{ days }}</span>
      </span>
    </div>

    <span class="label">DAGE tilbage</span>
  </vue-countdown>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  name: "ExpanderCountdown",
  components: {
    VueCountdown,
  },
  props: {
    date: { type: String, required: true },
  },
  computed: {
    remainingSeconds: function () {
      return new Date(this.date) - new Date();
    },
  },
  methods: {
    padWithZeroes(date) {
      date.hours = date.hours < 10 ? `0${date.hours}` : date.hours;
      date.minutes = date.minutes < 10 ? `0${date.minutes}` : date.minutes;
      date.seconds = date.seconds < 10 ? `0${date.seconds}` : date.seconds;
      date.days = date.days === 0 ? "00" : date.days;
      return date;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.sep {
  display: none;
}
.part {
  text-align: center;
  height: 4.19775rem;
  width: 4.5rem;
  // background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4.5rem;

  @include m {
    width: 7.29vw; // 3.5rem converted to vw for 480px screen width
  }
}
.value {
  display: block;
  font-size: 1.25rem;
  font-size: 2rem;
  width: 4.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 2.9rem;
  font-size: 1.5rem;
  @include m {
    width: 7.29vw; // 4.5rem converted to vw for 480px screen width
    letter-spacing: 4.5vw; // 2.6rem converted to vw for 480px screen width
    font-size: 3.13vw; // 1.5rem converted to vw for 480px screen width
  }
}
.label {
  font-size: 1rem;
  text-transform: uppercase;
  font-family: "ViaplaySans-Regular", sans-serif;
  font-size: 1.125rem;
  margin-top: 0.6rem;
  font-size: 0.875rem;
  @include m {
    font-size: 1.56vw; // 0.75rem converted to vw for 480px screen width
    margin-top: 0.65vw; // 0.31rem converted to vw for 480px screen width
  }
}
.container-numbers {
  width: 6.90475rem;
  height: 4.19775rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "ViaplaySans-Bold", sans-serif;
  background-image: url("@/assets/countdown-bg.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  color: #000;
  font-size: 2rem;
  @include m {
    width: 13.02vw; // 5rem converted to vw for 480px screen width
    height: 7.81vw; // 3rem converted to vw for 480px screen width
  }
}
</style>
