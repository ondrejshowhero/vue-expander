<template>
  <vue-countdown
    :time="remainingSeconds"
    :transform="padWithZeroes"
    v-slot="{ days, hours, minutes, seconds }"
    class="countdown"
  >
    <span class="part">
      <span class="value">{{ days }}</span>
      <span class="label">Dage</span>
    </span>
    <span class="sep">:</span>
    <span class="part">
      <span class="value">{{ hours }}</span>
      <span class="label">Timer</span>
    </span>
    <span class="sep">:</span>
    <span class="part">
      <span class="value">{{ minutes }}</span>
      <span class="label">Minutter</span>
    </span>
    <span class="sep">:</span>
    <span class="part">
      <span class="value">{{ seconds }}</span>
      <span class="label">Sekunder</span>
    </span>
  </vue-countdown>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  name: "ExpanderCountdown",
  components: {
    VueCountdown,
  },
  data() {
    return {
      date: "2024-09-05T00:01:00", // Set the countdown date here
    };
  },
  computed: {
    remainingSeconds() {
      return new Date(this.date) - new Date();
    },
  },
  methods: {
    padWithZeroes(date) {
      date.hours = date.hours < 10 ? `0${date.hours}` : date.hours;
      date.minutes = date.minutes < 10 ? `0${date.minutes}` : date.minutes;
      date.seconds = date.seconds < 10 ? `0${date.seconds}` : date.seconds;
      return date;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";
@import "@/scss/fonts.scss";

.countdown {
  display: flex;
  align-items: start;
  justify-content: flex-start;
  color: #fff;
  font-size: 1.8125rem;
  gap: 3.5rem;
  margin-left: -1.5rem;
}
.sep {
  display: none;
}
.part {
  width: 2.5rem;
  text-align: center;
  @include d {
    width: 3.75rem;
  }
}
.value {
  display: block;
  font-size: 5.125rem;
  width: 6.0625rem;
  display: flex;
  justify-content: center;
  @include d {
    font-size: 5.125rem;
    width: 6.0625rem;
    display: flex;
    justify-content: center;
  }
}
.label {
  font-size: 1.8125rem;
  width: 6.0625rem;
  display: flex;
  justify-content: center;
  @include d {
    font-size: 1.8125rem;
  }
}

@media (max-width: 480px) {
  .countdown {
    margin-left: 0;
    gap: 16.5vw;
  }
  .value {
    display: block;
    font-size: 17.083vw;
    width: 20.208vw;
    display: flex;
    justify-content: center;
    @include d {
      font-size: 17.083vw;
      width: 20.208vw;
      display: flex;
      justify-content: center;
    }
  }
  .label {
    font-size: 6.042vw;
    width: 20.208vw;
    display: flex;
    justify-content: center;
    @include d {
      font-size: 6.042vw;
    }
  }
  .part {
    width: 8.333vw;
    text-align: center;
    @include d {
      width: 12.5vw;
    }
  }
}
</style>
