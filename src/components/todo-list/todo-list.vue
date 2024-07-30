<template>
  <ul class="list" v-for="(item, index) in props.todoItems" :key="index">
    <todo-item :itemContent="item.itemContent" />
  </ul>
</template>

<script setup lang="ts">
import TodoItem from '@/components/todo-list/todo-item.vue'

const props = defineProps({
  todoItems: {
    type: Array<{ itemContent: string }>,
    default: []
  }
})
</script>

<style scoped></style>
