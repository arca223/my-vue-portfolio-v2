<template>
  <div class="container hero is-fullheight">
    <Header/>
    <Wrapper/>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/skeleton/Header";
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
  * {
    background: $dark!important;
    color: $white-ter!important;
  }

  html, body {
    height: 100vh;
  }

</style>
