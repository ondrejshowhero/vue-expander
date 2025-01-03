<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="(item, index) in carouselItems" :key="item">
        <div class="inner">
          <div class="text">
            <p class="lead">
              Top 9: Sønderjyske naturoplevelser
            </p>
            <h2 class="title">{{index + 1}}. {{item[0]}}</h2>
            <p class="description">
              {{item[1]}}
            </p>
            <a href="https://www.visitsonderjylland.dk/turist/overnatning/camping?utm_source=web-2022&utm_medium=havas&utm_campaign=camping-22" target="_blank" class="link" :data-track="item[0]" :data-res-action="`1780-${item[3]}`">
              Læs mere
            </a>
          </div>
          <div class="image">
            <img :src="getImage(item[2])">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider'

  export default {
    name: 'ExpanderGallery',
    data() {
      return {
        carouselItems: [
          [
            'Aerodynamisk design',
            'IONIQ 6 inspireras av konceptbilen Prophecy och kännetecknas av rena, enkla linjer och en slank aerodynamisk form som beskrivs som Emotional Efficiency.',
            'slide-1',
          ],
          [
            'Upp till 610 km räckvidd',
            'Tack vare en ultralåg luftmotståndskoefficient på endast 0,21 och ett anpassningsbart körsystem kan IONIQ 6 köra upp till 610 km på en enda laddning.',
            'slide-2',
            'Slutgiltigt typgodkännande för räckvidd är ännu ej fastställt.',
          ],
          [
            'Innovativa material',
            'Innovativa och delvis återvunna material har använts vid skapandet av IONIQ 6, bland annat garn som tillverkats av återvunna plastflaskor och marint avfall.',
            'slide-3',
          ],
          [
            'Flexibla säten',
            'Den rymliga interiören gör att passagerarna i framsätet enkelt kan sträcka på benen och koppla av under resan. Framsätena är enkla att justera och kan fällas ner med ett enda knapptryck. ',
            'slide-4',
          ],
        ]
      }
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 0,
        controls: true,
        nav: false,
        autoplay: false,
        autoplayButtonOutput: false,
        loop: false
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/carousel/${image}.webp`)
      }
    }
  }
</script>

<style lang="scss">
  @import "node_modules/tiny-slider/src/tiny-slider";
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-slider {
    position: relative;
    .inner {
      position: relative;
      @include d {
        display: flex;
        .text,
        .image {
          width: 50%;
        }
      }
      .text {
        background: $color-2;
        padding: 2rem 3rem;
        @include d {
          padding: 4rem 5rem 0;
        }
      }
      .lead {
        margin-bottom: 1.5rem;
        font-size: .75rem;
        font-weight: bold; 
        color: #ADACAC;
        @include d {
          font-size: 1rem;
        }
      }
      .title {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        font-weight: bold;
        @include d {
          margin-bottom: 1.75rem;
          font-size: 2.5rem;
        }
      }
      .description {
        font-size: .875rem;
        @include d {
          font-size: 1rem;
        }
      }
      .link {
        display: inline-block;
        font-size: .875rem;
        color: $color-1;
        text-decoration: underline;
        transition: .15s;
        margin-top: 1rem;
        @include d {
          position: absolute;
          left: 5rem;
          bottom: 3.5rem;
          font-size: 1rem;
        }
        &:hover {
          color: darken($color-1, 10%);
        }
      }
    }
    .tns-controls {
      outline: 0;
      @include d {
        position: absolute;
        bottom: 2.5rem;
        left: 13rem;
        z-index: 10;
      }
      button {
        height: 1.75rem;
        width: 1.75rem;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        border-radius: 50%;
        background-color: $color-2 !important;
        @include m {
          position: absolute;
          top: 8.75rem;
          z-index: 100;
        }
        @include d {
          height: 3.125rem;
          width: 3.125rem;
          transition: .15s;
        }
        &:first-child {
          background: url('../assets/arr-l.svg') no-repeat center center / contain;
          @include m {
            left: .5rem;
          }
        }
        &:last-child {
          background: url('../assets/arr-r.svg') no-repeat center center / contain;
          @include m {
            right: .5rem;
          }
          @include d {
            margin-left: 0.625rem;
          }
        }
        &:hover {
          background-color: darken($color-2, 5%) !important;
        }
        &[disabled] {
          opacity: .4;
          &:hover {
            background-color: transparent !important;
          }
        }
      }
    }
  }

</style>

