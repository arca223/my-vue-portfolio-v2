<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        {{ props.title }}
      </p>
    </div>
    <div class="card-content">
      <div class="content">
        {{ props.content }}
      </div>
    </div>
    <div class="card-footer">
      <div class="card-footer-item">{{ props.footer }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(
  {
    title: String,
    content: String,
    footer: String
  }
);

</script>

<style scoped>

</style>