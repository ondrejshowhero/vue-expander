<template>
  <section class="top-logo">
    <a target="_blank" class="logo" data-name="Logo">
      <img src="@/assets/logo.png" />
    </a>
  </section>
  <section class="section-video">
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://ad.doubleclick.net/ddm/trackclk/N408208.5124634PROGRAMMATIC_VIDE/B32447252.410625738;dc_trk_aid=602506552;dc_trk_cid=227000554;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=$"
      name="Main Video"
    />
  </section>

  <nav class="navigation">
    <ul>
      <li :class="{ active: selectedContent === 'content1' }">
        <a class="selected" href="#" @click.prevent="showContent('content1')"
          >Kerstbrunch</a
        >
      </li>
      <li :class="{ active: selectedContent === 'content2' }">
        <a class="selected" href="#" @click.prevent="showContent('content2')"
          >Kerstdiner</a
        >
      </li>
      <li :class="{ active: selectedContent === 'content3' }">
        <a class="selected" href="#" @click.prevent="showContent('content3')"
          >Kerstborrel</a
        >
      </li>
      <li :class="{ active: selectedContent === 'content4' }">
        <a class="selected" href="#" @click.prevent="showContent('content4')"
          >Lekker zoet</a
        >
      </li>
    </ul>
  </nav>
  <!-- content 1 -->
  <section class="content">
    <div v-if="selectedContent === 'content1'">
      <section class="section-main">
        <img class="section-main-img" :src="contentList[0].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[0].title }}</h1>
          <p class="first-par-p">{{ contentList[0].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/recepten/kerst/brunch?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstbrunch&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-1"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main section-main2">
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[4].title }}</h1>
          <p class="first-par-p" v-html="contentList[4].description"></p>
        </div>
        <img
          class="section-main-img img-right-side"
          :src="contentList[4].imgSrc"
        />
      </section>

      <section class="section-slider">
        <ExpanderSlider_2 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/recepten/kerst/brunch?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstbrunch&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-1"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main">
        <img class="section-main-img" :src="contentList[5].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[5].title }}</h1>
          <p class="first-par-p">{{ contentList[5].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider_3 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/recepten/kerst/brunch?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstbrunch&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-1"
          >Ontdek kerstassortiment</a
        >
      </div>
    </div>

    <!-- Content 2 -->
    <div v-if="selectedContent === 'content2'">
      <section class="section-main">
        <img class="section-main-img" :src="contentList[6].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h" v-html="contentList[6].titleHtml"></h1>
          <p class="first-par-p">{{ contentList[6].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider_4 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/recepten/kerst/kerstdiner?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstdiner&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-2"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main section-main2">
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[7].title }}</h1>
          <p class="first-par-p" v-html="contentList[7].description"></p>
        </div>
        <img class="section-main-img" :src="contentList[7].imgSrc" />
      </section>

      <section class="section-slider">
        <ExpanderSlider_5 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/recepten/kerst/kerstdiner?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstdiner&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-2"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main">
        <img class="section-main-img" :src="contentList[8].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[8].title }}</h1>
          <p class="first-par-p">{{ contentList[8].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider_6 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/recepten/kerst/kerstdiner?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstdiner&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-2"
          >Ontdek kerstassortiment</a
        >
      </div>
    </div>

    <!-- Content 3 -->
    <div v-if="selectedContent === 'content3'">
      <section class="section-main">
        <img class="section-main-img" :src="contentList[9].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[9].title }}</h1>
          <p class="first-par-p">{{ contentList[9].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider_7 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/aanbiedingen/kies-mix-kaas-en-tapas/3005167?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstborrel&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-3"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main">
        <img class="section-main-img img2" :src="contentList[10].imgSrc" />
      </section>

      <section class="section-slider">
        <ExpanderSlider_8 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/aanbiedingen/kies-mix-kaas-en-tapas/3005167?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstborrel&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-3"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main">
        <img class="section-main-img" :src="contentList[11].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[11].title }}</h1>
          <p class="first-par-p">{{ contentList[11].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider_9 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/aanbiedingen/kies-mix-kaas-en-tapas/3005167?utm_medium=videopaid&utm_source=showheroes&utm_content=kerstborrel&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-3"
          >Ontdek kerstassortiment</a
        >
      </div>
    </div>

    <!-- Content 4 -->
    <div v-if="selectedContent === 'content4'">
      <section class="section-main">
        <img class="section-main-img" :src="contentList[12].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[12].title }}</h1>
          <p class="first-par-p">{{ contentList[12].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider_10 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/inspiratie/kerst?utm_medium=videopaid&utm_source=showheroes&utm_content=zoet&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-4"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main section-main2">
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[13].title }}</h1>
          <p class="first-par-p" v-html="contentList[13].description"></p>
        </div>
        <img class="section-main-img" :src="contentList[13].imgSrc" />
      </section>

      <section class="section-slider">
        <ExpanderSlider_11 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/inspiratie/kerst?utm_medium=videopaid&utm_source=showheroes&utm_content=zoet&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-4"
          >Ontdek kerstassortiment</a
        >
      </div>

      <section class="section-main">
        <img class="section-main-img" :src="contentList[14].imgSrc" />
        <div class="first-par">
          <h1 class="first-par-h">{{ contentList[14].title }}</h1>
          <p class="first-par-p">{{ contentList[14].description }}</p>
        </div>
      </section>

      <section class="section-slider">
        <ExpanderSlider_12 />
      </section>

      <div class="cta-container">
        <a
          href="https://www.jumbo.com/inspiratie/kerst?utm_medium=videopaid&utm_source=showheroes&utm_content=zoet&utm_creative_format=expander&utm_campaign=feestdagen&utm_marketing-tactic=merk"
          target="_blank"
          class="cta"
          data-name="Ontdek kerstassortiment-4"
          >Ontdek kerstassortiment</a
        >
      </div>
    </div>
  </section>
  <nav class="navigation">
    <ul>
      <li :class="{ active: selectedContent === 'content1' }">
        <a class="selected" href="#" @click.prevent="showContent('content1')"
          >Kerstbrunch</a
        >
      </li>
      <li :class="{ active: selectedContent === 'content2' }">
        <a class="selected" href="#" @click.prevent="showContent('content2')"
          >Kerstdiner</a
        >
      </li>
      <li :class="{ active: selectedContent === 'content3' }">
        <a class="selected" href="#" @click.prevent="showContent('content3')"
          >Kerstborrel</a
        >
      </li>
      <li :class="{ active: selectedContent === 'content4' }">
        <a class="selected" href="#" @click.prevent="showContent('content4')"
          >Lekker zoet</a
        >
      </li>
    </ul>
  </nav>

  <footer class="section-footer sticky">
    <div class="container">
      <a target="_blank" class="logo" data-name="Logo">
        <img src="@/assets/logo.png" />
      </a>
      <!-- <a href="" target="_blank" class="cta" data-name="Read more">Read more</a> -->
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
// import ExpanderScroller from './components/ExpanderScroller.vue'
import ExpanderSlider from "./components/ExpanderSlider.vue";
import ExpanderSlider_2 from "./components/ExpanderSlider_2.vue";
import ExpanderSlider_3 from "./components/ExpanderSlider_3.vue";
import ExpanderSlider_4 from "./components/ExpanderSlider_4.vue";
import ExpanderSlider_5 from "./components/ExpanderSlider_5.vue";
import ExpanderSlider_6 from "./components/ExpanderSlider_6.vue";
import ExpanderSlider_7 from "./components/ExpanderSlider_7.vue";
import ExpanderSlider_8 from "./components/ExpanderSlider_8.vue";
import ExpanderSlider_9 from "./components/ExpanderSlider_9.vue";
import ExpanderSlider_10 from "./components/ExpanderSlider_10.vue";
import ExpanderSlider_11 from "./components/ExpanderSlider_11.vue";
import ExpanderSlider_12 from "./components/ExpanderSlider_12.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    // ExpanderScroller,
    ExpanderSlider,
    ExpanderSlider_2,
    ExpanderSlider_3,
    ExpanderSlider_4,
    ExpanderSlider_5,
    ExpanderSlider_6,
    ExpanderSlider_7,
    ExpanderSlider_8,
    ExpanderSlider_9,
    ExpanderSlider_10,
    ExpanderSlider_11,
    ExpanderSlider_12,
  },
  data() {
    return {
      mobile: false,
      videoFile: "1080.mp4",
      selectedContent: "content1", // Default content
      contentList: [
        {
          // section 0
          imgSrc: require("@/assets/a_1.png"),
          title: "Sticky appeltaart plukbrood",
          description:
            'Niets is zo gezellig als samen delen. Dit sticky appeltaart plukbrood vraagt erom om geplukt te worden en staat snel op tafel. Alleen even in de oven en wachten tot de "ping" gaat. De kers op deze appeltaart? De lekkere rozijnen. Perfect voor bij de kerstbrunch of als toetje met een toefje slagroom.',
        },
        // section 1
        {
          imgSrc: require("@/assets/a_1.png"),
          title: "Verspakket bladerdeeg krans",
          description:
            "Kijk, dat is pas bijzonder op tafel: een krans van bladerdeeg. Dit hartige gerecht is gevuld met pompoen, rode ui, feta en balsamicodressing. Dus lekker krokant van buiten en smaakvol van binnen. De ingrediënten hoef je trouwens niet zelf te verzamelen. Alles ligt voor je klaar in een verspakket. Zo kun je dit feestelijke gerecht snel serveren.",
        },
        // section 2
        {
          imgSrc: require("@/assets/a_1.png"),
          title: "Begint het al te borrelen",
          description:
            "Borreltijd! Geniet van lekkere tapas tussen de kerstfilms door. Onze Kies & Mix tapas zijn met de feestdagen extra bijzonder, maar net zo voordelig als altijd. Je haalt namelijk 3 bakjes voor 6 euro. Verwen je gasten met fuet comté, luxe salades en samosa's. Kijk, zo is kerst helemaal voor elkaar.",
        },
        // section 3
        {
          imgSrc: require("@/assets/a_1.png"),
          title: "snoepen van soezen",
          description:
            "De tijgersoes heeft een bijzonder 'jasje', wat al extra feestelijk op tafel staat. Mag het van jou nog specialer? Probeer dan onze nieuwste tijgersoes met champagnesmaak. Om je vingers bij af te likken!",
        },
        // section 4
        {
          imgSrc: require("@/assets/a_2.png"),
          title: "brunchen met elkaar",
          description:
            "Eerst uitslapen, daarna genieten van een uitgebreide brunch die je met Jumbo voordelig op tafel zet. Kies uit verse sappen, verschillende soorten beleg en salades. Oh, en vergeet de kaiserbroodjes en croissants niet! Superlekker én je haalt er<b> 4 voor maar €1.</b>",
        },
        // section 5
        {
          imgSrc: require("@/assets/a_3.png"),
          title: "verse kreeften-bisque",
          description:
            "De bisque van kreeftensoep had zo op de menukaart van een restaurant kunnen staan. Maar in plaats daarvan serveer jij 'm lekker thuis. Met deze verse, rijke en romige soep, ontwikkeld door onze eigen chef-koks, maak jij indruk deze kerst.",
        },
        // section 6
        {
          imgSrc: require("@/assets/b_1.png"),
          title: "Verspakket bladerdeeg krans",
          titleHtml: "Verspakket<br> bladerdeeg krans",
          description:
            "Kijk, dat is pas bijzonder op tafel: een krans van bladerdeeg. Dit hartige gerecht is gevuld met pompoen, rode ui, feta en balsamicodressing. Dus lekker krokant van buiten en smaakvol van binnen. De ingrediënten hoef je trouwens niet zelf te verzamelen. Alles ligt voor je klaar in een verspakket. Zo kun je dit feestelijke gerecht snel serveren.",
        },
        // section 7
        {
          imgSrc: require("@/assets/b_2.png"),
          title: "Welke roast kies jij?",
          titleHtml: "Welke roast kies jij?",
          description:
            "Ga je voor de groenteroast en geniet je straks van een supermals, plantaardig gerecht met een kruidige topping en lekkere jus? Of is jouw oog gevallen op de beef roast en zet je een mals runderbraadstuk uit Nederland met romige jus op het kerstmenu?",
        },
        // section 8
        {
          imgSrc: require("@/assets/b_3.png"),
          title: "Verrassingsijstaart",
          titleHtml: "Verspakket<br> bladerdeeg krans",
          description:
            "De ijstaart is een favoriet van velen. Dat komt door die heerlijke vulling van romig stracciatella-ijs en chocoladestukjes. Als klap op de vuurpijl is de ijstaart gevuld met knapperige balletjes die eruit rollen als je 'm aansnijdt. Met zo'n leuke verrassing is het logisch dat we dit dé ster van de avond noemen.",
        },
        // section 9
        {
          imgSrc: require("@/assets/c_1.png"),
          title: "Begint het al te borrelen",
          titleHtml: "Begint het al te borrelen",
          description:
            "Borreltijd! Geniet van lekkere tapas tussen de kerstfilms door. Onze Kies & Mix tapas zijn met de feestdagen extra bijzonder, maar net zo voordelig als altijd. Je haalt namelijk 3 bakjes voor 6 euro. Verwen je gasten met fuet comté, luxe salades en samosa's. Kijk, zo is kerst helemaal voor elkaar.",
        },
        // section 10
        {
          imgSrc: require("@/assets/c_2.png"),
        },
        // section 11
        {
          imgSrc: require("@/assets/c_3.png"),
          title: "Ontdek onze kerstwijnen",
          titleHtml: "Begint het al te borrelen",
          description:
            "Rood, wit of rosé? Krachtig, soepel of fris? We hebben het allemaal. Zo vind je altijd een lekkere wijn die perfect bij je gerecht past. En dan haal je vele soorten ook nog met 25% korting. Proost!",
        },
        // section 12
        {
          imgSrc: require("@/assets/d_1.png"),
          title: "snoepen van soezen",
          description:
            "De tijgersoes heeft een bijzonder 'jasje', wat al extra feestelijk op tafel staat. Mag het van jou nog specialer? Probeer dan onze nieuwste tijgersoes met champagnesmaak. Om je vingers bij af te likken!",
        },
        // section 13
        {
          imgSrc: require("@/assets/d_2.png"),
          title: "Ontdek onze nieuwe smaken",
          description:
            "Kies uit 18 kerstkransjes met de lekkerste smaken. Hoewel ze allemaal verschillen, hebben ze één ding gemeen: ze worden gemaakt van slaafvrije chocolade, omdat we inkopen via Tony's Open Chain.",
        },
        // section 14
        {
          imgSrc: require("@/assets/d_3.png"),
          title: "Maak het knus",
          description:
            "Weet je wat pas leuk is? Koekjes met elkaar bakken of iets  knutselen. Of maak samen de tafel extra gezellig maken met onze kerstdecoratie. Dan kan daarna het kerstfeest écht beginnen.",
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
    showContent(content) {
      this.selectedContent = content;
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
  padding-bottom: 6.3rem;
}

img,
picture,
video {
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
  // flex: 0 0 25%;
  display: flex;
  align-items: center;
  justify-content: center;
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
.navigation ul {
  list-style-type: none;
  padding: 0;
  background-color: #631b26;
  display: flex;
  height: 7.5rem;
  @include mobile {
    height: auto;
    flex-direction: column;
  }
}
.navigation li {
  flex: 0 0 25%; /* Each li takes up 25% of the width */
  text-align: center;
  background-color: #631b26;
}
.navigation .nav-list {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.navigation .nav-list li {
  flex: 1;
  text-align: center;
}

.navigation .nav-list li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: inherit;
}
.navigation li.active {
  background-color: #631b26;
  border-bottom: 1rem solid white;
  @include mobile {
    border-bottom: 0.5rem solid white;
  }
}
.navigation {
  font-family: "JumboTheSans-Bold", sans-serif;
  color: #fff;
  font-size: 1.9375rem;
}
.selected {
  height: 7.5rem;
  @include mobile {
    height: 4rem;
  }
}
.section-main {
  display: flex;
  justify-content: center;
  align-items: center;
  @include mobile {
    padding: 0;
    flex-direction: column;
  }
}
.section-main img {
  margin: 2.37rem 0 2.38rem 1.56rem;
  width: 32.5625rem;
  height: auto;
  @include mobile {
    padding: 2rem;
    margin: 0;
  }
}
.first-par {
  padding-right: 1.87rem;
  padding-left: 1.87rem;
}
.cta {
  width: 27rem;
  height: 5.0625rem;
  background-color: #eeb717;
  color: #000;
  font-family: "JumboTheSans-Bold", sans-serif;
  font-size: 1.9375rem;
  border-radius: 62.5rem;
  margin: 0 auto;
  margin-bottom: 1.87rem;
  @include mobile {
    width: 90%;
    font-size: 6vw;
  }
}

.top-logo {
  background: #eeb717;
  height: 6.3125rem;
  display: flex;
  justify-content: center;
  img {
    width: 14.0625rem;
    height: 2.8125rem;
    @include mobile {
      height: auto;
    }
  }
}
.first-par-h {
  font-family: "JumboMindset-Regular", sans-serif;
  color: #000;
  font-size: 2.75rem;
  line-height: 2.5625rem; /* 93.182% */
  @include mobile {
    font-size: 2rem;
  }
}
.first-par-p {
  color: #000;
  font-size: 1.75rem;
  line-height: 1.9375rem; /* 110.714% */
  font-family: "JumboIntroHead-Regular", sans-serif;
  margin-top: 0.62rem;
}
.section-main2 img {
  margin: 2.37rem 1.56rem 2.38rem 1.56rem;
  @include mobile {
    margin: 2rem;
  }
}
.wrapper {
  background-position: top;
  background-size: contain;
  padding: 8.5% 11% 6.5%;
  .tns-controls button {
    width: 2.5625vw !important;
    height: 4.375vw !important;
    max-width: 1.5625rem !important;
    max-height: 2.375rem !important;
  }
}
</style>

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";

.section-footer {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--footer-height);
    padding: 0 1rem;
    background: #fff;
    height: 6.3rem;
    background: #eeb717;
    img {
      width: 14.0625rem;
      height: 2.8125rem;
    }
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

.wrapper {
  background-position: top;
  background-size: contain;
  padding: 8.5% 11% 6.5%;
  @include mobile {
    background-size: cover;
    padding: 20% 11% 11.5%;
  }
  .inner {
    display: flex;
  }
}

@media (max-width: 840px) {
  .wrapper {
    padding: 8.5% 8% 6.5%;
  }
}

@media (max-width: 586px) {
  .wrapper {
    padding: 7.5% 8% 12.5%;
  }
}
@media (max-width: 480px) {
  .wrapper {
    padding: 19.5% 8% 12.5%;
  }
}
.img2 {
  height: 26.9375rem;
  width: auto;
  margin: 0 auto;
  @include mobile {
    height: auto;
  }
}
</style>
