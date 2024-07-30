<template>
  <span>{{ summary }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  itemSize: {
    type: Number,
    default: 0
  }
})

const summary = computed(() => {
  if (props.itemSize <= 1) {
    return `Total ${props.itemSize} item`
  } else {
    return `Total ${props.itemSize} items`
  }
})
</script>

<style scoped>
span {
  display: inline-flex;
}
</style>
