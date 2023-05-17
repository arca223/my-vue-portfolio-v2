<script setup>
import Menu from "@/components/skeleton/header/Menu";
import MVPNavbar from "@/components/skeleton/header/MVP-Navbar";
</script>

<template>
  <header class="header m-5 mb-10">
    <MVPNavbar></MVPNavbar>
    <Menu/>
  </header>
</template>

<style lang="scss" scoped>
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>