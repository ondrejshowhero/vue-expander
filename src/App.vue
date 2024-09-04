<template>

  <section class="section-video">
    <ExpanderVideo :filename="videoFile" :mobile="mobile" :autoplay="true" url="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.402741664;dc_trk_aid=594842289;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" name="Main Video" />
  </section>

  <section class="section-main">
    <div class="text">
      <h1 class="heading">
        Slik får du buketten din
        til&nbsp;å vare lenge
      </h1>
      <ul>
        <li>
          Gjør klar en ren vase med kaldt vann og holdbarhets- middelet som følger med blomstene.
        </li>
        <li>
          Rens stilkene for torner og blader og snitt stilkene på skrått et par centimeter med en ren snittekniv.
        </li>
        <li>
          Buketten kan gjerne settes kjølig om natten for lenger holdbarhet (ikke kaldere en 4 grader).
        </li>
        <li>
          Etterfyll eller skift til rent vann jevnlig. Dersom noen blomster visner før andre, plukk dem ut av buketten.
        </li>
        <li>
          Når flere av blomstene begynner å henge kan du snitte stilkene korte og sette i små vaser.
        </li>
      </ul>
      <p class="note">
        Mester Grønn har <strong>7 dagers kvalitetsgaranti</strong> på snittblomster, men noen sorter som nelliker, krysantemum og alstroemeria, er mer holdbare og har hele <strong>10 dagers kvalitetsgaranti</strong>.<br>
      </p>
      <a href="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.403167960;dc_trk_aid=594842298;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" data-name="Inspirasjon" class="link">Les mer</a>
    </div>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.403167960;dc_trk_aid=594842298;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="image" data-name="Inspirasjon">
      <img src="@/assets/image-1.jpg">
    </a>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.403167960;dc_trk_aid=594842298;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="link-over" data-name="Inspirasjon"></a>
  </section>

  <section class="section-banner">
    <a href="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.402743596;dc_trk_aid=594842295;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="link" data-name="Garanti">
      <img src="@/assets/image-2.jpg">
    </a>
  </section>

  <section class="section-products">
    <h1 class="heading">Se våre mest holdbare blomster</h1>
    <div class="row">
      <a href="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.403170642;dc_trk_aid=594795668;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="video" data-name="Secondary Video">
        <video src="@/assets/video/product.mp4" muted loop autoplay playsinline></video>
      </a>
      <div class="items">
        <a :href="product[3]" target="_blank" v-for="product in products" :key="product" class="product" :data-name="product[0]">
          <div class="image">
            <img :src="getProductImage(product[1][0])" class="main">
            <img :src="getProductImage(product[1][1])" class="alt">
            <img src="@/assets/fairtrade.png" class="icon" v-if="product[5]">
            <p class="deal">
              {{ product[4] }}
            </p>
          </div>
          <div class="info">
            <p class="title">{{ product[0] }}</p>
            <p class="price">{{ product[2] }}</p>
            <div class="cta">
              <svg xmlns="http://www.w3.org/2000/svg" width="20.05" height="20" viewBox="0 0 20.05 20">
                <path id="shopping_cart_FILL0_wght400_GRAD0_opsz24_white" d="M7,22a2,2,0,1,1,1.4-3.4,1.933,1.933,0,0,1,0,2.8A1.816,1.816,0,0,1,7,22Zm10,0a2,2,0,0,1,0-4,2.051,2.051,0,0,1,2,2,2.051,2.051,0,0,1-2,2ZM6.2,6l2.4,5h7l2.8-5Zm-1-2H20a1.05,1.05,0,0,1,.9.5.908.908,0,0,1,0,1l-3.5,6.4a2.7,2.7,0,0,1-.7.8,1.689,1.689,0,0,1-1,.3H8.1L7,15H19v2H7a1.76,1.76,0,0,1-1.7-1,2.043,2.043,0,0,1-.1-2l1.3-2.5L3,4H1V2H4.2Zm3.4,7h0Z" transform="translate(-1 -2)" fill="#fff"/>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  
  <section class="section-heading">
    <h1 class="heading">
      Se <strong>3for2</strong> utvalget på avskårne! 
    </h1>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.403170639;dc_trk_aid=594751495;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="link" data-name="3for2 utvalget">Se her</a>
    <a href="https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.403170639;dc_trk_aid=594751495;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1" target="_blank" class="link-over" data-name="3for2 utvalget"></a>
  </section>


