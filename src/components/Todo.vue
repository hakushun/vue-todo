<script setup lang="ts">
import { computed, ref } from 'vue';
import { ulid } from 'ulid';
import { Todo, TodoFilter as TodoFilterType, todoStatus, todoFilter } from '../types';
import TodoForm from './TodoForm.vue';
import TodoFilter from './TodoFilter.vue';
import TodoList from './TodoList.vue';

const initialTodo: Todo = {
  id: '',
  title: '',
  status: todoStatus.DOING,
};
const todo = ref<Todo>(initialTodo);
const todos = ref<Todo[]>([]);
const filter = ref<TodoFilterType>(todoFilter.DOING);

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

const onChagne = (title: string) => {
  todo.value = {
    ...todo.value,
    title,
  };
};

const selectFilter = (_filter: TodoFilterType) => {
  filter.value = _filter;
};

const checkTodo = (id: string) => {
  todos.value = todos.value.map((item) => {
    if (item.id !== id) return item;
    return {
      ...item,
      status: item.status === todoStatus.DOING ? todoStatus.DONE : todoStatus.DOING,
    };
  });
};

const editTodo = (id: string) => {
  const target = todos.value.find((item) => item.id === id);
  if (!target) return;
  todo.value = target;
};

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter((item) => item.id !== id);
};

const onSubmit = () => {
  if (todo.value.title.trim() === '') return;
  if (todo.value.id === '') {
    todos.value.push({
      ...todo.value,
      id: ulid(),
    });
  } else {
    todos.value = todos.value.map((item) =>
      item.id === todo.value.id ? { ...item, title: todo.value.title } : item,
    );
  }
  todo.value = initialTodo;
};
</script>

<template>
  <TodoForm :todo="todo" @change="onChagne" @submit="onSubmit" />
  <section class="todo">
    <TodoFilter :filter="filter" @select="selectFilter" />
    <TodoList :todos="filterdTodos" @check="checkTodo" @edit="editTodo" @delete="deleteTodo" />
  </section>
</template>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;
  margin: 0 auto;
}
</style>
