<template>
<div>
  <header-page/>

  <section class="optionalCar" id="optionalCar">

    <h1 class="heading">Komisní prodej</h1>

    <!-- <img data-speed="5" class="home-parallax" src="image/about_us.jpg" alt=""> -->

    <section class="border-text-optional-car">
      <p>Vlastníte ojetý vůz, který jste se rozhodli prodat a máte představu o jeho ceně.
        Vůz k nám přivezete, my Vám poradíme s aktuální tržní cenou a již jen čekáte na vhodného kupce.
        Inzerujeme Vaše vozidlo na mnoha internetových serverech a dalších inzertních médiích.
        V případě prodeje Vás ihned budeme kontaktovat a peníze Vám předáme po odečtení naší provize.
        Parkovné neúčtujeme! Veškeré formality s převodem vozidla na MÚ – odboru dopravy vyřídíme automaticky za Vás.</p>

    </section>

    <section class="table-consigment">
    <h2 class="heading">Tabulka provizí</h2>
    <table class="demo">

      <thead>
      <tr>
        <th>Prodejní cena</th>
        <th>Provize</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>do 30 000kč</td>
        <td>3000kč vč. DPH</td>
      </tr>
      <tr>
        <td>30 000 - 50 000kč</td>
        <td>4000kč vč. DPH</td>
      </tr>
      <tr>
        <td>50 000-115 000kč</td>
        <td>5000kč vč. DPH</td>
      </tr>
      <tr>
        <td>115 000 a více kč</td>
        <td>4% prodejní ceny + DPH</td>
      </tr>
      </tbody>
    </table>
    <br>
    </section>

    <section class="border-text-optional-car">
      <h3 class="border-title-optional-car">Potřebné doklady k prodeji vozu::</h3>
      <ul>
        <li>velký technický průkaz</li>
        <li>malý technický průkaz (nyní ORV – osvědčení o registraci vozidla)</li>
        <li>osvědčení o měření emisí – tzv. EMISE (růžová nebo zelená kartička)</li>
        <li>pokud vlastníte servisní knížku nebo jiné doklady potvrzující servisování vozu nebo návod k obsluze …</li>
        <li>všechny klíče k vozidlu, dálková ovládání</li>
        <li>kód k imobilizéru, rádiu …</li>
        <li>je-li Vaše vozidlo ze zahraničí a máte-li i zahr. technický průkaz (není nezbytné)</li>
        <li>občanský průkaz vlastníka vozidla</li>
        <li>v případě nepřítomnosti vlastníka vozu je nutné doložit plnou moc k prodeji vozu a popřípadě k převzetí peněz za prodaný vůz</li>

      </ul>



    </section>
  </section>

  <footer-page/>
</div>


</template>

<script>
export default {
  name: "consigment_sale"
}
</script>

<style scoped>

</style>
