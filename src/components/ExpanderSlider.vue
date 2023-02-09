<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in items" :key="item">
        <a :href="item[3]" target="_blank" class="inner" @click="$emit('track', 'product-'+item[4])">
          <div class="image">
            <img :src="getImage(item[2])">
          </div>
          <div class="info">
            <strong class="line">Bastua</strong>
            <h3 class="title">{{item[0]}}</h3>
            <p class="price">
              {{item[1]}}
            </p>
            <div class="cta">
              TUTUSTU &raquo;
            </div>
          </div>
        </a>
      </div>
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
            'Kylpypyyhe',
            '19,99',
            'ikea_bastua_kuvat_tuote_01',
            'https://www.ikea.com/fi/fi/p/-30542609/',
            'kylpypyyhe',
          ],
          [
            'Kannu',
            '19,99',
            'ikea_bastua_kuvat_tuote_02',
            'https://www.ikea.com/fi/fi/p/-60542622/',
            'kannu',
          ],
          [
            'Saunakiulu',
            '34,99',
            'ikea_bastua_kuvat_tuote_03',
            'https://www.ikea.com/fi/fi/p/-80542541/',
            'saunakiulu',
          ],
          [
            'Suihkuverho',
            '16,99',
            'ikea_bastua_kuvat_tuote_04',
            'https://www.ikea.com/fi/fi/p/-80544941/',
            'suihkuverho',
          ],
          [
            'Penkki',
            '69,99',
            'ikea_bastua_kuvat_tuote_05',
            'https://www.ikea.com/fi/fi/p/-40542487/',
            'penkki',
          ],
          [
            'Lattiatyyny',
            '59,99',
            'ikea_bastua_kuvat_tuote_06',
            'https://www.ikea.com/fi/fi/p/-10544727/',
            'lattiatyyny',
          ],
          [
            'Apupöytä',
            '69,99',
            'ikea_bastua_kuvat_tuote_07',
            'https://www.ikea.com/fi/fi/p/-60542491/',
            'apupöytä',
          ],
          [
            'Kylpytakki',
            '29,99',
            'ikea_bastua_kuvat_tuote_08',
            'https://www.ikea.com/fi/fi/p/-30542548/',
            'kylpytakki',
          ],
          [
            'Laudeliina 45x60 cm',
            '6,99',
            'ikea_bastua_kuvat_tuote_09',
            'https://www.ikea.com/fi/fi/p/-00544718/',
            'laudeliina 45x60 cm',
          ],
          [
            'Led-lyhty',
            '24,99',
            'ikea_bastua_kuvat_tuote_10',
            'https://www.ikea.com/fi/fi/p/-00542597/',
            'led-lyhty',
          ],
        ]
      }
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 1,
        gutter: 20,
        controls: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayButtonOutput: false,
        speed: 750,
        loop: true,
        responsive: {
          480: {
            items: 3
          }
        }
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/products/${image}.jpg`)
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
    padding: .5rem 3rem 2rem;
    @include d {
      padding: 3rem 7rem 3.5rem;
    }
    .inner {
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
    .info {
      color: #000;
      text-align: left;
      line-height: 1.1;
      padding-left: 2rem;
      @include d {
        padding-left: 3rem;
      }
      .line {
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        @include d {
          font-size: 1.375rem;
        }
      }
      .title {
        font-size: 1rem;
        @include d {
          font-size: 1.375rem;
        }
      }
      .price {
        font-size: 1.5rem;
        font-weight: bold;
        @include d {
          font-size: 2rem;
        }
      }
      .cta {
        display: inline-block;
        padding: .5rem 1rem;
        margin-top: 1.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
        background: $color-2;
        transition: .15s;
        &:hover {
          background: $color-3;
        }
      }
    }
    :deep(.tns-controls) {
      outline: 0;
      button {
        position: absolute;
        top: 50%;
        z-index: 1000;
        height: 1.5rem;
        width: 1.5rem;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        transform: translate(0, -50%);
        transition: .15s;
        @include d {
          height: 2.625rem;
          width: 2.625rem;
        }
        &:hover {
          opacity: .8;
        }
        &:first-child {
          left: 1rem;
          background: url('../assets/arr-l-g.png') no-repeat center center / contain;
          @include d {
            left: 2rem;
          }
        }
        &:last-child {
          right: 1rem;
          background: url('../assets/arr-r-g.png') no-repeat center center / contain;
          @include d {
            right: 2rem;
          }
        }
      }
    }
  }

</style>

