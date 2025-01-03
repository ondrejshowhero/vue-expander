<template>
  <div class="items">
    <div v-for="item, index in items" :key="item" class="item" :class="{active: isActive(index)}">
      <button class="toggle" @click="toggle(index)">
        {{ item[0] }}
      </button>
      <Transition @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave" @leave="onLeave">
        <div class="detail" v-show="isActive(index)">
          <div class="content">
            <p>
              {{item[1]}}
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderAccordion',
    emits: ['track'],
    data() {
      return {
        active: null,
        items: [
          [
            'Can I haz accordion style component?',
            'No, you can bike just as you are used to. IT has been programmed with thousands of bike rides, and only reacts when a movement is distinctive of that of an accident.'
          ],
          [
            'How does this jeezless thing work?',
            'Do like hundreds of thousands other users, simply zip it up, get on your bike and close the tab to active. Just remember to open the tab to deactivate once you reach your destination.'
          ],
        ]
      }
    },
    methods: {
      isActive(id) {
        return id === this.active
      },
      toggle(id) {
        if (this.active === id)
          this.active = null
        else
          this.active = id
        this.$emit(`accordion-${id+1}`)
      },
      close() {
        this.active = null
      },
      onEnter(e) {
        let h = e.querySelector('.content').offsetHeight
        e.style.height = `${h}px`
      },
      onAfterEnter(e) {
        e.style.height = `auto`
      },
      onBeforeLeave(e) {
        let h = e.querySelector('.content').offsetHeight
        e.style.height = `${h}px`
      },
      onLeave(e) {
        e.style.height = 0
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .items {
    width: 100%;
    max-width: 39rem;
    margin: 0 auto;
    .item {
      background: #fff;
    }
    .item + .item {
      margin-top: .5rem;
    }
    .toggle {
      position: relative;
      display: block;
      width: 100%;
      padding: .875rem 3rem .875rem 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: $color-3;
      text-align: left;
      transition: background .3s;
      @include d {
        font-size: 1.125rem;
      }
      &:hover {
        background: #ddd;
      }
      &::after {
        content: '';
        position: absolute;
        right: 1rem;
        top: 0;
        width: 1.25rem;
        height: 100%;
        // background: url('../assets/arr-d.svg') no-repeat center center / contain;
        transition: transform .3s;
      }
    }
    .active .toggle::after {
      transform: rotate(180deg);
    }
    .detail {
      height: 0;
      overflow: hidden;
      transition: .3s;
    }
    .content {
      p {
        padding: .25rem 1rem 1rem;
        font-size: .875rem;
        @include d {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }

</style>
