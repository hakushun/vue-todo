<script setup lang="ts">
import { TodoFilter, todoFilter } from '../types';

const props = defineProps<{
  filter: TodoFilter;
}>();
const emit = defineEmits<{
  select: [filter: TodoFilter];
}>();

const onChange = (e: any) => {
  emit('select', e.target.value);
};
</script>
<template>
  <div class="filter">
    <label for="filter">Filter:</label>
    <select
      name="filter"
      id="filter"
      class="filter__select"
      :value="props.filter"
      @change="onChange"
    >
      <option :value="todoFilter.ALL">ALL</option>
      <option :value="todoFilter.DOING">DOING</option>
      <option :value="todoFilter.DONE">DONE</option>
    </select>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  gap: 16px;
  font-size: 1.2rem;
}
.filter__select {
  min-width: 150px;
}
</style>
