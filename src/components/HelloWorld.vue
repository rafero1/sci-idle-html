<script setup lang="ts">

const props = defineProps<{
  counter: number
}>()

const pluralize = (word: string, count: number, plural?: string) => {
  return count > 1 || count < 1 ? plural ? plural : `${word}s`: word
}

const lines = () => Math.floor(props.counter / 10)
const paragraphs = () => Math.floor(props.counter / 50)
const pages = () => Math.floor(props.counter / 250)

</script>

<template>
  <div class="greetings">
      <h1 v-if="counter < 1" class="green" >Start writing!</h1>
      <div v-else>
        <h1 class="green">You've successfully written</h1>
        <h2>{{ counter }} {{ pluralize('word', counter) }}</h2>
        <h2 v-if="lines() > 0">{{ lines() }} {{ pluralize('line', lines()) }}</h2>
        <h2 v-if="paragraphs() > 0">{{ paragraphs() }} {{ pluralize('paragraph', paragraphs()) }}</h2>
        <h2 v-if="pages() > 0">{{ pages() }} {{ pluralize('page', pages()) }}</h2>
      </div>
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
