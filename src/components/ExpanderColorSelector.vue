<template>
  <div class="image">
    <div class="container">
      <Transition mode="in-out">
        <img :src="getCurrentImage()" :key="activeIndex">
      </Transition>
    </div>
  </div>
  <div class="colors">
    <div class="scroll">
      <div class="items">
        <button v-for="item, index in items" :key="item" :class="{active: isActive(index)}" @click="setActive(index)" @mouseover="setLabel(index)" @mouseleave="unsetLabel()">
          <img :src="getColorThumb(item[2])">
        </button>
      </div>
    </div>
  </div>
  <p class="label">
    {{currentLabel}}
  </p>
</template>

<script>
  export default {
    name: 'ExpanderColorSlector',
    emits: ['track'],
    data() {
      return {
        activeIndex: 0,
        currentLabel: 'Arctic White',
        items: [
          [
            'Arctic White',
            'CX-60_Homura_ArcticWhite.jpg',
            'CX3_CUT067_Color_Variation_Arctic White CLE.png',
            'arctic-white',
          ],
          [
            'Deep Crystal Blue',
            'CX-60_Homura_DeepCrystalBlue.jpg',
              'CX3_CUT067_Color_Variation_Deep Crystal Blue Mc.png',
            'deep-crystal-blue',
          ],
          [
            'Jet Black',
            'CX-60_Homura_JetBlack.jpg',
            'CX3_CUT067_Color_Variation_JET_Black.png',
            'jet-black',
          ],
          [
            'Machine Grey',
            'CX-60_Homura_MachineGrey.jpg',
            'Mazda3_16CYIPM_CUT067_COMMON_COLOR_MACHINE_GRAY.png',
            'machine-grey',
          ],
          [
            'Platinum Quartz',
            'CX-60_Homura_PlatinumQuartz.jpg',
            '2021_Mazda2_IPM5_COMMON_C25_EXT_Color_Chip.png',
            'platinum-quartz',
          ],
          [
            'Rhodium White',
            'CX-60_Homura_RhodiumWhite.jpg',
            '2023_CX-90_Common_037_EXT_Color chip_RhodiumWhite.png',
            'rhodium-white',
          ],
          [
            'Sonic Silver',
            'CX-60_Homura_SonicSilver.jpg',
            '2018_Mazda3_SDN_5HB_19CY_STD_Common_C57_EXT_Color_SONIC_SILVER_M_45P.png',
            'sonic-silver',
          ],
          [
            'Soul Red Crystal',
            'CX-60_Homura_SoulRedCrystal.jpg',
            'CX3_CUT067_Color_Variation_SOUL_RED.png',
            'soul-red-crystal',
          ],
        ]
      }
    },
    methods: {
      setActive(index) {
        this.activeIndex = index
        this.$emit('track', 'color-' + this.items[this.activeIndex][3])
      },
      isActive(index) {
        return this.activeIndex === index
      },
      getColorThumb(image) {
        return require(`@/assets/colors/${image}`)
      },
      getCurrentImage() {
        return require(`@/assets/models/${this.items[this.activeIndex][1]}`)
      },
      setLabel(index) {
        this.currentLabel = this.items[index][0]
      },
      unsetLabel() {
        this.currentLabel = this.items[this.activeIndex][0]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/mixins.scss';

  .image {
    @include d {
      width: 71%;
      margin: 0 auto;
    }
    .container {
      position: relative;
      aspect-ratio: 5000/2813;
      overflow: hidden;
      img {
        @include cover;
        @include m {
          transform: scale(1.1);
        }
      }
    }
  }

  .colors {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .625rem 0;
    @include m {
      position: relative;
      padding: 0;
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 2rem;
        height: 100%;
        pointer-events: none;
      }
      &::before {
        left: 0;
        background: linear-gradient(to right, #fff, #ffffff00);
      }
      &::after {
        right: 0;
        background: linear-gradient(to left, #fff, #ffffff00);
      }
      .scroll {
        overflow: auto;
      }
      .items {
        display: inline-flex;
        padding: 1rem 2rem;
      }
    }
    button {
      width: 11vw;
      margin: 0 2.5vw;
      border-radius: 50%;
      overflow: hidden;
      transition: .15s;
      @include d {
        width: 3rem;
        margin: 0 1rem;
      }
      &:hover {
          transform: scale(1.1);
      }
      &.active {
        transform: scale(1.375);
        box-shadow: 0 0 .5rem rgba(28, 118, 252, 0.51);
        @include d {
          box-shadow: 0 0 1.25rem rgba(28, 118, 252, 0.51);
        }
      }
    }
  }

  .label {
    padding: .625rem 0 2rem;
    font-size: 1.125rem;
    text-align: center;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity .4s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

</style>
