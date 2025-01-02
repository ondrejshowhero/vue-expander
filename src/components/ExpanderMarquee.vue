<template>
  <div class="container">
    <div class="scroller">
      <div class="items items-main">
        <a :href="item.url" target="_blank" class="item" v-for="item in items" :key="item" :data-name="item.title">
          <div class="image">
            <img :src="getImageUrl(item.image)">
          </div>
          <div class="text">
            <h2 class="title">{{ item.title }}</h2>
          </div>
        </a>
        <div class="items items-copy">
          <a :href="item.url" target="_blank" class="item" v-for="item in items" :key="item" :data-name="item.title">
            <div class="image">
              <img :src="getImageUrl(item.image)">
            </div>
            <div class="text">
              <h2 class="title">{{ item.title }}</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpanderMarquee',
    data() {
      return {
        items: [
          {
            title: 'First item',
            image: 'image-1.jpg',
            url: '',
          },
          {
            title: 'Second item',
            image: 'image-2.jpg',
            url: '',
          },
          {
            title: 'Third item',
            image: 'image-3.jpg',
            url: '',
          },
        ],
      }
    },
    methods: {
      getImageUrl(image) {
        return require(`@/assets/marquee/${image}`)
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';
  @import '@/scss/mixins.scss';

  @keyframes marquee {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .scroll-container {
    position: relative;
  }
  .scroller {
    overflow: hidden;
  }
  .items {
    // position: relative;
    display: inline-flex;
    justify-content: space-between;
    align-items: stretch;
  }
  .items-main {
    will-change: transform;
    animation: marquee 15s linear infinite normal forwards;
    &:hover {
      animation-play-state: paused;
    }
  }
  .items-copy {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate3d(100%, 0, 0);
  }
  .item {
    position: relative;
    display: block;
    width: 23.5rem;
    margin-right: 2rem;
    @include d {
      width: 31.125rem;
      margin-right: .5rem;
    }
    .text {
      text-align: center;
    }
    .title {
      margin-bottom: .25rem;
      font-family: $font-headings;
      font-size: 1.5rem;
      font-weight: 900;
    }
    p {
      font-family: $font-headings;
      font-size: 1rem;
      font-weight: 600;
      color: $color-1;
    }
    .image {
      overflow: hidden;
      img {
        transition: transform .3s;
      }
    }
    &:hover {
      .image {
        img {
          transform: scale(1.05);
        }
      }
    }
  }

</style>

