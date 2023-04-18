<template>
  <div class="container">
    <div class="image">
      <img src="@/assets/hotspots-background.jpg">
    </div>
    <div class="hotspots">
      <Transition>
        <button class="close-overlay" @click="closeDetail" v-show="isAnyActive()"></button>
      </Transition>
      <template v-for="item, index in items" :key="item">
        <button class="hotspot" :class="`hotspot-${index} position-${index}`" @click="showDetail(index)"></button>
        <Transition>
          <div class="detail" :class="`detail-${index} position-${index}`" v-show="isActive(index)">
            <div class="content">
              <h2 class="title">{{item[0]}}</h2>
              <p>
                {{item[1]}}
              </p>
              <button class="close" @click="closeDetail">
                <img src="@/assets/close.svg">
              </button>
            </div>
          </div>
        </Transition>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderHotspots',
    emits: ['track'],
    data() {
      return {
        active: null,
        items: [
          [
            'Item 1',
            'Kombiner Avolia med vores høje Corisa-skabe for at skabe et friskt, moderne udtryk.'
          ],
          [
            'Item 2',
            'Vælg monokrome greb eller en kontrast, og giv Avolia et personligt præg.'
          ],
          [
            'Item 3',
            'Avolias matte overflader er lavet af genanvendt PET, der både er bæredygtigt og nemt at rengøre – uanset hvilken farve du vælger.'
          ]
          [
            'Item 4',
            'Udstil din keramiksamling, eller vis dine kogebøger frem med vores nye åbne hylder i lys eller mørk eg.'
          ],
        ]
      }
    },
    methods: {
      isActive(id) {
        return id === this.active
      },
      isAnyActive() {
        return this.active !== null
      },
      showDetail(id) {
        this.active = id
      },
      closeDetail() {
        this.active = null
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .container {
    position: relative;
  }

  .hotspots {
    @include cover;

    .position-0 {
      left: 42%;
      top: 65%;
    }
    .position-1 {
      left: 59%;
      top: 62%;
    }
    .position-2 {
      left: 79%;
      top: 40%;
    }
    .position-3 {
      left: 70%;
      top: 74%;
    }

    .hotspot {
      position: absolute;
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      &::before {
        content: '';
        @include cover;
        background: #00000040;
        border-radius: 50%;
        animation: pulsate 1s ease-in-out 0s infinite alternate forwards;
      }
      &::after {
        content: '';
        position: absolute;
        width: .625rem;
        height: .625rem;
        left: .625rem;
        top: .625rem;
        background: #fff;
        border-radius: 50%;
      }
    }

    .detail {
      position: absolute;
      width: 17.75rem;
      transform: translate(-95%, 20%);
      z-index: 100;
      .content {
        position: relative;
        background: #fff;
        border-radius: .3125rem;
        padding: 1rem 1.5rem;
      }
      .title {
        font-size: 1.125rem;
        font-weight: bold;
        margin-bottom: .625rem;
      }
      p {
        font-size: .625rem;
      }
      .close {
        position: absolute;
        right: .75rem;
        top: .75rem;
      }
      @include m {
        display: flex;
        justify-content: center;
        align-items: center;
        left: 10%;
        top: 10%;
        width: 80%;
        height: 80%;
        transform: none;
        pointer-events: none;
        .content {
          max-width: 17.75rem;
          pointer-events: all;
        }
      }
    }

    .close-overlay {
      @include cover;
      background: #00000040;
      z-index: 10;
      @include d {
        display: none;
      }
    }
  }

  @keyframes pulsate {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(.6);
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity .25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

</style>
