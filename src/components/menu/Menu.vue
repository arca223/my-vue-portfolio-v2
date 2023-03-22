<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { routes } from '../../router'
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
          class="title is-4"
          @click="currentRoute = link.name">
        <span>{{ capitalize(link.name) }}</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title>span:hover {
    color: $grey-light!important;
    //transform: scale(1.2)!;
  }
  .router-link-active>span {
    color: $grey-light!important;
    //transform: scale(1.5);
  }
</style>