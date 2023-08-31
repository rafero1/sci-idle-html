<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import ActionButton from './components/ActionButton.vue'

const words = ref(0)

const researchPts = ref(0)
const papersPublished = ref(0)

// idle counters
const coffeeCups = ref(0)
const coAuthors = ref(0)
const orientators = ref(0)
const trainees = ref(0)

// increment basic counter
function incrementWords() {
  words.value++
}

// publish paper to earn research points
function publishPaper() {
  const n = 100
  if (words.value < n) {
    alert(`You need to write at least ${n} words to publish a paper!`)
    return
  }

  researchPts.value += Math.floor(words.value / 10)

  words.value = 0
  papersPublished.value ++

  console.log(`research points: ${researchPts.value}`)
  console.log(`papers: ${papersPublished.value}`)
}

class IdleCounter {
  name: string;
  cost:number;
  wps:number;
  description:string;
  prerequisites?:IdleCounter[];

  constructor(name:string, cost:number, wps:number, description:string, prerequisites?:IdleCounter[]) {
    this.name = name
    this.cost = cost
    this.wps = wps
    this.description = description
    this.prerequisites = prerequisites
  }
}

// buy an idle counter
function buyIdleCounter(idleCounter:IdleCounter, amount:number, pts:number) {
  if (pts >= idleCounter.cost) {
    pts -= idleCounter.cost
  }
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld :counter="words" :published-counter="papersPublished" />

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <!-- <RouterView /> -->

  <div class="grid">
    <ActionButton @click="incrementWords" text="Write"></ActionButton>
    <ActionButton @click="publishPaper" text="Publish"></ActionButton>
  </div>
</template>

<style scoped>

.grid {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
