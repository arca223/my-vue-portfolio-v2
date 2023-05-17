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

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button" @click="switchLanguage">
              French
            </a>
            <a class="button" @click="switchDisplayMode">
              Dark Mode
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

//import {computed} from "vue";

const switchLanguage = () => {
  console.log('switch lang')
}
const switchDisplayMode = () => {
  console.log('switch mode')
}
</script>

<style scoped>

</style>