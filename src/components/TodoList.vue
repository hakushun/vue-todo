<script setup lang="ts">
import { Todo, todoStatus } from '../types';

const props = defineProps<{
  todos: Array<Todo>;
}>();
const emit = defineEmits<{ check: [id: number] }>();

const onChange = (e: any) => {
  emit('check', parseInt(e.target.id, 10));
};
</script>

<template>
  <ul v-if="props.todos.length > 0" class="list">
    <li v-for="todo in props.todos" :key="todo.id" class="list__item">
      <input
        type="checkbox"
        :id="todo.id.toString()"
        class="list__check"
        :checked="todo.status === todoStatus.DONE"
        @change="onChange"
      />
      <label :for="todo.id.toString()" class="list__title">{{ todo.title }}</label>
    </li>
  </ul>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-inline-start: initial;
  list-style: none;
}
.list__item {
  display: flex;
  gap: 16px;
}
.list__check {
  width: 16px;
  cursor: pointer;
  accent-color: var(--secondary-color);
}
.list__title {
  font-size: 1.4rem;
  cursor: pointer;
}
</style>
