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
  border: 0;
  height: 90%;
  width: 90%;
}
</style>
