<script setup lang="ts">
import { Todo } from '../types';

const props = defineProps<{ todo: Todo }>();
const emit = defineEmits<{
  change: [title: string];
  submit: [];
}>();

const onChagne = (e: any) => {
  emit('change', e.target.value);
};

const onSubmit = () => {
  emit('submit');
};
</script>

<template>
  <form class="form" @submit.prevent="onSubmit">
    <label for="todo">
      <input
        type="text"
        name="todo"
        id="todo"
        class="form__input"
        :value="props.todo.title"
        @change="onChagne"
      />
    </label>
    <button type="submit" class="form__submit" :disabled="props.todo.title === ''">
      {{ props.todo.id === '' ? 'ADD' : 'UPDATE' }}
    </button>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  gap: 16px;
  justify-content: center;
}
.form__input {
  padding: 4px 8px;
  min-width: 250px;
  border-radius: 4px;
}
.form__submit {
  color: var(--white-color);
  font-weight: 700;
  background-color: var(--primary-color);
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
