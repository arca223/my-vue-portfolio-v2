<template>
  <div class="container hero is-fullheight" :class="store.switchVariables.colorMode">
    <Header/>
    <Wrapper/>
    <Footer/>
  </div>
</template>

<script setup>

import Header from '@/components/skeleton/header/Header';
import Wrapper from '@/components/skeleton/Wrapper';
import Footer from '@/components/skeleton/Footer';

</script>

<style lang="scss">
</style>
