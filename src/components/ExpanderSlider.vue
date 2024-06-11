<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <article class="item" v-for="item in items" :key="item">
        <a href="https://secure.adnxs.com/clktrb?id=802715&redir=https://ad.doubleclick.net/ddm/trackclk/N9166.4661577SHOWHEROESNO/B31787091.391082153;dc_trk_aid=582555944;dc_trk_cid=212504900;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="inner" @click="$emit('track', 'test')">
          <div class="text">
            <h1 class="title">{{ item[0] }}</h1>
            <div v-html="item[1]"></div>
            <a href="https://secure.adnxs.com/clktrb?id=802715&redir=https://ad.doubleclick.net/ddm/trackclk/N9166.4661577SHOWHEROESNO/B31787091.391082153;dc_trk_aid=582555944;dc_trk_cid=212504900;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="cta">Les mer</a>
          </div>
          <div class="image">
            <img :src="getImage(item[2])">
          </div>
        </a>
      </article>
    </div>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider'

  export default {
    name: 'ExpanderSlider',
    emits: ['track'],
    data() {
      return {
        items: [
          [
            'Ekstrem fremkommelighet og svært gode kjøreegenskaper',
            `<p>Med firehjulstrekk som standard, et uavhengig bakhjulsoppheng, og et lavt tyngdepunkt, er kjøreegenskapene og fremkommeligheten til F-150 Lightning svært gode på alle underlag. Den kommer også med fire forskjellige kjøremoduser som automatisk optimaliserer den for forskjellige kjørescenarioer: Normal, Sport, Off-road og Tauing.</p>
            <p>Understellet er forsterket for å beskytte batteri og motor i tøft terreng. Batterikassen er vanntett og beskyttet av et støtabsorberende materiale.</p>`,
            'image-1.jpg'
          ],
          [
            'Enormt med plass til 5 personer og bagasje',
            '<p>Nye F-150 Lightning er en svært stor og romslig pickup for fem personer. Den er hele 5,91 meter lang, 2,44 meter bred og 1,99 meter høy. I tillegg til et stort plan og mye plass inni kupeen, har den en drenerbar Mega-Frunk på hele 400 liter under panseret hvor du kan frakte mer enn 180 kilo.</p>',
            'image-2.jpg',
          ],
          [
            'Det siste og beste av teknologi og smarte løsninger',
            '<p>Nye F-150 Lightning kommer blant annet som standard med smarte løsninger som Pro Trailer Backup-assistent som gjør at du enkelt styrer rygging med henger fra kupeen med et roteringshjul og ryggekamera. Med Pro Power om bord kan bilen fungere som strømkilde med inntil 2,3 kW. Du får varme og kjøling i forsetene og et premium lydanlegg fra B&O.</p>',
            'image-3.jpg'
          ]
        ]
      }
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 0,
        controls: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayButtonOutput: false,
        speed: 750,
        autoHeight: true,
        loop: true,
        responsive: {
          480: {
            autoHeight: false
          }
        }
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/slider/${image}`)
      }
    }
  }
</script>

<style lang="scss">
  @import "node_modules/tiny-slider/src/tiny-slider";
</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .wrapper {
    position: relative;
    .inner {
      margin: 0 2.375rem;
      box-shadow: 0rem 1.875rem 2.75rem 0rem rgba(0, 0, 0, 0.15), 0rem .25rem 1.5rem 0rem rgba(0, 0, 0, 0.19);
      border-radius: 0.875rem;
      background: #fff;
      overflow: hidden;
      @include d {
        display: flex;
        justify-content: space-between;
        .text {
          width: 33.125rem;
        }
        .image {
          width: 29.625rem;
        }
      }
      .text {
        padding: 4.375rem 2rem 2rem;
        color: #333;
        @include d {
          padding: 4.375rem 3.375rem 1rem 4rem;
        }
        .title {
          margin-bottom: 1.5rem;
          font-size: 2rem;
          font-weight: 700;
        }
        :deep(p) {
          max-width: 22.125rem;
        }
        :deep(p + p) {
          margin-top: 1rem;
        }
        .cta {
          margin-top: 1.125rem;
          padding: .9375rem 2.75rem;
        }
      }
    }

    :deep(.tns-ovh) {
      padding: 4rem 0 11.25rem;
    }
    
    :deep(.tns-controls) {
      outline: 0;
      button {
        position: absolute;
        height: 1.75rem;
        width: 1.75rem;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        border-radius: 50%;
        background-color: $color-2 !important;
        transform: translate(0, -50%);
        &:first-child {
          left: .5rem;
          // background: url('../assets/arr-l.svg') no-repeat center center / contain;
          @include d {
            left: 1rem;
          }
        }
        &:last-child {
          right: .5rem;
          // background: url('../assets/arr-r.svg') no-repeat center center / contain;
          @include m {
            right: 1rem;
          }
        }
        &[disabled] {
          display: none;
        }
      }
    }

    :deep(.tns-nav) {
      outline: 0;
      position: absolute;
      left: 2rem;
      top: 6.5rem;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      @include d {
        left: 6.5rem;
      }
      button {
        width: 2.625rem;
        height: 0.25rem;
        margin: 0 .4375rem 0 0;
        background: #989898;
        border-radius: 0.125rem;
      }
      .tns-nav-active {
        background: $color-text;
      }
    }
  }

</style>

