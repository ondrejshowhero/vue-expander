<template>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://www.allente.se/stream/film-serier"
      name="Main Video"
    />
  </section>

  <section class="section-main">
    <div class="section-main-one part">
      <h1 class="heading">Streama film & serier</h1>
      <p class="lead">
        Flexa fritt mellan streamingtjänster varje månad, dessutom ingår 18
        tv-kanaler.<br />
        Från 249 kr/mån, utan bindningstid.
      </p>
      <a
        href="https://www.allente.se/stream/film-serier"
        target="_blank"
        class="cta"
        data-name="Beställ här"
        >Beställ här</a
      >
    </div>
    <div class="section-main-two part">
      <img src="@/assets/images/top-img.png" />
    </div>
  </section>

  <section class="check-points">
    <div v-for="(item, index) in items" :key="index" class="check-point">
      <img :src="item.icon" alt="icon" class="icon" />
      <h2 class="text">{{ item.text }}</h2>
      <p class="paragraph">{{ item.paragraph }}</p>
    </div>
  </section>

  <section
    class="tiles"
    v-for="(item, index) in tileItems"
    :key="index"
    :class="{ 'column-reverse': index === 1 }"
  >
    <div class="tile">
      <div class="tile-img" v-if="index % 2 === 0">
        <img :src="item.imgSrc" />
      </div>
      <div class="tile-text">
        <h2 class="text text2">{{ item.title }}</h2>
        <p class="paragraph paragraph2">{{ item.paragraph }}</p>
        <a
          href="https://www.allente.se/stream/film-serier"
          target="_blank"
          class="cta cta2"
          data-name="Beställ här"
          >Beställ här</a
        >
      </div>
      <div class="tile-img" v-if="index % 2 !== 0">
        <img :src="item.imgSrc" />
      </div>
    </div>
  </section>

  <section
    class="tiles"
    v-for="(item, index) in tileItems2"
    :key="index"
    :class="{ 'column-reverse': index === 1 }"
  >
    <div class="tile reverse">
      <div class="tile-img" v-if="index % 2 === 0">
        <img :src="item.imgSrc" />
      </div>
      <div class="tile-text">
        <h2 class="text text2">{{ item.title }}</h2>
        <p class="paragraph paragraph2">{{ item.paragraph }}</p>
        <a
          href="https://www.allente.se/stream/film-serier"
          target="_blank"
          class="cta cta2"
          data-name="Beställ här"
          >Beställ här</a
        >
      </div>
      <div class="tile-img" v-if="index % 2 !== 0">
        <img :src="item.imgSrc" />
      </div>
    </div>
  </section>

  <section class="cards">
    <div class="cards-inner-container">
      <div class="cards-inner" v-for="(card, index) in cards" :key="index">
        <div class="card-container">
          <h2 class="card-title">{{ card.title }}</h2>
          <h1 class="card-number">{{ card.number }}</h1>
          <div class="card-p">{{ card.paragraph }}</div>
          <a
            v-for="(link, index) in card.links"
            :key="index"
            :href="link.url"
            target="_blank"
            class="cta cta3"
            :data-name="link.name"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>

    <img src="@/assets/images/logo.png" />
  </section>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
