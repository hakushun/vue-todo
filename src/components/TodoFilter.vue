<script setup lang="ts">
import { TodoFilter, todoFilter } from '../types';

const props = defineProps<{
  filter: TodoFilter;
}>();
const emit = defineEmits<{
  select: [filter: TodoFilter];
}>();

const onClick = (filter: TodoFilter) => {
  emit('select', filter);
};
</script>
<template>
  <div class="filter">
    <button
      v-for="[key, filter] in Object.entries(todoFilter)"
      :key="key"
      type="button"
      @click="onClick(filter)"
      :aria-selected="props.filter === filter"
      class="filter__button"
    >
      {{ filter }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.filter {
  display: flex;
  gap: 16px;
  justify-content: center;
}
.filter__button {
  padding: 4px 16px;
  min-width: 150px;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--ternary-color);
  }

  &[aria-selected='true'] {
    color: var(--white-color);
    font-weight: 700;
    background-color: var(--secondary-color);
  }
}
</style>
