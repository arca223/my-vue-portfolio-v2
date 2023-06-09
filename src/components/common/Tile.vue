<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        {{ props.title }}
      </p>
    </div>
    <div class="card-content">
      <div class="content">
        <div><slot name="time"></slot></div>
        <div><slot name="skill"></slot></div>
        <div><slot name="description"></slot></div>
      </div>
    </div>
    <div v-if="props.isFooter" class="card-footer">
      <div class="card-footer-item">{{ props.footer }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(
  {
    title: String,
    isFooter: Boolean,
    footer: String
  }
);

</script>

<style scoped>

</style>