// import ExpanderScroller from "./components/ExpanderScroller.vue";
// import ExpanderSlider from "./components/ExpanderSlider.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    // ExpanderScroller,
    // ExpanderSlider,
  },
  data() {
    return {
      mobile: false,
      videoFile: "1080.mp4",
      items: [
        {
          icon: require("@/assets/images/check-icon.svg"),
          text: "Allt på en plats",
          paragraph: "Filmer, serier och tv-kanaler i en och samma app.",
        },
        {
          icon: require("@/assets/images/check-icon.svg"),
          text: "Enkelt och flexibelt",
          paragraph:
            "Välj de streamingstjänster du gillar. Byt varje månad. Allt är samlat på en faktura.",
        },
        {
          icon: require("@/assets/images/check-icon.svg"),
          text: "Kom igång direkt",
          paragraph:
            "Ladda ned Allente-appen, logga in och titta på upp till fyra enheter samtidigt.",
        },
      ],
      tileItems: [
        {
          imgSrc: require("@/assets/images/tile-1.png"),
          title: "Beställ ditt underhållningspaket",
          paragraph:
            "Få ett fullspäckat paket med film och tv-serier för hela familjen. Allt samlat i en och samma app.",
        },
        // {
        //   imgSrc: require("@/assets/images/tile-2.png"),
        //   title: "Lägg till mer sport med ett tillvalspaket",
        //   paragraph:
        //     "Streama sport i världsklass med TV4 Sport Max, Max Sport och Viaplay Total. Lägg till utan bindningstid efter att du valt ditt Allente Stream-paket.",
        // },
      ],
      tileItems2: [
        // {
        //   imgSrc: require("@/assets/images/tile-1.png"),
        //   title: "Beställ ditt underhållningspaket",
        //   paragraph:
        //     "Få ett fullspäckat paket med film och tv-serier för hela familjen. Allt samlat i en och samma app.",
        // },
        {
          imgSrc: require("@/assets/images/tile-2.png"),
          title: "Lägg till mer sport med ett tillvalspaket",
          paragraph:
            "Streama sport i världsklass med TV4 Sport Max, Max Sport och Viaplay Total. Lägg till utan bindningstid efter att du valt ditt Allente Stream-paket.",
        },
      ],
      cards: [
        {
          title: "Stream Basic",
          number: "0",
          paragraph: "streamingtjänst + 18 Tv-kanaler",
          links: [
            {
              name: "Stream Basic",
              url: "https://www.allente.se/blikund/stream-flex",
            },
          ],
        },
        {
          title: "Stream Flex 2",
          number: "2",
          paragraph: "streamingtjänster + 18 Tv-kanaler",
          links: [
            {
              name: "Stream Flex 2",
              url: "https://www.allente.se/blikund/stream-flex2",
            },
          ],
        },
        {
          title: "Stream Flex 4",
          number: "4",
          paragraph: "streamingtjänster + 18 Tv-kanaler",
          links: [
            {
              name: "Stream Flex 4",
              url: "https://www.allente.se/blikund/stream-flex4",
            },
          ],
        },
      ],
    };
  },
  created() {
    // if (window.innerWidth < 480) {
    //   this.mobile = true
    //   this.videofile = '480.mp4'
    // }
  },
  methods: {
    track(label, category) {
      category = category || "Click";
      window.customTrack(category, "interaction", label);
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/minireset.css/minireset";
@import "@/scss/fonts.scss";
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

:root {
  --footer-height: 2rem;
  @include d {
    --footer-height: 4rem;
  }
}

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
.section-main {
  display: flex;
  background-color: #081429;
  align-items: center;
  background-image: url("@/assets/images/bg-top.jpg");
  background-position: center;
  background-size: cover;
  height: 28.4rem;
  @include mobile {
    flex-direction: column;
    height: 34rem;
  }
}
.section-main-one {
  width: 27.37rem;
  padding-left: 4.5rem;
  @include mobile {
    text-align: center;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.8rem;
  }
}
.section-main-two {
  flex: 1;
  padding-right: 1.88rem;
  @include mobile {
    padding: 0;
  }
}
.heading {
  font-family: "AllenteSans-Medium", sans-serif;
  color: #fff;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @include mobile {
    margin-top: 2.8rem;
  }
}
.section-main-two img {
  width: 38.25rem;
  height: 21.5rem;
  @include mobile {
    width: 85.83vw;
    height: 48.13vw;
    margin-top: 6.67vw;
  }
}
.lead {
  color: #fff;
  font-family: "AllenteSans-Regular", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.875rem */
  margin-bottom: 2.5rem;
  margin-top: 1.5rem;
}
.cta {
  display: flex;
  width: 10rem;
  height: 3rem;
  // padding: 1.5625rem 4.1875rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #fd6100;
  font-family: "AllenteSans-Medium", sans-serif;
  font-size: 1.25rem;
}
.cta:hover {
  text-decoration-line: underline;
}

.check-points {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.63rem;
  margin-top: 3.25rem;
  margin-bottom: 4.25rem;

  @include mobile {
    flex-direction: column;
    align-items: center;
  }
}
.check-point {
  width: 16.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text {
  font-family: "AllenteSans-Medium", sans-serif;
  color: #081429;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.2rem;
}
.paragraph {
  font-family: "AllenteSans-Regular", sans-serif;
  color: #081429;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.875rem */
}
.icon {
  width: 3.4375rem;
  height: 3.4375rem;
  margin-bottom: 2rem;
}
.tile {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5.5rem 4.38rem;
  gap: 1.8rem;
  margin-bottom: 4rem;
  @include mobile {
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 2rem;
  }
}

.tiles {
  flex-direction: column-reverse;
}
.tiles:nth-child(2) {
  flex-direction: row-reverse !important;
  @include mobile {
    flex-direction: column-reverse;
  }
}
.tile-img {
  width: 33rem;
  height: 20.125rem;
  @include mobile {
    width: 100%;
    height: auto;
  }
}
.tile-img img {
  width: 33rem;
  height: 20.125rem;
  @include mobile {
    width: 100%;
    height: auto;
  }
}
.tile-text {
  width: 20.38rem;
  @include mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.text2 {
  text-align: left;
  @include mobile {
    text-align: center;
  }
}
.paragraph2 {
  text-align: left;
  @include mobile {
    text-align: center;
  }
}
.cta2 {
  margin-top: 2.5rem;
}
.cards-inner {
  display: flex;
  justify-content: center;
  display: flex;
  width: 17.8125rem;
  height: 21.9375rem;
  padding: 1.9375rem 2.5rem;
  align-items: center;
  gap: 2.55rem;
  border: 1px solid #f1f1f1;
}
.cards {
  height: 32rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url("@/assets/images/bottom.jpg");
  background-position: center;
  background-size: cover;
  flex-direction: column;
  @include mobile {
    width: 100%;
    height: auto;
  }
}
.card-title {
  color: #fff;
  font-family: "AllenteSans-Medium", sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2rem;
}
.card-number {
  color: #fff;
  text-align: center;
  font-family: "AllenteSans-Bold", sans-serif;
  font-size: 4.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1.4rem;
}
.card-p {
  color: #fff;
  text-align: center;
  font-family: "AllenteSans-Regular", sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 9rem;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cta3 {
  margin-top: 1.75rem;
}
.cards-inner-container {
  display: flex;
  justify-content: center;
  gap: 2.44rem;
  margin-top: 4.06rem;
  @include mobile {
    flex-direction: column;
    margin-top: 3rem;
    gap: 2.3rem;
  }
}
.cards img {
  width: 7.8125rem;
  height: 1.5625rem;
  margin-top: 2.75rem;
  @include mobile {
    width: 6.25rem;
    height: 1.233rem;
    margin-top: 2rem;
    margin-bottom: 1.39rem;
  }
}
.reverse {
  flex-direction: row-reverse;

  @include mobile {
    flex-direction: column;
  }
}
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.section-footer {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--footer-height);
    padding: 0 1rem;
    background: #fff;
  }
  &.sticky {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    .container {
      max-width: $width;
      margin: 0 auto;
    }
  }
}
</style>
