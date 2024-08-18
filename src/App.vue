<template>
  <section class="section-video">
    <!-- fix autoplay back to "true" -->
    <ExpanderVideo
      :filename="videoFile"
      :mobile="mobile"
      :autoplay="true"
      url="https://secure.adnxs.com/clktrb?id=808760&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401482261%3Bdc_trk_aid%3D593516858%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
    />
  </section>

  <!-- <section class="section-top">
    <img src="@/assets/logo.png" alt="" />
  </section> -->

  <section class="section-main">
    <section class="main-txt">
      <h1 class="heading">Een carrière bij de Belastingdienst?</h1>
      <p class="lead">
        Werken bij de Belastingdienst betekent werken met en vóór burgers en
        ondernemers. Of je nou ICT’er, dataspecialist, fiscalist of
        administratief medewerker bent, vanuit jouw eigen expertise kun je werk
        doen wat er toe doet. Je krijgt veel vrijheid en mogelijkheden om je
        werk in te richten zoals je dat zelf wilt en komt terecht in een
        omgeving met oneindig veel carrièremogelijkheden.
      </p>
    </section>

    <!-- <a href="" target="_blank" class="cta">Read more</a> -->
  </section>

  <section class="section-tab">
    <TabNav
      :tabs="[
        'Accountancy & finance',
        'Data & analyse',
        'Fiscaal & juridisch',
        'ICT',
        'Starter',
        'Mbo',
      ]"
      :selected="selected"
      @selected="setSelected"
    >
      <Tab :isSelected="selected === 'Accountancy & finance'">
        <a
          href="https://secure.adnxs.com/clktrb?id=808764&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401286336%3Bdc_trk_aid%3D592870613%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
          target="_blank"
        >
          <picture>
            <source srcset="@/assets/1-mobile.jpg" media="(max-width: 480px)" />
            <img class="tab-img" src="@/assets/1.jpg" />
          </picture>
        </a>
      </Tab>

      <Tab :isSelected="selected === 'Data & analyse'">
        <a
          href="https://secure.adnxs.com/clktrb?id=808762&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401286330%3Bdc_trk_aid%3D592851595%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
          target="_blank"
        >
          <picture>
            <source srcset="@/assets/2-mobile.jpg" media="(max-width: 480px)" />
            <img class="tab-img" src="@/assets/2.jpg" />
          </picture>
        </a>
      </Tab>

      <Tab :isSelected="selected === 'Fiscaal & juridisch'">
        <a
          href="https://secure.adnxs.com/clktrb?id=808763&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401286333%3Bdc_trk_aid%3D592870610%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
          target="_blank"
        >
          <picture>
            <source srcset="@/assets/3-mobile.jpg" media="(max-width: 480px)" />
            <img class="tab-img" src="@/assets/3.jpg" />
          </picture>
        </a>
      </Tab>

      <Tab :isSelected="selected === 'ICT'">
        <a
          href="https://secure.adnxs.com/clktrb?id=808761&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401283720%3Bdc_trk_aid%3D592971693%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
          target="_blank"
        >
          <picture>
            <source srcset="@/assets/4-mobile.jpg" media="(max-width: 480px)" />
            <img class="tab-img" src="@/assets/4.jpg" />
          </picture>
        </a>
      </Tab>

      <Tab :isSelected="selected === 'Starter'">
        <a
          href="https://secure.adnxs.com/clktrb?id=808765&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401286339%3Bdc_trk_aid%3D592870616%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
          target="_blank"
        >
          <picture>
            <source srcset="@/assets/5-mobile.jpg" media="(max-width: 480px)" />
            <img class="tab-img" src="@/assets/5.jpg" />
          </picture>
        </a>
      </Tab>

      <Tab :isSelected="selected === 'Mbo'">
        <a
          href="https://secure.adnxs.com/clktrb?id=808766&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401286342%3Bdc_trk_aid%3D592870619%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
          target="_blank"
        >
          <picture>
            <source srcset="@/assets/6-mobile.jpg" media="(max-width: 480px)" />
            <img class="tab-img" src="@/assets/6.jpg" />
          </picture>
        </a>
      </Tab>
    </TabNav>
  </section>

  <section class="mid-txt">
    <p class="mid-p">
      Werken bij de Belastingdienst betekent veel vrijheid en mogelijkheden om
      je werk in te richten zoals je dat zelf wilt. Daarnaast investeren we in
      jouw ontwikkeling met opleidingen, flexibele leertrajecten en interessante
      projecten. Zodat jij je vak zo goed mogelijk kunt uitoefenen.
    </p>
  </section>

  <section class="section-scroller">
    <!-- <ExpanderScroller /> -->
    <ExpanderSlider />
  </section>

  <section class="bottom-txt">
    <section class="bottom-txt-cont">
      <h1 class="slogan">Ontdek jouw carrière</h1>
      <p class="slogan-p">
        Benieuwd naar jouw carrièremogelijkheden bij de Belastingdienst? Bekijk
        direct onze openstaande vacatures.
      </p>
      <a
        href="https://secure.adnxs.com/clktrb?id=808760&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401482261%3Bdc_trk_aid%3D593516858%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
        target="_blank"
        class="cta"
        >Bekijk alle vacatures</a
      >
    </section>
  </section>

  <div class="line"></div>

  <footer class="section-footer">
    <div class="container">
      <a
        href="https://secure.adnxs.com/clktrb?id=808760&redir=https%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN1405923.3848558MATTERKIND11%2FB32067229.401482261%3Bdc_trk_aid%3D593516858%3Bdc_trk_cid%3D217279617%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bltd%3D%3Bdc_tdv%3D1"
        target="_blank"
        class="website"
      >
        <p>werken.belastingdienst.nl</p>
      </a>
    </div>
  </footer>
