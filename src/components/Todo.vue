<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, TodoFilter as TodoFilterType, todoStatus, todoFilter } from '../types';
import TodoForm from './TodoForm.vue';
import TodoFilter from './TodoFilter.vue';
import TodoList from './TodoList.vue';

const todos = ref<Todo[]>([]);
const filter = ref<TodoFilterType>(todoFilter.ALL);

const filterdTodos = computed<Todo[]>(() => {
  switch (filter.value) {
    case todoFilter.ALL:
      return todos.value;
    case todoFilter.DOING:
      return todos.value.filter((item) => item.status === todoStatus.DOING);
    case todoFilter.DONE:
      return todos.value.filter((item) => item.status === todoStatus.DONE);
    default:
      return [];
  }
});

const selectFilter = (_filter: TodoFilterType) => {
  filter.value = _filter;
};

const checkTodo = (id: number) => {
  todos.value = todos.value.map((item) => {
    if (item.id !== id) return item;
    return {
      ...item,
      status: item.status === todoStatus.DOING ? todoStatus.DONE : todoStatus.DOING,
    };
  });
};

const onSubmit = (title: string) => {
  if (title.trim() === '') return;
  todos.value.push({
    id: (todos.value[todos.value.length - 1]?.id ?? 0) + 1,
    title,
    status: todoStatus.DOING,
  });
};
</script>

<template>
  <TodoForm @submit="onSubmit" />
  <section class="todo">
    <TodoFilter :filter="filter" @select="selectFilter" />
    <TodoList :todos="filterdTodos" @check="checkTodo" />
  </section>
</template>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
</style>
