<template>
  <div>
    <header-page/>
  <section class="home" id="home">

    <h1 class="home-title">Vítejte na stránkách autobazaru AutoKOLAJE</h1>

   <!--  <img :src="require(`./image/welcomePicture.png`)" alt=""/> -->
    <img src="../image/head14.jpg" class="imgCar" alt="" border="0" />
   <!-- <a data-speed="7" href="https://www.sauto.cz/detail-prodejce/autobazar-kolaje/5695" class="btn home-parallax">K nabídce vozů</a> -->
    <router-link  class="btn home-parallax" to="/carsSelection" >
      <span role="">K nabídce vozů</span>
    </router-link>

  </section>
    <footer-page/>
  </div>

</template>

<script>


export default {
  name: "indexScreen",

}
</script>

<style scoped>

</style>