</template>

<script>
import ExpanderVideo from "./components/ExpanderVideo.vue";
// import ExpanderScroller from "./components/ExpanderScroller.vue";
import ExpanderSlider from "./components/ExpanderSlider.vue";
import TabNav from "./components/TabNav.vue";
import Tab from "./components/Tab.vue";

export default {
  name: "App",
  components: {
    ExpanderVideo,
    // ExpanderScroller,
    ExpanderSlider,
    TabNav,
    Tab,
  },
  data() {
    return {
      mobile: false,
      videoFile: "1080.mp4",
      selected: "Accountancy & finance",
    };
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
  },
  created() {
    // if (window.innerWidth < 480) {
    //   this.mobile = true
    //   this.videofile = '480.mp4'
    // }
  },
};
</script>

<!-- below follows global styling that also applies to component inner code-->

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
  // padding-bottom: var(--footer-height);
  font-family: $font, sans-serif;
  text-decoration: none;
}
a {
  text-decoration: none !important;
}
p {
  text-decoration: none !important;
}
button {
  text-decoration: none !important;
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
  height: 22.3125rem;
  background-color: $color-1;
  color: $color-4;
  display: flex;
  justify-content: center;
}

.main-txt {
  padding-top: 6.28rem;
  width: 43rem;
  display: flex;
  flex-direction: column;
}

.heading {
  font-size: 3rem;
  padding-bottom: 1.25rem;
}

.lead {
  font-size: 1.25rem;
  line-height: 2rem; /* 160% */
}

.mid-txt {
  height: 16rem;
  display: flex;
  justify-content: center;
}

.mid-p {
  height: 8rem;
  width: 40.63rem;
  font-size: 1.25rem;
  padding-top: 4rem;
}

.bottom-txt {
  height: 23.69rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}

.bottom-txt-cont {
  height: 14rem;
  width: 32.3125rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 7.5rem;
}

.slogan {
  text-align: center;
  color: $color-1;
  font-size: 3rem;
}

.slogan-p {
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem; /* 160% */
  padding-bottom: 1.81rem;
  padding-top: 0.62rem;
}

.cta {
  color: $color-4;
  text-align: center;
  border-radius: 0.125rem;
  background: #006698;
  display: flex;
  padding: 1rem 1.875rem;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  transition: all 0.3s ease-in-out;
}

.cta:hover {
  scale: 1.05;
  transition: all 0.3s ease-in-out;
}
.line {
  width: 100%;
  height: 0.125rem;
  background: #deeff8;
  align-self: stretch;
  margin-top: 7.5rem;
}
.section-footer {
  width: 100%;
  height: 10.56rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.website p {
  color: $color-1;
  text-align: center;
  font-size: 1.375rem;
  line-height: 2.9375rem; /* 213.636% */
  text-decoration: none;
}
.section-footer .container[data-v-7ba5bd90] {
  display: flex;
  justify-content: center;
}
.section-footer .container[data-v-7ba5bd90] {
  display: flex;
  justify-content: center !important;
}

.tab-img {
  margin-top: 3rem;
  width: 50.4375rem;
  height: 25.3125rem;
}
@media (max-width: 480px) {
  .tab-img {
    width: 20.9375rem;
    height: 30.3125rem;
  }

  .section-main {
    height: 28rem;
  }

  .main-txt {
    padding-top: 3rem;
    width: 18.44rem;
  }

  .heading {
    font-size: 1.875rem;
    padding-bottom: 0.63rem;
  }

  .lead {
    font-size: 1.125rem;
    line-height: 1.75rem; /* 155.556% */
  }
  .mid-txt {
    height: 17rem;
  }
  .mid-p {
    height: 14rem;
    width: 18.44rem;
    font-size: 1.125rem;
    padding-top: 1rem;
  }
  .bottom-txt {
    height: 20.75rem;
    justify-content: flex-start;
  }
  .bottom-txt-cont {
    width: 18.44rem;
    height: 13.8125rem;
    padding-top: 4.88rem;
  }
  .slogan {
    font-size: 1.875rem;
  }
  .slogan-p {
    font-size: 1.125rem;
    line-height: 1.75rem; /* 155.556% */
  }
  .cta {
    font-size: 1.125rem;
    padding: 0.94rem 1.5rem;
  }
  .section-footer {
    height: 7rem;
  }
}
</style>

<!-- next follows local styling that only aplie tho app.vue top part style, no child components -->

<style scoped lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/mixins.scss";
@import "@/scss/fonts.scss";

.section-footer {
  .container {
    display: flex;
    justify-content: center !important;
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
