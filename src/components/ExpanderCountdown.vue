<template>
  <vue-countdown :time="remainingSeconds" :transform="padWithZeroes" v-slot="{ days, hours, minutes, seconds }" class="countdown">
    <span class="part">
      <span class="value">{{ days }}</span>
      <span class="label">D</span>
    </span>
    <span class="sep">:</span>
    <span class="part">
      <span class="value">{{ hours }}</span>
      <span class="label">H</span>
    </span>
    <span class="sep">:</span>
    <span class="part">
      <span class="value">{{ minutes }}</span>
      <span class="label">M</span>
    </span>
    <span class="sep">:</span>
    <span class="part">
      <span class="value">{{ seconds }}</span>
      <span class="label">S</span>
    </span>
  </vue-countdown>
</template>

<script>
  import VueCountdown from '@chenfengyuan/vue-countdown'

  export default {
    name: 'ExpanderCountdow',
    components: {
      VueCountdown,
    },
    props: {
      date: { type: String, required: true },
    },
    computed: {
      remainingSeconds: function () {
        return new Date(this.date) - new Date()
      },
    },
    methods: {
      padWithZeroes(date) {
        date.hours = date.hours < 10 ? `0${date.hours}` : date.hours
        date.minutes = date.minutes < 10 ? `0${date.minutes}` : date.minutes
        date.seconds = date.seconds < 10 ? `0${date.seconds}` : date.seconds
        return date
      },
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/mixins.scss';

  .countdown {
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-size: 1.25rem;
    @include d {
      font-size: 1.5rem;
    }
  }
  .label {
    font-size: 1rem;
    @include d {
      font-size: 1.125rem;
    }
  }

</style>
