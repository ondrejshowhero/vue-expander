<template>

  <div class="bg">

    <div class="logo">
      <img src="@/assets/logo.png" width="426">
    </div>

    <section class="section-video">
      <ExpanderVideo :videoId="resourceVideoId" :mobile="mobile" />
    </section>

    <section class="section-main">
      <h1 class="heading">
        Eihän tätäkään olisi<br>
        osannut odottaa.
      </h1>
      <p class="lead">
        Meiltä löydät ratkaisut yllättäviinkin tilanteisiin.
      </p>
    </section>

  </div>

  <nav class="section-nav">
    <button @click="setActive(0)" :class="{active: isActive(0)}">
      Nuku yösi<br>rauhassa
    </button>
    <button @click="setActive(1)" :class="{active: isActive(1)}">
      Onko sinulla<br>lainaa? 
    </button>
    <button @click="setActive(2)" :class="{active: isActive(2)}">
      Suojaa talouttasi<br>säästämällä
    </button>
  </nav>

  <section class="section-content">
    <Transition mode="out-in">
      <div :key="active">
        <a :href="currentItem.url" target="_blank" class="image" @click="track('image')">
          <img :src="getMainImage()">
        </a>
        <h1 class="heading">{{currentItem.title}}</h1>
        <div class="text" v-html="currentItem.text"></div>
        <a :href="currentItem.url" target="_blank" class="cta" @click="track(currentItem.track)">{{currentItem.cta}}</a>
      </div>
    </Transition>
  </section>

  <section class="section-note">
    <p>
      Palveluntarjoajat: LähiTapiola Keskinäinen Henkivakuutusyhtiö, LähiTapiola Varainhoito Oy, LähiTapiola Vaihtoehtorahastot Oy ja Seligson & Co Rahastoyhtiö Oyj. Huomioithan, että kaikkeen sijoittamiseen liittyy aina riski sijoituksen arvonkehityksestä.
    </p>
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
        resourcesId: 2052,
        resourceVideoId: 2679,
        version: 1,
        mobile: false,
        active: 0,
        items: [
          {
            title: 'Nuku yösi rauhassa',
            image: 'image-1.jpg',
            text:
              `
                <p>
                  Elämässä sattuu ja tapahtuu.
                </p>
                <p>
                  Onneksi omaa ja läheisten taloudellista tilannetta voi ennakoida yllättävien vastoinkäymisten varalta. Läheisen yllättävä menehtyminen tai vakava sairaus on shokki, joka koettelee koko perhettä – sekä henkisesti että taloudellisesti. Henkivakuutuksen avulla tiedät tehneesi parhaasi läheistesi eteen ja voit nukkua yösi rauhassa.
                </p>
                <p>
                  Uudella asiakasedulla saat nyt alennusta vakuutusmaksusta. Vuonna 2023 edun suuruus on 20 %. Lisäksi voit saada S-ryhmän Bonusta.
                </p>
                <p>
                  Osto hoituu helposti ja nopeasti verkossa. Käy laskemassa itsellesi sopiva hinta laskurimme avulla.
                </p>
              `,
              cta: 'Lue lisää ja laske hinta',
              tracking: 'lue-lisaa-ja-laske-hinta',
              url: 'https://track.adform.net/C/?bn=62140832',
          },
          {
            title: 'Onko sinulla lainaa?',
            image: 'image-2.jpg',
            text:
              `
                <p>
                  Henkivakuutuksen korvaus voi auttaa lainojen tai perintöverojen maksussa sekä perheen elintason ylläpitämisessä totutulla tasolla. Asuntolaina on monelle se suurin kuluerä arjessa, minkä vuoksi korkojen sekä muiden elinkustannusten noustessa voi huoli oman perheen taloudellisesta pärjäämisestä kasvaa.
                </p>
                <p>
                  Tiesitkö, että asuntolainan voi turvata myös henkivakuutuksella, joka ei ole sidottu lainaan? Korvaussumma maksetaan edunsaajalle jäljellä olevan lainan suuruudesta riippumatta ja sen voi käyttää lainan maksuun tai vaikkapa perheen elintason ylläpitämiseen.
                </p>
                <p>
                  Vakuutuksen voi ottaa yhden hengen henkivakuutuksena tai pariturvana. Pariturva on monesti edullinen ratkaisu pariskunnille.
                </p>
              `,
              cta: 'Lue lisää henkivakuutuksesta',
              tracking: 'lue-lisaa-henkivakuutuksesta',
              url: 'https://track.adform.net/C/?bn=62140831',
          },
          {
            title: 'Suojaa talouttasi säästämällä',
            image: 'image-3.jpg',
            text:
              `
                <p>
                  Omaa talouden turvaverkkoa voi vahvistaa sekä vakuutuksilla että säästöillä. Hyvä nyrkkisääntö on, että vaikutuksiltaan isot riskit kannattaa vakuuttaa ja pienempiä varten rakentaa puskuria säästöillä ja sijoituksilla.
                </p>
                <p>
                  Se kuinka paljon ja miten säästää, on aina henkilökohtaista ja riippuu elämäntilanteesta. Me LähiTapiolassa autamme sinua varautumaan tulevaan vakuuttamalla, vaurastumaan sijoittamalla sekä säästämään hyvän ja pahan päivän varalle.
                </p>
                <p>
                  Miltä haluaisit, että taloutesi näyttää tulevaisuudessa? – Kokeile säästölaskurilla, paljonko säästöä voi kertyä
                </p>
              `,
              cta: 'Laskuriin',
              tracking: 'laskuriin',
              url: 'https://track.adform.net/C/?bn=62140833',
          },
        ]
      }
    },
    computed: {
      currentItem() {
        return this.items[this.active]
      },
    },
    created() {
      let uri = window.location.search.substring(1)
      let params = new URLSearchParams(uri)
      let id = params.get('version')
      if (id == 2) {
        this.version = 2
      }
    },
    methods: {
      track(label) {
        window.ad10Resources?.trackAction(`${this.resourcesId}-${label}`)
      },
      setActive(id) {
        this.active = id
      },
      isActive(id) {
        return this.active == id
      },
      getMainImage() {
        return require(`@/assets/${this.items[this.active].image}`)
      },
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
    text-align: center;
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

  img {
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
  }

</style>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .bg {
    padding: 1rem 1.5rem 3rem;
    background: url('assets/bg.jpg') no-repeat center top / cover;
    @include d {
      padding: 1.25rem 7.25rem 4.5rem;
    }
  }

  .logo {
    width: 14rem;
    margin: 0 auto 1rem;
    @include d {
      width: 26.625rem;
      margin: 0 auto 1.875rem;
    }
  }

  .section-main {
    color: #fff;
    .heading {
      margin-top: 2.25rem;
      font-size: 2rem;
      font-weight: 800;
      line-height: 1;
      @include d {
        font-size: 3rem;
      }
    }
    .lead {
      margin-top: 1.625rem;
      font-size: 1.125rem;
      font-weight: bold;
      @include d {
        font-size: 1.5rem;
      }
    }
  }


  .section-nav {
    padding: .25rem;
    display: flex;
    @include d {
      padding: .625rem .625rem 2rem;
    }
    button {
      flex: 1 0;
      width: 100%;
      padding: .5rem 0;
      background: $color-1;
      font-size: .75rem;
      font-weight: 800;
      color: #fff;
      transition: .15s;
      cursor: pointer;
      @include d {
        height: 7.375rem;
        width: auto;
        padding: 0;
        font-size: 1.5rem;
      }
      &:hover {
        opacity: .7;
      }
      &.active {
        background: #fff;
        color: $color-1;
      }
    }
    button + button {
      margin-left: .25rem;
      @include d {
        margin-left: .5rem;
      }
    }
  }

  .section-content {
    width: 49.75rem;
    max-width: calc(100% - .5rem);
    margin: 0 auto;
    .image {
      display: block;
      margin-bottom: 2rem;
      @include image;
    }
    .heading {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 800;
    }
    :deep(p) {
      margin-bottom: .75rem;
      font-size: 1rem;
      @include d {
        margin-bottom: 1.25rem;
        font-size: 1.125rem;
      }
    }
    .cta {
      display: inline-block;
      padding: .75rem 1.875rem;
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      background: $color-3;
      border-radius: 2rem;
      transition: .15s;
      @include d {
        font-size: 1.25rem;
      }
      &:hover {
        opacity: .8;
      }
    }
  }

  .section-footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 1.75rem;
    margin: 2.5rem 0 3rem;
    padding-left: 1.25rem;
    text-align: left;
    background: url('assets/line.png') repeat-x center center / auto 100%;
    .word {
      color: $color-2;
    }
  }

  .section-note {
    width: 49.75rem;
    max-width: calc(100% - 1rem);
    margin: 3rem auto 0;
    p {
      font-size: .75rem;
    }
  }


  .v-enter-active,
  .v-leave-active {
    position: relative;
    transition: opacity .25s ease, left .25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-to {
    left: 0%;
  }
  .v-enter-from {
    left: -100%;
  }
  .v-leave-from {
    left: 0%;
  }
  .v-leave-to {
    left: 100%;
  }

</style>
