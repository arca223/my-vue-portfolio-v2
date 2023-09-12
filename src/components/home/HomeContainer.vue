<template>
  <section class="section">
    <div class="title">
      {{ store.home.fullName }}<br />
      {{ store.home.header }}
    </div>
  </section>
  <section class="section">
    {{ store.home.description }}
  </section>
  <section class="section">
    <div class="columns">
      <div class="column">
        <a href="https://www.linkedin.com/in/maxime-cocquempot-866944b2/"><span class="icon"><i class="fab fa-linkedin fa-lg"></i></span></a>
      </div>
      <div class="column">
        <a href="https://www.github.com/arca223"><span class="icon"><i class="fab fa-github-alt fa-lg"></i></span></a>
      </div>
      <div class="column">
        <a href="https://www.malt.fr/profile/maximecocquempot"><span class="icon"><img src="malt-logo.svg" alt="malt"/></span></a>
      </div>
      <div class="column">
        Fourth column
      </div>
    </div>
  </section>
  <section class="section">{{ store.home.goal }}</section>
  <section class="section">Github to project</section>
  <section class="section">
    Actual Project:
    <Tile
      :title="'World roadtrip - Sabbatical year'"
      :footer="'Tile foooter'"
      :is-footer="false"
    >
      <template v-slot:time>6 months</template>
      <template v-slot:skill>Yolo Vuejs/SF</template>
      <template v-slot:description>Traveling the world while working on different project<br/> Developing my VueJS Portfolio, learning and working on Vue and SF. Passing the related certifications</template>
    </Tile>
  </section>
  <section class="section">Accéder à toutes mes experiences.</section>
</template>

<script setup>
import Tile from "@/components/common/Tile";
import { useDefaultStore } from '@/stores/store'

const store = useDefaultStore()

</script>

<style scoped>
</style>