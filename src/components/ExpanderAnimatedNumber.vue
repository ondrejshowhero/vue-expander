<template>

  <div class="number" ref="number">
    {{ formateNumber(displayNumber) }}
  </div>

</template>

<script> 
  export default {
    name: 'ExpanderAnimatedNumber',
    props: {
      start: { default: 0 },
      target: { required: true }
    },
    data () {
      return {
        number: this.start,
        displayNumber: 0,
        interval: false
      }
    },
    mounted() {
      let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.number = this.target
          observer.unobserve(this.$refs.number)
        }
      }, {
        rootMargin: "0px 0px -350px 0px",
        threshold: 1
      })
      observer.observe(this.$refs.number)
    },
    watch: {
      number () {
        clearInterval(this.interval);

        if(this.number == this.displayNumber) {
          return;
        }

        this.interval = window.setInterval(() => {
          if(this.displayNumber != this.number) {
            let change = (this.number - this.displayNumber) / 10
            console.log(change)
            change = change >= 0 ? Math.ceil(change) : Math.floor(change)
            this.displayNumber = this.displayNumber + change
          }
        }, 10);
      }
    },
    methods: {
      formateNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .number {
    font-weight: bold;
  }

</style>
