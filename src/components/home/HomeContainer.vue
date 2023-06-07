<template>
  <section class="section">
    <div class="title">
      Maxime Cocquempot. Freelance Fullstack - PHP Symfony / VueJS
    </div>
  </section>
  <section class="section">
    Description du profil <br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
  <section class="section">Project Goal + Techno used</section>
  <section class="section">Github to project</section>
  <section class="section">
    <Tile
      :title="'Tile header'"
      :content="'Tile content'"
      :footer="'Tile foooter'"/>
  </section>
  <section class="section">Accéder à toutes mes experiences.</section>
</template>

<script setup>
import Tile from "@/components/common/Tile";
</script>

<style scoped>
</style>