</template>

<script>
  import ExpanderVideo from './components/ExpanderVideo.vue'

  export default {
    name: 'App',
    components: {
      ExpanderVideo,
    },
    data() {
      return {
        mobile: false,
        videoFile: '1080.mp4',
        products: [
          [
            'Fairtrade krysantemum hvit',
            [
              '165246_1.jpg',
              '165246_3.jpg',
            ],
            '140,-',
            'https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.402743593;dc_trk_aid=594842292;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1',
            '3 for 2',
            true,
          ],
          [
            'Fairtrade grennellik',
            [
              '165082_1.jpg',
              '165082_3.jpg',
            ],
            '140,-',
            'https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.402743593;dc_trk_aid=594842292;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1',
            '3 for 2',
            true,
          ],
          [
            'Fairtrade alstroemeria rosa',
            [
              '174254_1.jpg',
              '174254_3.jpg',
            ],
            '140,-',
            'https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.402743593;dc_trk_aid=594842292;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1',
            '3 for 2',
            true,
          ],
          [
            'Fairtrade alstroemeria hvit',
            [
              '165208_1.jpg',
              '165208_3.jpg',
            ],
            '140,-',
            'https://ad.doubleclick.net/ddm/trackclk/N775821.4451786SHOWHEROS/B32470892.402743593;dc_trk_aid=594842292;dc_trk_cid=221330461;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1',
            '3 for 2',
            true,
          ],
        ]
      }
    },
    methods: {
      getProductImage(image) {
        return require(`@/assets/products/${image}`)
      }
    },
    created() {
      // if (window.innerWidth < 480) {
      //   this.mobile = true
      //   this.videofile = '480.mp4'
      // }
    },
  }
</script>

