<template>
  <div class="tab-main">
    <ul class="nav nav-tabs">
      <li v-for="tab in tabs" :key="tab" class="nav-item">
        <a
          class="nav-link"
          :class="{ active: tab === selected }"
          @click="setTab(tab)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style scoped>
.tab-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 27.625rem;
  margin-bottom: 9rem;
  background-color: #006698;
  padding-top: 3.9rem;
  margin-top: -0.9rem;
  color: #ffffff;
}

.nav-link {
  color: #ffffff;
}

.nav-link.active {
  border-radius: 0.125rem;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-color: transparent;
}

.nav-link:hover {
  border-radius: 0.125rem;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-color: transparent;
  cursor: pointer;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  border-width: 0 !important;
  font-size: 1.125rem;
}

@media (max-width: 480px) {
  .tab-main {
    width: 100%;
    height: 35rem;
  }
  .nav-tabs {
    font-size: 0.9375rem;
  }
}
</style>
