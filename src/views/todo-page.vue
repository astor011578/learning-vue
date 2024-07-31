<template>
  <div class="todo">
    <TodoList :todoItems="todoItems" />
    <TodoFooter :todoSize="todoItems.length" />
  </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/todo-list/todo-list.vue'
import TodoFooter from '@/components/todo-footer/todo-footer.vue'

const todoItems = [
  { itemContent: 'todo 1' },
  { itemContent: 'todo 22' },
  { itemContent: 'todo 333' }
]
</script>

<style>
@media (min-width: 1024px) {
  .todo {
    display: block;
    margin: auto;
  }
}
</style>
