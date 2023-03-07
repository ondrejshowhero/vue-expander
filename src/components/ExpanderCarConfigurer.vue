<template>
  <div class="configurer">
    <div class="image-wrap">
      <Transition>
      <div class="image" :key="active">
        <img :src="getImage()">
      </div>
      </Transition>
    </div>
    <div class="colors">
      <h1 class="title" ref="title">Vælg farve</h1>
      <div class="items">
        <button v-for="color, index in item.colors" :key="color" @click="setActive(index)" @mouseover="setTitle(color[0])" @mouseleave="unsetTitle()" :class="{active: isActive(index)}" class="item">
          <div class="color" :class="`color-${item.title}-${index}`"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderCarConfigurer',
    props: {
      item: { type: Object, required: true },
    },
    emits: ['track'],
    data() {
      return {
        active: 0
      }
    },
    watch: {
      item() {
        this.active = 0
      }
    },
    methods: {
      isActive(id) {
        return this.active == id
      },
      setActive(id) {
        this.active = id
        this.$emit('track', `color-${this.item.title}-${this.item.colors[id][1]}`)
      },
      getImage() {
        return require(`@/assets/models/${this.item.title}/${this.item.colors[this.active][1]}.jpg`)
      },
      getColorImage(name) {
        return require(`@/assets/models/${this.item.title}/colors/${name}.jpg`)
      },
      setTitle(name) {
        this.$refs.title.innerHTML = name
      },
      unsetTitle() {
        this.$refs.title.innerHTML = 'Vælg farve'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .image-wrap {
    position: relative;
    aspect-ratio: 111/50;
    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }

  }

  .colors {

    .title {
      margin: 1.125rem 0;
      font-size: 1.25rem;
      font-weight: bold;
      text-align: center;
    }

    .items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      @include d {
        padding: 0 10%;
      }
    }

    .item {
      position: relative;
      margin: 0 .5rem .75rem;
      @include d {
        margin: 0 .875rem .875rem;
      }
    }
    .color {
      width: 2rem;
      height: 2rem;
      position: relative;
      border: 0.3px solid #FFFFFF;
      border-radius: 50%;
      box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
      transition: .15s;
      @include d {
        width: 2.25rem;
        height: 2.25rem;
      }
      &::after {
        content: '';
        @include cover;
        background: linear-gradient(135deg,rgba(222,227,230,.7),rgba(232,235,237,.4) 25%,hsla(0,0%,100%,.1) 50%,rgba(227,234,243,.4) 75%,rgba(216,226,239,.7));
        border-radius: 50%;
      }
      &:hover {
        box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.4);
      }
    }
    .active {
      &::before {
        content: '';
        position: absolute;
        right: -.25rem;
        top: -.25rem;
        z-index: 100;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: $color-1 url('../assets/check.png') no-repeat center center / 60% auto;
      }
    }
  }
  
  .color-techno-0 {
    background: rgb(9, 9, 9);
  }
  .color-techno-1 {
    background: linear-gradient(to right, rgb(9, 9, 9) 50%, rgb(255, 255, 255) 50%);
  }
  .color-techno-2 {
    background: linear-gradient(to right, rgb(9, 9, 9) 50%, rgb(142, 142, 142) 50%);
  }
  .color-techno-3 {
    background: rgb(177, 14, 20);
  }
  .color-techno-4 {
    background: linear-gradient(to right, rgb(177, 14, 20) 50%, rgb(9, 9, 9) 50%);
  }
  .color-techno-5 {
    background: linear-gradient(to right, rgb(177, 14, 20) 50%, rgb(142, 142, 142) 50%);
  }
  .color-techno-6 {
    background: rgb(255, 255, 255);
  }
  .color-techno-7 {
    background: linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(9, 9, 9) 50%);
  }
  .color-techno-8 {
    background: linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(142, 142, 142) 50%);
  }
  .color-techno-9 {
    background: rgb(15, 14, 144);
  }
  .color-techno-10 {
    background: linear-gradient(to right, rgb(15, 14, 144) 50%, rgb(9, 9, 9) 50%);
  }
  .color-techno-11 {
    background: linear-gradient(to right, rgb(15, 14, 144) 50%, rgb(255, 255, 255) 50%);
  }
  .color-techno-12 {
    background: linear-gradient(to right, rgb(15, 14, 144) 50%, rgb(142, 142, 142) 50%);
  }
  .color-techno-13 {
    background: rgb(158, 158, 158);
  }
  .color-techno-14 {
    background: linear-gradient(to right, rgb(158, 158, 158) 50%, rgb(9, 9, 9) 50%);
  }
  .color-techno-15 {
    background: linear-gradient(to right, rgb(158, 158, 158) 50%, rgb(255, 255, 255) 50%);
  }
  .color-techno-16 {
    background: rgb(142, 142, 142);
  }
  .color-techno-17 {
    background: linear-gradient(to right, rgb(142, 142, 142) 50%, rgb(9, 9, 9) 50%);
  }
  .color-techno-18 {
    background: linear-gradient(to right, rgb(142, 142, 142) 50%, rgb(255, 255, 255) 50%);
  }
  .color-equilibre-0 {
    background: rgb(9, 9, 9);
  }
  .color-equilibre-1 {
    background: rgb(177, 14, 20);
  }
  .color-equilibre-2 {
    background: rgb(255, 255, 255);
  }
  .color-equilibre-3 {
    background: rgb(15, 14, 144);
  }
  .color-equilibre-4 {
    background: rgb(158, 158, 158);
  }
  .color-equilibre-5 {
    background: rgb(142, 142, 142);
  }
  .color-iconic-0 {
    background: linear-gradient(to right, rgb(9, 9, 9) 50%, rgb(142, 142, 142) 50%);
  }
  .color-iconic-1 {
    background: linear-gradient(to right, rgb(177, 14, 20) 50%, rgb(9, 9, 9) 50%);
  }
  .color-iconic-2 {
    background: linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(9, 9, 9) 50%);
  }
  .color-iconic-3 {
    background: linear-gradient(to right, rgb(15, 14, 144) 50%, rgb(9, 9, 9) 50%);
  }
  .color-iconic-4 {
    background: linear-gradient(to right, rgb(158, 158, 158) 50%, rgb(9, 9, 9) 50%);
  }
  .color-iconic-5 {
    background: linear-gradient(to right, rgb(142, 142, 142) 50%, rgb(9, 9, 9) 50%);
  }


.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease;
}
.v-leave-active {
  transition-delay: .3s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
