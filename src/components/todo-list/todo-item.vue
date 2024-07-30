<template>
  <li class="list-item">
    {{ props.itemContent }}
    <TodoDeleteButton />
    <TodoEditButton />
  </li>
</template>

<script setup lang="ts">
import TodoDeleteButton from '@/components/todo-list/todo-delete-button.vue'
import TodoEditButton from '@/components/todo-list/todo-edit-button.vue'
const props = defineProps({
  itemContent: {
    type: String,
    default: 'Default item content'
  }
})
</script>

<style scoped>
li {
  display: grid;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
}
</style>
