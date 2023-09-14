<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { routes } from '@/router'
const router = useRouter()

const currentRoute = ref(router.currentRoute.value.name)

const capitalize = (s) => {
  if (!s) return '';
  s = s.toString();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

</script>

<template>
  <div class="columns">
    <div class="column has-text-centered"
         :key="link.id"
         v-for="link in routes">
      <router-link
          :to="link.path"
          class="title clickable is-4"
          @click="currentRoute = link.name">
        <div>{{ capitalize(link.name) }}</div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>