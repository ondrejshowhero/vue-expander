<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="item" v-for="item in items" :key="item">
        <a href="https://secure.adnxs.com/clktrb?id=803243&redir=https://ad.doubleclick.net/ddm/trackclk/N900445.4661577SHOWHEROESNO/B31740359.391460102;dc_trk_aid=583008721;dc_trk_cid=212676196;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1" target="_blank" class="inner">
          <p class="title">
            {{ item[0] }}
          </p>
          <img :src="getImage(item[1])">
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
            'Park Pilot Assist',
            'park-pilot.jpg'
          ],
          [
            'Styreassistanse',
            'stearing.jpg'
          ],
          [
            '360° Kamera',
            'camera.jpg'
          ],
          [
            'Systemer for å unngå kollisjoner',
            'collision.jpg'
          ],
          [
            'Varsel om at døren åpner seg',
            'doors.jpg'
          ],
          [
            'Driver Alert System',
            'driver-alert.jpg'
          ],

        ]
      }
    },
    mounted() {
      tns({
        container: this.$refs.slider,
        items: 2,
        gutter: 12,
        controls: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        speed: 750,
        loop: true
      });
    },
    methods: {
      getImage(image) {
        return require(`@/assets/features/${image}`)
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
    @include d {
      padding: 0 1rem;
    }
    .inner {
      position: relative;
      display: block;
      .title {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding: .375rem .25rem .375rem .75rem;
        font-size: .875rem;
        font-weight: 500;
        background: $color-3;
        letter-spacing: -.015em;
      }
    }
    
    :deep(.tns-controls) {
      outline: 0;
      button {
        position: absolute;
        top: 0;
        height: 100%;
        width: 1.5rem;
        background: none;
        border: 0;
        text-indent: -2000%;
        overflow: hidden;
        &:first-child {
          left: -1.5rem;
          background: url('../assets/arr-l.svg') no-repeat center center / 60% auto;
          @include d {
            left: -.75rem;
          }
        }
        &:last-child {
          right: -1.5rem;
          background: url('../assets/arr-r.svg') no-repeat center center / 60% auto;
          @include d {
            right: -.75rem;
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
      left: 0;
      width: 100%;
      bottom: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        width: .5rem;
        height: .5rem;
        margin: 0 .375rem;
        background: #888;
        border-radius: 50%;
      }
      .tns-nav-active {
        background: #fff;
      }
    }
  }

</style>