<style lang="scss">
  @import "node_modules/minireset.css/minireset";
  @import '@/scss/fonts.scss';
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  html {
    font-family: $font, sans-serif;
    font-size: 16px;
    font-weight: $weight;
    color: $color-text;
    text-align: left;
    line-height: 1.3;
    @include desktop {
      font-size: 1.48vw;
    }
    @media (min-width: $width) {
      font-size: 16px;
    }
  }
  #app {
    position: relative;
    width: $width;
    max-width: 100%;
    margin: 0 auto;
    background: $color-bg;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 3rem;
  }

  img,
  picture,
  video {
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    font-size: 1rem;
  }
  button {
    font-family: $font;
    font-size: 1rem;
    padding: 0;
    border: 0;
    background: none;
    outline: 0 none;
    cursor: pointer;
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .section-main {
    position: relative;
    padding: 2rem 1.5rem;
    @include d {
      display: flex;
      justify-content: space-between;
      padding: 2.75rem 3.625rem;
    }
    .image {
      position: relative;
      z-index: 2;
      display: block;
      margin-top: 2rem;
      @include d {
        width: 23.5rem;
        margin-top: 0;
      }
    }
    .text {
      @include d {
        width: 32.75rem;
        margin-top: -.5rem;
      }
      .heading {
        margin-bottom: 1.5rem;
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1.16;
        color: $color-1;
        @include d {
          margin-bottom: 2.125rem;
          font-size: 2.75rem;
        }
      }
      li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 1rem;
        font-size: 1.125rem;
        line-height: 1.4;
        @include d {
          font-size: 1.25rem;
        }
        &::before {
          content: '';
          position: absolute;
          left: .25rem;
          top: 1rem;
          width: .25rem;
          height: .25rem;
          background: $color-text;
          border-radius: 50%;
        }
        a {
          position: relative;
          z-index: 2;
          font-weight: bold;
          text-decoration: underline;
          &:hover {
            color: $color-1;
          }
        }
      }
      .note {
        font-size: 1.125rem;
        color: $color-1;
        padding-left: 2rem;
        strong {
          font-weight: bold;
        }
      }
      .link {
        position: relative;
        z-index: 3;
        display: inline-block;
        font-size: 1.125rem;
        font-weight: bold;
        color: $color-1;
        text-decoration: underline;
        margin: .5rem 0 0 2rem;
        &:hover {
          color: $color-text;
        }
      }
    }
  }

  .section-heading {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.75rem 1.5rem;
    background: $color-2;
    @include d {
      flex-direction: row;
      // justify-content: space-between;
      padding: 1.75rem 5rem 1.75rem 4.25rem;
    }
    .heading {
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-weight: 500;
      color: #3d675b;
      text-align: center;
      @include d {
        margin-bottom: 0;
        margin-right: 2rem;
        font-size: 2.75rem;
        text-align: left;
      }
      strong {
        font-weight: bold;
      }
    }
    .link {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 3rem;
      background: #3d675b;
      font-weight: 500;
      font-size: 1.25rem;
      color: #fff;
      border-radius: 3rem;
      transition: .2s;
      @include d {
        width: 15rem;
        height: 4rem;
        font-size: 1.5rem;
      }
      &:hover {
        opacity: .8;
      }
    }
  }

  .section-banner {
    .link {
      display: block;
    }
  }

  .section-products {
    padding: 1.5rem;
    @include d {
      padding: 2.875rem 3.625rem;
    }
    .heading {
      margin-bottom: 1.5rem;
      font-size: 1.75rem;
      font-weight: 500;
      line-height: 1.16;
      color: $color-1;
      @include d {
        margin-bottom: 2.125rem;
        font-size: 2.75rem;
      }
    }
    .row {
      @include d {
        display: flex;
        justify-content: space-between;
      }
    }
    .video {
      display: block;
      margin-bottom: 1.25rem;
      @include d {
        width: 24.5rem;
        margin-bottom: 0;
      }
    }
    .items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include d {
        width: 32rem;
      }
      .product {
        position: relative;
        display: block;
        width: 47%;
        margin-bottom: 1.75rem;
        @include d {
          width: 15rem;
        }
        .image {
          position: relative;
          .alt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 2;
            opacity: 0;
            transition: .1s;
          }
          .icon {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
            display: block;
            width: 40px;
          }
          .deal {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 10;
            padding: .25rem .5rem;
            background: $color-1;
            font-size: .875rem;
            font-weight: bold;
            color: #fff;
          }
          &:hover {
            .alt {
              opacity: 1;
            }
          }
        }
        .title {
          margin: 1rem 0 .5rem;
          font-size: 1.125rem;
          font-weight: 500;
          &:hover {
            text-decoration: underline;
          }
        }
        .price {
          position: relative;
          display: inline-block;
          color: $color-1;
          font-size: 2rem;
          font-weight: bold;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 1.375rem;
            bottom: 0;
            height: .25rem;
            background: $color-3;
          }
        }
        .cta {
          position: absolute;
          right: .25rem;
          bottom: .125rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background: $color-1;
          border-radius: 50%;
          &:hover {
            background: darken($color-1, 5%);
          }
          svg {
            width: 1rem;
            fill: #fff;
          }
        }
      }
    }
  }

  .section-footer {
    position: relative;
    background: $color-1;
    margin: 0 1.5rem;
    @include d {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row-reverse;
      margin: 0 3.625rem;
    }
    .image {
      @include d {
        width: 22.375rem;
      }
    }
    .text {
      padding: 1.5rem;
      color: rgba(#fff, .9);
      @include d {
        width: 41.25rem;
        padding: 1rem 3rem;
      }
      .heading {
        margin-bottom: 2rem;
        font-size: 2rem;
        line-height: 1.16;
        padding-right: 20%;
        @include d {
          font-size: 2.625rem;
        }
      }
      p {
        font-size: 1.25rem;
        a {
          position: relative;
          z-index: 2;
          font-weight: 500;
          text-decoration: underline;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .link-over {
    @include cover;
    z-index: 1;
  }

</style>
