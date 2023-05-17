<template>
  <div class="container hero is-fullheight">
    <Header/>
    <Wrapper/>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/skeleton/header/Header";
import Wrapper from "@/components/skeleton/Wrapper";
import Footer from "@/components/skeleton/Footer";
export default {
  name: 'App',
  components: {
    Header,
    Wrapper,
    Footer
  }
}
</script>

<style lang="scss">
</style>
