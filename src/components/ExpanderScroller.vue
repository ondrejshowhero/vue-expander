<template>
  <div class="scroll-container" :class="{leftmost: leftMost, rightmost: rightMost}" ref="container">
    <div class="scroller" ref="scroller" @scroll="scrollerScrolled">
      <div class="items" ref="items">
        <a :href="getUrl(item[3])" target="_blank" class="item" v-for="item in scrollerItems" :key="item">
          <div class="info">
            <p>
              {{item[0]}}
            </p>
            <h3 class="title">{{item[1]}}</h3>
          </div>
          <div class="image">
            <img :src="getImageUrl(item[2])">
          </div>
          <div class="cta">
            SHOP NU
          </div>
        </a>
      </div>
    </div>
    <button class="nav prev" @click="scrollToPrev"></button>
    <button class="nav next" @click="scrollToNext"></button>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderScroller',
    props: {
      mobile: Boolean
    },
    data() {
      return {
        scrollerItems: [
          [
            'Blå Mega Riflet',
            'BILLEDRAMME, 21 CM',
            'product-1.png',
            [
              'https://secure.adnxs.com/clktrb?id=803856&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584460345;dc_trk_cid=213639958;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1',
              'https://secure.adnxs.com/clktrb?id=803860&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584402825;dc_trk_cid=213756821;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1',
            ]
          ],
          [
            'Musselmalet Riflet',
            'TALLERKEN 22 CM',
            'product-2.png',
            [
              'https://secure.adnxs.com/clktrb?id=803854&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584403095;dc_trk_cid=213755489;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1',
              'https://secure.adnxs.com/clktrb?id=803858&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584402828;dc_trk_cid=213756824;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1',
            ]
          ],
          [
            'Koral Musselmalet Halvblonde',
            'HØJHANKSKOP 33 CL',
            'product-3.png',
            [
              'https://secure.adnxs.com/clktrb?id=803855&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584460051;dc_trk_cid=213755492;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1',
              'https://secure.adnxs.com/clktrb?id=803859&redir=https://ad.doubleclick.net/ddm/trackclk/N2300581.3993854SHOWHEROES/B31885389.392711319;dc_trk_aid=584460348;dc_trk_cid=213756827;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1',
            ]
          ],
        ],
        leftMost: true,
        rightMost: false,
        autoscroll: false,
        autoscrollSpeed: 2500
      }
    },
    methods: {
      getUrl(urls) {
        if (this.mobile)
          return urls[1]
        return urls[0]
      },
      getImageUrl(image) {
        return require(`@/assets/products/${image}`)
      },
      scrollToPrev: function() {
        let w = this.$refs.items.children[0].offsetWidth
        this.$refs.scroller.scrollBy({left: w * -1, behavior: 'smooth'})
      },
      scrollToNext: function() {
        let w = this.$refs.items.children[0].offsetWidth
        this.$refs.scroller.scrollBy({left: w, behavior: 'smooth'})
      },
      scrollerScrolled: function() {
        this.leftMost = (this.$refs.scroller.scrollLeft < 50)
        this.rightMost = (this.$refs.scroller.scrollLeft > this.$refs.items.offsetWidth - this.$refs.container.offsetWidth - 50)
      }
    },
    mounted() {
      let rootEl = document.querySelector('.section-scroller .container')
      let handleIntersect = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting)
            entry.target.classList.add('active')
          else
            entry.target.classList.remove('active')
        });
      };
      let observer = new IntersectionObserver(handleIntersect, {root: rootEl, rootMargin: '100% -45% 100% -45%'})
      let targets = document.querySelectorAll('.section-scroller .item')
      targets.forEach(target => {
        observer.observe(target)
      });

      if (this.autoscroll) {
        setInterval(() => {
          if (this.rightMost)
            this.$refs.scroller.scrollTo({left: 0, behavior: 'smooth'})
          else
            this.scrollToNext()
        }, this.autoscrollSpeed || 2500)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  .scroll-container {
    position: relative;
  }
  .scroller {
    @include m {
      overflow: auto;
      scroll-snap-type: x mandatory;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
  .scroller::-webkit-scrollbar {
    display: none;
  }
  .items {
    display: flex;
    justify-content: center;
    @include m {
      display: inline-flex;
      align-items: flex-start;
      padding: 0 20vw;
    }
  }
  .item {
    display: block;
    width: 60vw;
    padding-bottom: 1.375rem;
    scroll-snap-align: center;
    background: #fff;
    text-align: center;
    @include d {
      width: 16.5rem;
    }
    .info {
      padding: 2.125rem 1rem .5rem;
      p {
        font-size: .75rem;
      }
      .title {
        margin-top: .5rem;
        font-family: $font-headings;
        font-size: 1.125rem;
      }
    }
    .image {
      margin: 0 2.25rem .5rem;
    }
  }
  .item + .item {
    margin-left: 7.5vw;
    @include d {
      margin-left: 2.75rem;
    }
  }

  .nav {
    display: none;
    position: absolute;
    top: 0;
    z-index: 10;
    width: 4rem;
    height: 100%;
    border: 0;
    overflow: hidden;
    cursor: pointer;
    &.prev {
      left: 0;
      // background: url('../assets/arr-l.svg') no-repeat center center / 2rem auto;
    }
    &.next {
      right: 0;
      // background: url('../assets/arr-r.svg') no-repeat center center / 2rem auto;
    }
  }

  .leftmost .prev {
    display: none;
  }
  .rightmost .next {
    display: none;
  }

</style>

