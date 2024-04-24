<template>
  <nav class="nav" ref="nav">
    <div class="scroll" ref="scroll">
      <div class="items" ref="items">
        <button class="button" v-for="section, index in items" :key="section" @click="scrollToSection(index)">{{ section }}</button>
      </div>
    </div>
  </nav>
</template>

<script> 
  // Expected sections with [data-sectoion=n] attributes
  export default {
    name: 'ExpanderStickyNav',
    data() {
      return {
        items: [
          'Konfirmasjon',
          'Møt konfirmantene',
          'Historien bak',
          'Medlemsfordeler',
        ]
      }
    },
    methods: {
      scrollToSection(index) {
        let element = document.querySelector(`[data-section='${index + 1}']`)
        if (!element)
          return
        let offset = this.$refs.nav.offsetHeight
        let top = element.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        })
      }
    },
    mounted() {
      let observableElements = document.querySelectorAll('[data-section]')
      let indicators = this.$refs.items.querySelectorAll('.button')
      let observer = new IntersectionObserver((entries) => {
        let entry = entries[0]
        if (entry.isIntersecting) {
          let index = entry.target.dataset.section
          indicators.forEach(element => {
            element.classList.remove('active')
          })
          let current = indicators[index - 1]
          current.classList.add('active')
          let left = current.offsetLeft
          let offset = left + current.offsetWidth / 2 - this.$refs.scroll.offsetWidth / 2
          this.$refs.scroll.scrollTo({
            left: offset,
            behavior: 'smooth',
          })
        }
      });
      observableElements.forEach(element => {
        observer.observe(element)
      });
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .nav {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10000;
    background: $color-bg;
    @include m {
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 100%;
        top: 0;
        z-index: 100;
        pointer-events: none;
      }
      &::before {
        left: 0;
        background: linear-gradient(to right, $color-bg 15%, rgba($color-bg, 0));
      }
      &::after {
        right: 0;
        background: linear-gradient(to left, $color-bg 15%, rgba($color-bg, 0));
      }
    }
    .scroll {
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scroll::-webkit-scrollbar {
      display: none;
    }
    .items {
      display: flex;
      justify-content: space-between;
      padding: 1rem 5.25rem;
      @include m {
        display: inline-flex;
        padding: .5rem 1.5rem;
        .button {
          font-size: 1rem;
          height: 2.5rem;
          white-space: nowrap;
        }
        .button + .button {
          margin-left: 1rem;
        }
      }
    }
  }

</style>
