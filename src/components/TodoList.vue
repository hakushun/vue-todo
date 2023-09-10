<script setup lang="ts">
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';
import { Todo, todoStatus } from '../types';

const props = defineProps<{
  todos: Array<Todo>;
}>();
const emit = defineEmits<{
  check: [id: string];
  edit: [id: string];
  delete: [id: string];
}>();

const onChange = (id: string) => {
  emit('check', id);
};

const onClickEdit = (id: string) => {
  emit('edit', id);
};

const onClickDelete = (id: string) => {
  emit('delete', id);
};
</script>

<template>
  <ul v-if="props.todos.length > 0" class="list">
    <li v-for="todo in props.todos" :key="todo.id" class="list__item">
      <input
        type="checkbox"
        :id="todo.id"
        class="list__check"
        :checked="todo.status === todoStatus.DONE"
        @change="onChange(todo.id)"
      />
      <label
        :for="todo.id"
        class="list__title"
        :class="{ 'list__title--done': todo.status === todoStatus.DONE }"
        >{{ todo.title }}</label
      >
      <button type="button" aria-label="edit" class="list__action" @click="onClickEdit(todo.id)">
        <PencilSquareIcon />
      </button>
      <button
        type="button"
        aria-label="delete"
        class="list__action"
        @click="onClickDelete(todo.id)"
      >
        <TrashIcon />
      </button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
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
  align-items: center;
}
.list__check {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: var(--secondary-color);
}
.list__title {
  flex: 1;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &.list__title--done {
    text-decoration: line-through;
  }
}
.list__action {
  width: 32px;
  height: 32px;
  padding: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: var(--ternary-color);
  }
}
</style>
