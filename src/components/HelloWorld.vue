<script setup lang="ts">
import { computed, ref } from 'vue'
import { pluralize, getLines, getParagraphs, getPages } from '../logic/counter'

const props = defineProps<{
  counter: number,
  publishedCounter: number
}>()

const lines = computed(() => getLines(props.counter))
const paragraphs = computed(() => getParagraphs(props.counter))
const pages = computed(() => getPages(props.counter))
</script>

<template>
  <div class="greetings">
    <h1><span class="big counter">{{ counter }}</span> {{ pluralize('word', counter) }}</h1>
    <h2 v-if="lines > 0"><span class="big counter">{{ lines }}</span> {{ pluralize('line', lines) }}</h2>
    <h2 v-if="paragraphs > 0"><span class="big counter">{{ paragraphs }}</span> {{ pluralize('paragraph', paragraphs) }}</h2>
    <h2 v-if="pages > 0"><span class="big counter">{{ pages }}</span> {{ pluralize('page', pages) }}</h2>

    <template v-if="publishedCounter > 0">
      <h2><span class="big counter">{{ publishedCounter }}</span> {{ pluralize('paper', publishedCounter) }}</h2>
    </template>
  </div>
</template>

<style scoped>
.big {
  font-size: 5rem;
}

.counter {
  font-weight: 500;
}

h1 {
  font-weight: 500;
  font-size: 1.6rem;
  position: relative;
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
