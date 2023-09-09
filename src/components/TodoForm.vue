<script setup lang="ts">
import { ref } from 'vue';

const todo = ref<string>('');

const emit = defineEmits<{
  submit: [title: string];
}>();

const onSubmit = () => {
  emit('submit', todo.value);
  todo.value = '';
};
</script>

<template>
  <form class="form" @submit.prevent="onSubmit">
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input type="text" name="todo" id="todo" class="form__input" v-model="todo" />
    <button type="submit" class="form__submit">ADD</button>
  </form>
</template>

<style scoped>
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
