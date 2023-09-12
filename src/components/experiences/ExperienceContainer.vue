<template>
  <div>Experience Container Mock Data {{ store.experience.test.test }}</div>
  <Tile :key="experience.id" v-for="experience in store.experience.experiences" :title="experience.title">
    <template v-slot:skill>{{ experience.skill }}</template>
    <template v-slot:time>{{ experience.duration }}</template>
    <template v-slot:description>{{ experience.description }}</template>
  </Tile>
</template>

<script setup>
//import { ref } from 'vue';
import Tile from "@/components/common/Tile";
import { useExperienceStore } from '@/stores/store'

const store = useExperienceStore()

</script>

<style scoped>
.card {
  margin: 2rem 0;
}
</style>