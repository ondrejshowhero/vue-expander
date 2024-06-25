<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in items" :key="item">
        <div class="inner">
          <a href="https://secure.adnxs.com/clktrb?id=804318&redir=https://ad.doubleclick.net/ddm/trackclk/N1081275.5277392SHOWHEROESABDIGI/B31866215.393764859;dc_trk_aid=585067376;dc_trk_cid=139917410;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="image" @click="$emit('track', 'image')">
            <picture>
              <source :srcset="getImage(item[2])" media="(min-width: 480px)">
              <img :src="getImage(item[2], true)">
            </picture>
          </a>
          <div class="text">
            <h2 class="heading">{{item[0]}}</h2>
            <p v-html="item[1]"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="counter">{{currentSlide}}/{{items.length}}</div>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider'

  export default {
    name: 'ExpanderSlider',
    emits: ['track'],
    data() {
      return {
        currentSlide: 1,
        items: [
          [
            "DRA TUNGT FÖR DINA FRITIDSINTRESSEN",
            "Mazda CX-60 laddhybrid har en maximal dragvikt på hela 2 500 kg. Med vår halvautomatiska dragkrok kan du inte bara dra tungt, det är också enkelt att använda den. Så vare sig du ska dra segelbåten på släp eller tävla med din häst är din Mazda CX-60 alltid redo.",
            "1.jpg",
          ],
          [
            "Ansiktsigenkänning",
            "Genom att använda ansiktsigenkänning för att identifiera föraren kan bilen känna igen och automatiskt återställa en lång rad förarinställningar, exempelvis körställning, ljud och klimatanläggning.",
            "2.jpg",
          ],
          [
            "KVALITETSMATERIAL",
            "Den genomtänkta interiören i nya Mazda CX-60 är en oas av lugn och handgjord skönhet. Våra designers valde material av hög kvalitet, med vävda tyger och traditionella sömmar blandat med äkta lönn, allt för att skapa ett lugnt, elegant och sofistikerat utrymme. Inget är överflödigt eller ren utsmyckning. Resultatet är en enkel och behaglig kupé som ger föraren och passagerarna lugn.",
            "3.jpg",
          ],
          [
            "10 ÅRS GARANTI",
            "Visste du att Mazda har Sveriges längsta bilgaranti? Efter att den ordinarie tre års nybilsgarantin går ut erbjuder Mazda ytterligare sju års förlängd komponentgaranti.",
            "4.jpg",
          ],
        ]
      }
    },
    mounted() {
      let slider = tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 0,
        controls: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        speed: 500,
        loop: false
      });
      slider.events.on('indexChanged', (e) => {
        this.currentSlide = e.index + 1
      })
    },
    methods: {
      getImage(image, mobile) {
        let subdir = ""
        if (mobile)
          subdir = "mobile/"
        return require(`@/assets/slider/${subdir}${image}`)
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
    padding-bottom: 5.625rem;
    background: linear-gradient(to right, $color-3 50%, #fff 50%);
    @include d {
      padding-bottom: 0;
      background: none;
      // background: linear-gradient(to left, $color-3 22%, #fff 22%);
    }
    .inner {
      @include d {
        display: flex;
        .image {
          width: 43.3%;
        }
      }
      .image {
        display: block;
      }
      .text {
        padding: 4.25rem 2.375rem 3.25rem;
        @include d {
          width: 56.7%;
          padding: 5.5rem 5.5rem 3.25rem 4.375rem;
          background: linear-gradient(to left, $color-3 39%, #fff 39%);
        }
        .heading {
          font-size: 1.5rem;
          font-weight: normal;
          text-transform: uppercase;
          @include d {
            font-size: 2rem;
            margin-bottom: 1.875rem;
            padding-right: 15%;
          }
        }
        .link {
          display: inline-block;
          margin-top: 2rem;
          text-decoration: underline;
          &:hover {
            color: $color-1;
          }
        }
      }
    }
    ::v-deep .tns-controls {
      outline: 0;
      position: absolute;
      bottom: 4.25rem;
      left: 2.375rem;
      z-index: 10;
      @include d {
        left: calc(43.3% + 4.375rem);
      }
      button {
        width: 2.25rem;
        height: 1.125rem;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        @include d {
          width: 2.5rem;
          height: 1.375rem;
        }
        &:first-child {
          background: url('../assets/arr-l.svg') no-repeat left center / contain;
        }
        &:last-child {
          margin-left: 4rem;
          background: url('../assets/arr-r.svg') no-repeat right center / contain;
          @include d {
            margin-left: 6.125rem;
          }
        }
        &[disabled] {
          opacity: .3;
        }
      }
    }
    .counter {
      position: absolute;
      left: 2.375rem;
      bottom: 4.125rem;
      width: 8.5rem;
      font-size: 1.125rem;
      font-weight: bold;
      text-align: center;
      @include d {
        left: calc(43.3% + 4.375rem);
        width: 11.125rem;
        font-size: 1.25rem;
      }
    }
  }

</style>

