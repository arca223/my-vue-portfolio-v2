<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://picsum.photos/40" width="40" height="40">
      </a>
      <div class="navbar-item">Portfolio Website</div>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button" @click="switchLanguage">
              {{ (store.switchVariables.lang === 'fr') ? 'Anglais' : 'Français' }}
            </a>
            <a class="button" @click="toggleDark()">
              {{ (isDark) ? 'Light' : 'Dark' }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

import useEventsBus from '@/eventBus';
import { useDefaultStore } from '@/stores/store.js';
//in script setup or inside the setup hook
const { emit } = useEventsBus();
const store = useDefaultStore();

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);

//import {computed} from "vue";

const switchLanguage = () => {
  emit('switchLangage', (store.switchVariables.lang === 'fr') ? 'en' : 'fr')
}

</script>

<style scoped>
</style>