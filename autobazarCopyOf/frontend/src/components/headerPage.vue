<template>

  <header class="header">

    <div id="menu-btn" class="fas fa-bars"></div>



    <router-link to="/"  class="logo">
      <p role="link"><span>Auto</span>Kolaje </p>
    </router-link>

    <nav class="navbar">

      <router-link to="/" >
        <span role="link">Domu</span>
      </router-link>


      <router-link to="/carAnalysis" >
        <span role="link">Analýza prodeje</span>
      </router-link>

     <!-- <a href="https://www.sauto.cz/detail-prodejce/autobazar-kolaje/5695">Nabídka našich vozů</a> -->

      <router-link to="/carsSelection" >
        <span role="">Nabídka našich vozů</span>
      </router-link>

      <router-link to="/services" >
        <span role="link">Naše služby</span>
      </router-link>

      <router-link to="/insuranceScreen" >
        <span role="link">Pojitění vozidel</span>
      </router-link>

      <router-link to="/contacts" >
        <span role="link">Kontakty</span>
      </router-link>

      <router-link to="/aboutUs" >
        <span role="link">O nás</span>
      </router-link>

    </nav>



  </header>

</template>

<script>
export default {
  name: "headerPage",
  methods: {
    routing(namePage) {
      this.$router.push(namePage)
    }

  }
}
</script>

<style scoped>

</style>
