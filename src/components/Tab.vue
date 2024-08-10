<template>
  <div v-if="isSelected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabComponent", // Rename the component to a multi-word name
  props: {
    isSelected: {
      type: Boolean,
    },
  },
};
</script>

<style scoped></style>
