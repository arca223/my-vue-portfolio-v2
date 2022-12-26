<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<script>

import Header from "@/components/skeleton/Header";
import Main from "@/components/skeleton/Main";
import Footer from "@/components/skeleton/Footer";
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
  html {
    background: black;
    color: white;
  }
</style>
