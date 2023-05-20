<template>
  <section class="section"><div class="title">Title Headline</div></section>
  <section class="section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</section>
  <section class="section"><ul>
    <li>https://www.linkedin.com/</li>
    <li>https://www.github.com</li>
    <li>malt</li>
  </ul></section>
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