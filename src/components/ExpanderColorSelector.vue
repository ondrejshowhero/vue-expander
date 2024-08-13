<template>
  <div class="wrapper">

    <Transition mode="out-in">

      <div class="container" :key="activeIndex">
        <div class="text">
          <h1 class="heading">Eksteriørfarger</h1>
          <h2 class="subheading">{{ currentItem[0] }}</h2>
          <p class="lead">
            {{ currentItem[1] }}
          </p>
          <a href="https://secure.adnxs.com/clktrb?id=808702&redir=https://www.volvocars.com/no/build/ex30-electric/?utm_kxconfid=u1ih78asv&utm_source=showheroes&utm_medium=display&utm_content=electrification_display_1x1_expander&utm_campaign=no_electrification_awareness_2408_nameplates_tactical_10027-thinking-small&sourceapplicationinformation=no_elc_awr_npl" target="_blank" class="cta">Bygg din egen ></a>
          <a href="https://secure.adnxs.com/clktrb?id=808702&redir=https://www.volvocars.com/no/build/ex30-electric/?utm_kxconfid=u1ih78asv&utm_source=showheroes&utm_medium=display&utm_content=electrification_display_1x1_expander&utm_campaign=no_electrification_awareness_2408_nameplates_tactical_10027-thinking-small&sourceapplicationinformation=no_elc_awr_npl" target="_blank" class="link"></a>
        </div>
        <div class="image">
          <div class="container">
              <img :src="getImage(currentItem[2])">
          </div>
        </div>
      </div>
    </Transition>

    <div class="colors">
      <!-- <div class="scroll"> -->
        <div class="items">
          <button v-for="item, index in items" :key="item" :class="{active: isActive(index)}" @click="setActive(index)">
            <div :class="item[3]">
              <span class="color"></span>
            </div>
          </button>
        </div>
      <!-- </div> -->
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ExpanderColorSlector',
    emits: ['track'],
    data() {
      return {
        activeIndex: 0,
        items: [
          [
            'Moss Yellow',
            'Denne livlige gulfargen er inspirert av lav på svensk granitt og laget spesielt for EX30. Den gir en sterk og frisk karakter som virkelig får din Volvo SUV til å skille seg ut fra mengden.',
            'yellow.jpg',
            'yellow',
            '',
          ],
          [
            'Vapour Grey',
            'En ensfarget metallic-effekt i nøytral gråfarge med et diffust snev, inspirert av værbitte nordiske kalksteinshus. Gir bilen et lyst og sprekt utseende. Den ensfargede flaten blir til lys, skimrende metallic i sollys.',
            'grey.jpg',
            'grey',
            '',
          ],
          [
            'Cloud Blue',
            'En ren, lys ensfarget blå med et anstrøk av hvitt, inspirert av den kalde luften i snøkledd svensk vinterlandskap. Dette er en leken farge som fremhever det grafiske preget til Volvoen din.',
            'blue.jpg',
            'blue',
            '',
          ],
          [
            'Onyx Black',
            'Elegant, dyp svart metallic som gnistrer i sterkt dagslys og antar en ren, mørk fargetone i redusert lys.',
            'black.jpg',
            'black',
            '',
          ],
          [
            'Chrystal White',
            'Skimrende, glitrende hvit perlefarge bygget opp med tre strøk, som gir en dempet, dyp perlemoreffekt med silkeblank overflate og rent, eksklusivt utseende.',
            'white.jpg',
            'white',
            '',
          ],
        ]
      }
    },
    computed: {
      currentItem() {
        return this.items[this.activeIndex]
      }
    },
    methods: {
      setActive(index) {
        this.activeIndex = index
      },
      isActive(index) {
        return this.activeIndex === index
      },
      getImage(image) {
        return require(`@/assets/colors/${image}`)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/mixins.scss';

  .wrapper {
    position: relative;
  }

  .container {
    @include d {
      display: flex;
      justify-content: space-between;
    }
    .text {
      @include d {
        width: 28.5rem;
      }
    }
    .image {
      margin-top: 1.5rem;
      @include d {
        width: 28.5rem;
        margin-top: 0;
      }
    }
  }

  .colors {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    @include d {
      position: absolute;
      left: 0;
      bottom: 0;
      justify-content: start;
      margin-top: 0;
    }
    button {
      display: inline-flex;
      width: 2.25rem;
      height: 2.25rem;
      overflow: hidden;
      transition: .15s;
      @include d {
        width: 1.625rem;
        height: 1.625rem;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid transparent;
      }
      span {
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        @include d {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
      .yellow {
        span {
          background: #baae33,
        }
      }
      .grey {
        span {
          background: #9b9da8,
        }
      }
      .blue {
        span {
          background: #c8d8ef,
        }
      }
      .black {
        span {
          background: #444444,
        }
      }
      .white {
        span {
          background: #f0f0f0,
        }
      }
      &.active,
      &:hover {
        .yellow {
          border-color: #baae33,
        }
        .grey {
          border-color: #9b9da8,
        }
        .blue {
          border-color: #c8d8ef,
        }
        .black {
          border-color: #444444,
        }
        .white {
          border-color: #f0f0f0,
        }
      }
    }
    button + button {
      margin-left: .75rem;
    }
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
