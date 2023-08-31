<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  border: solid var(--color-text) 2px;
  height: 42px;
  width: auto;
  margin: 12px;
  color: var(--color-text);
  background: white;
  cursor: pointer;
  font-size: large;
  transition: 0.2s ease;
  font-size: large;
}

button:hover {
  color: whitesmoke;
  background: var(--color-text);
}
</style>
