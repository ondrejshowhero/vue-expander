<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item, i in items" :key="item">
        <div class="inner">
          <img :src="getImage(item[0])">
          <template  v-for="hotspot, j in item[1]" :key="hotspot">
            <button class="hotspot" :class="`hotspot-${i}-${j}`" @click="setActive(`${i}-${j}`)"></button>
            <Transition>
              <div class="detail" :class="`detail-${i}-${j}`" v-show="isActive(`${i}-${j}`)">
                <a :href="hotspot[3]" target="_blank" class="link" @click="$emit('track', 'product-'+hotspot[4])">
                  <div class="image">
                    <img :src="getProductImage(hotspot[2])">
                  </div>
                  <div class="info">
                    <strong class="line">Bastua</strong>
                    <h3 class="title">{{hotspot[0]}}</h3>
                    <p class="price">
                      {{hotspot[1]}}
                    </p>
                    <div class="cta">
                      TUTUSTU &raquo;
                    </div>
                  </div>
                </a>
                <button class="close" @click="unsetActive()">x</button>
              </div>
            </Transition>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider'

  export default {
    name: 'ExpanderShowcase',
    emits: ['track'],
    data() {
      return {
        active: null,
        items: [
          [
            'ikea_bastua_kuvat_inspis_01.jpg',
            [
              [
                'Led-lyhty',
                '24,99',
                'ikea_bastua_kuvat_inspis_01_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-00542597/',
              ],
              [
                'Lattiatyyny',
                '59,99',
                'ikea_bastua_kuvat_inspis_01_tuotekortti_02.jpg',
                'https://www.ikea.com/fi/fi/p/-10544727/',
              ],
              [
                'Kylpytakki',
                '29,99',
                'ikea_bastua_kuvat_inspis_01_tuotekortti_03.jpg',
                'https://www.ikea.com/fi/fi/p/-50542566/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_02.jpg',
            [
              [
                'Tarjotin',
                '9,99',
                'ikea_bastua_kuvat_inspis_02_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-60542679/',
              ],
              [
                'Lasi',
                '4,99',
                'ikea_bastua_kuvat_inspis_02_tuotekortti_02.jpg',
                'https://www.ikea.com/fi/fi/p/-70542626/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_03.jpg',
            [
              [
                'Laudeliina 45x60 cm',
                '6,99',
                'ikea_bastua_kuvat_inspis_03_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-00544718/',
              ],
              [
                'Tyyny',
                '6,99',
                'ikea_bastua_kuvat_inspis_03_tuotekortti_02.jpg',
                'https://www.ikea.com/fi/fi/p/-50544933/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_04.jpg',
            [
              [
                'Suihkuverho',
                '16,99',
                'ikea_bastua_kuvat_inspis_04_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-80544941/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_05.jpg',
            [
              [
                'Kannu',
                '19,99',
                'ikea_bastua_kuvat_inspis_05_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-60542622/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_06.jpg',
            [
              [
                'Vesipullo',
                '12,99',
                'ikea_bastua_kuvat_inspis_06_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-70542481/',
              ],
              [
                'Kassi',
                '2,99',
                'ikea_bastua_kuvat_inspis_06_tuotekortti_02.jpg',
                'https://www.ikea.com/fi/fi/p/-90542668/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_07.jpg',
            [
              [
                'Kylpytakki',
                '29,99',
                'ikea_bastua_kuvat_inspis_07_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-50542566/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_08.jpg',
            [
              [
                'Led-lyhty',
                '24,99',
                'ikea_bastua_kuvat_inspis_08_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-00542597/',
              ],
              [
                'Tuoksukynttilä',
                '7,99',
                'ikea_bastua_kuvat_inspis_08_tuotekortti_02.jpg',
                'Linkki: https://www.ikea.com/fi/fi/p/-10542605/',
              ],
            ]
          ],
          [
            'ikea_bastua_kuvat_inspis_09.jpg',
            [
              [
                'Kylpypyyhe',
                '19,99',
                'ikea_bastua_kuvat_inspis_09_tuotekortti_01.jpg',
                'https://www.ikea.com/fi/fi/p/-50542613/',
              ],
              [
                'Kassi',
                '4,99',
                'ikea_bastua_kuvat_inspis_09_tuotekortti_02.jpg',
                'https://www.ikea.com/fi/fi/p/-40542637/',
              ],
            ]
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
        speed: 750,
        loop: true
      });
      slider.events.on('indexChanged', () => {
        this.unsetActive()
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/showcase/${image}`)
      },
      getProductImage(image) {
        return require(`@/assets/showcase/products/${image}`)
      },
      setActive(index) {
        this.active = index
      },
      isActive(index) {
        return this.active == index
      },
      unsetActive() {
        this.active = null
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
      position: relative;
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
    .hotspot {
      position: absolute;
      left: 0;
      top: 0;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%);
      transform: translate(-50%, -50%);
      opacity: 1;
      animation: pulse 1s ease-in-out 0s infinite alternate forwards;
      cursor: pointer;
      &:hover {
        animation: none;
      }
      &.hotspot-0-0 {
        left: 14.8%;
        top: 37.1%;
      }
      &.hotspot-0-1 {
        left: 52.2%;
        top: 60.5%;
      }
      &.hotspot-0-2 {
        left: 79.1%;
        top: 34.1%;
      }
      &.hotspot-1-0 {
        left: 65.8%;
        top: 34.3%;
      }
      &.hotspot-1-1 {
        left: 26.1%;
        top: 25.7%;
      }
      &.hotspot-2-0 {
        left: 56.4%;
        top: 62.1%;
      }
      &.hotspot-2-1 {
        left: 60.1%;
        top: 24.1%;
      }
      &.hotspot-3-0 {
        left: 47.4%;
        top: 24.8%;
      }
      &.hotspot-4-0 {
        left: 55.1%;
        top: 58.9%;
      }
      &.hotspot-5-0 {
        left: 27.7%;
        top: 33.6%;
      }
      &.hotspot-5-1 {
        left: 38.1%;
        top: 55.3%;
      }
      &.hotspot-6-0 {
        left: 23.4%;
        top: 43.3%;
      }
      &.hotspot-7-0 {
        left: 38.1%;
        top: 31.4%;;
      }
      &.hotspot-7-1 {
        left: 66.9%;
        top: 51.9%;
      }
      &.hotspot-8-0 {
        left: 82.7%;
        top: 48%;
      }
      &.hotspot-8-1 {
        left: 58.1%;
        top: 58.3%;;
      }
    }
    .detail {
      position: absolute;
      left: 0;
      top: 0;
      width: 20rem;
      height: 22rem;
      color: #000;
      background: #fff;
      @include m {
        position: absolute;
        left: 3.5rem !important;
        top: 5% !important;
        right: 3.5rem;
        width: auto;
        height: 90%;
        box-shadow: 0 0 10rem #000;
        .image {
          width: 75%;
          margin: 0 auto;
        }
      }
      .info {
        margin-top: 1rem;
        text-align: left;
        line-height: 1.1;
        padding-left: 1.5rem;
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
          position: absolute;
          right: 1.5rem;
          bottom: 1.75rem;
          padding: .5rem 1rem;
          margin-top: 1.5rem;
          font-size: 1.125rem;
          font-weight: bold;
          color: #fff;
          background: $color-2;
          transition: .15s;
          &:hover {
            background: $color-3;
          }
        }
      }
      .close {
        position: absolute;
        right: .5rem;
        top: 0;
        padding: .5rem;
        font-weight: bold;
        font-size: 1.125rem;
        transition: .15s;
        cursor: pointer;
        &:hover {
          color: $color-3;
        }
      }
      &.detail-0-0 {
        left: 26.8%;
        top: 7.1%;;
      }
      &.detail-0-1 {
        left: 18.2%;
        top: 39.5%;
      }
      &.detail-0-2 {
        left: 60.1%;
        top: 46.1%;
      }
      &.detail-1-0 {
        left: 49.8%;
        top: 47.3%;
      }
      &.detail-1-1 {
        left: 18.1%;
        top: 45.7%;
      }
      &.detail-2-0 {
        left: 11.4%;
        top: 43.1%;
      }
      &.detail-2-1 {
        left: 12.1%;
        top: 11.1%;
      }
      &.detail-3-0 {
        left: 11.4%;
        top: 36.8%;
      }
      &.detail-4-0 {
        left: 61.1%;
        top: 8.9%;
      }
      &.detail-5-0 {
        left: 37.7%;
        top: 3.6%;
      }
      &.detail-5-1 {
        left: 44.1%;
        top: 46.3%;
      }
      &.detail-6-0 {
        left: 23.4%;
        top: 47.3%;
      }
      &.detail-7-0 {
        left: 15.1%;
        top: 46.4%;
      }
      &.detail-7-1 {
        left: 26.9%;
        top: 27.9%;
      }
      &.detail-8-0 {
        left: 48.7%;
        top: 48%;
      }
      &.detail-8-1 {
        left: 11.1%;
        top: 40.3%;
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
          background: url('../assets/arr-l.png') no-repeat center center / contain;
          @include d {
            left: 2rem;
          }
        }
        &:last-child {
          right: 1rem;
          background: url('../assets/arr-r.png') no-repeat center center / contain;
          @include d {
            right: 2rem;
          }
        }
      }
    }
  }

  @keyframes pulse {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity .2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

</style>

