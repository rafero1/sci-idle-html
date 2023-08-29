<script setup lang="ts">
defineProps<{
  counter: number
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ counter }}</h1>
    <h3>
      {{ counter < 5 ? 'Keep writing!' : "You've successfully written " + counter/5 + ' paragraphs!' }}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
