<template>

  <section class="footer" id="footer">

    <div class="box-container">


      <div class="box">
        <h3>Otvírací doba</h3>

        <router-link to="/"  class="fas fa-arrow-right">
          <span role="link">Domu</span>
        </router-link>

        <router-link to="/carAnalysis"  class="fas fa-arrow-right">
          <span role="link">Analýza prodeje</span>
        </router-link>

        <router-link to="/carsSelection" class="fas fa-arrow-right">
          <span role="">Nabídka našich vozů</span>
        </router-link>

        <router-link to="/services" class="fas fa-arrow-right">
          <span role="link">Naše služby</span>
        </router-link>

        <router-link to="/insuranceScreen" class="fas fa-arrow-right">
          <span role="link">Pojitění vozidel</span>
        </router-link>

        <router-link to="/contacts" class="fas fa-arrow-right">
          <span role="link">Kontakty</span>
        </router-link>

        <router-link to="/aboutUs" class="fas fa-arrow-right">
          <span role="link">O nás</span>
        </router-link>

      </div>

      <div class="box">
        <h3>Kontakty</h3>
        <a href="#"> <i class="fas fa-phone"></i> +420 605 273 846</a>
        <a href="#"> <i class="fas fa-phone"></i> +420 777 817 375</a>
        <a href="#"> <i class="fas fa-phone"></i> +420 325 651 123</a>
        <a href="#"> <i class="fas fa-envelope"></i>info@autokolaje.cz</a>
        <a href="#"> <i class="fas fa-map-marker-alt"></i>Kolaje - 289 04</a>
      </div>


    </div>

    <div class="credit"> Autobazar Auto Kolaje - Autobazar Kolaje </div>

  </section>

</template>

<script>
export default {
  name: "footerPage"
}
</script>

<style scoped>

</style>
