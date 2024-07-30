<template>
  <span>
    <todo-clear-button />
    <TodoStatistics :itemSize="props.todoSize" />
  </span>
</template>

<script setup lang="ts">
import TodoClearButton from '@/components/todo-footer/todo-clear-button.vue'
import TodoStatistics from '@/components/todo-footer/todo-statistics.vue'

const props = defineProps({
  todoSize: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
span {
  display: grid;
  gap: 10px;
  justify-content: space-around;
}
</style>
