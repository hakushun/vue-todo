<script setup lang="ts">
import Header from './components/Header.vue';
import Todo from './components/Todo.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <Todo />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--main-bg-color);
}
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  padding: 16px 32px;
}
</style>
