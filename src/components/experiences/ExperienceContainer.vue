<template>
  <div>Experience Container Mock Data</div>
  <Tile :key="experience.id" v-for="experience in experiences" :title="experience.title">
    <template v-slot:skill>{{ experience.skill }}</template>
    <template v-slot:time>{{ experience.duration }}</template>
    <template v-slot:description>{{ experience.description }}</template>
  </Tile>
</template>

<script setup>
import { ref } from 'vue';
import Tile from "@/components/common/Tile";
const experiences = ref([
  {
    id:1,
    employer: 'abbeal',
    duration: '2 months',
    skill: 'Sf Vue JS',
    description: 'long desc',
    title: 'consultant at C company'
  },
  {
    id:2,
    employer: 'abbeal',
    duration: '4 months',
    skill: 'Laravel, Angular',
    description: 'another desc',
    title: 'consultant at A company'
  },
  {
    id:3,
    employer: 'sqli',
    duration: '6 months',
    skill: 'Sf, Vue',
    description: 'second to last desc',
    title: 'lead consultant at B Company'
  },
  {
    id:4,
    employer: 'yook',
    duration: '9 months',
    skill: 'skillful skills',
    description: 'mocking desc',
    title: 'consultant'
  },
]);

</script>

<style scoped>
.card {
  margin: 2rem 0;
}
</style>