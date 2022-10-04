<template>
  <div>


    <section class="all-cars" v-if="!oneCar">
      <header-page/>


    <!-- Seradit vsechno nebo vsechno vybrane -->
      <section class="border-text">
          <h2>Seřadit:</h2>
        <button class="sort-btn" @click="seradit('nejlevnejsi')" >Nejlevnější</button>
        <button class="sort-btn" @click="seradit('nejdrazsi')">Nejdražší</button>
        <button class="sort-btn"  @click="seradit('nejnovejsi')">Nejnovější</button>
        <button class="sort-btn"  @click="seradit('kilometry')">Stav tachometru</button>
        <button class="sort-btn"  @click="seradit('vykon')">Nejvýkonější</button>

      </section>


      <!----------------------------------------------------------------------->
      <!-----------------------------Filtrovani-------------------------------->
      <!----------------------------------------------------------------------->
   <div class="main-content">

     <!--------------------------Filtrovani- znamky ---------------------------->
     <section class="column left">
       <!--Filtr vaha -->
       <div  class="filter-znacky">
         <h2>Min váha:</h2>
         <input class="cursor" type=range min=0 max=100 step=25 v-model="zadanaVaha" @change="zadejVahu(zadanaVaha)">
         <p>Váha: {{this.zadanaVaha}}%</p>
       </div>

       <!--Filtr cena -->
       <div  class="filter-znacky">
       <h3>Cena:</h3>
         <input class="cursor" type=range min=0 max=4 step=1 v-model="znamkaCeny" @change="zadejZnamkuCeny(znamkaCeny)">
         <p>Váha: {{this.znamkaCeny*25}}%</p>
         <input v-model.number="maxCena" class="column-line" ref="maxCena" @change="zadejMaxCenu"  placeholder="Do:" />
         <input v-model.number="minCena" class="column-line" ref="minCena" @change="zadejMinCenu"  placeholder="Od:" />
       </div>


       <!--Filtr rok -->
       <div  class="filter-znacky">
         <h3>Rok výroby:</h3>
         <input class="cursor" type=range min=0 max=4 step=1 v-model="znamkaRokVyroby" @change="zadejZnamkuRokVyroby(znamkaRokVyroby)">
         <p>Váha: {{this.znamkaRokVyroby*25}}%</p>

         <input v-model.number="maxRokVyroby" class="column-line" ref="maxRokVyroby" @change="zadejMaxRok"  placeholder="Do:" />
         <input v-model.number="minRokVyroby" class="column-line" ref="minRokVyroby"  @change="zadejMinRok" placeholder="Od:" />
       </div>

       <!--Filtr kilometry -->
       <div  class="filter-znacky">
         <h3>Stav tachometru:</h3>
         <input class="cursor" type=range min=0 max=4 step=1 v-model="znamkaStavTachometru" @change="zadejZnamkuKilometru(znamkaStavTachometru)">
         <p>Váha: {{this.znamkaStavTachometru*25}}%</p>

         <input v-model.number="maxStavTachometru" class="column-line" ref="maxStavTachometru"  @change="zadejMaxKilometry" placeholder="Do:" />
         <input v-model.number="minStavTachometru" class="column-line" ref="minStavTachometru" @change="zadejMinKilometry" placeholder="Od:" />
       </div>

       <!--Filtr vykon -->
       <div  class="filter-znacky">
         <h3>Výkon:</h3>
         <input class="cursor" type=range min=0 max=4 step=1 v-model="znamkaVykon" @change="zadejZnamkuVykonu(znamkaVykon)">
         <p>Váha: {{this.znamkaVykon*25}}%</p>

         <input v-model.number="maxVykon" class="column-line" ref="maxVykon"  @change="zadejMaxVykon" placeholder="Do:" />
         <input v-model.number="minVykon" class="column-line" ref="minVykon" @change="zadejMinVykon" placeholder="Od:" />
       </div>



       <!--------------------------Filtrovani- vyber -------------------------------->
       <!-------Filtr znacky ------->
        <button class="filter-button" @click="this.odkrytZnacky">Značka {{this.symbolZnacky}}</button>
       <br>
       <div v-if="this.ukazatZnacky">
       <div  class="filter-znacky" v-for="zn in znacky" :key="zn._id">
         <h3>{{ zn }}</h3>
         <input name="active" type="checkbox" :id="zn" @change="pridatZnacku(zn)">

       </div>
         <hr style="width:100%" size="3" color=black>
       </div>

       <!-------Filtr karoserie ----->
       <button class="filter-button" @click="this.odkrytKaroserie">Karoserie {{this.symbolKaroserie}}</button>
       <br>
       <div v-if="this.ukazatKaroserie">
       <div  class="filter-znacky" v-for="karo in karoserie" :key="karo._id">
         <h3>{{ karo }}</h3>
      <input name="active" type="checkbox" :id="karo" @change="pridatKaroserii(karo)">


       </div>

         <hr style="width:100%" size="3" color=black>
       </div>

       <!-------Filtr paliva --------->
       <button class="filter-button" @click="this.odkrytPaliva">Palivo {{this.symbolPaliva}}</button>
       <br>
       <div v-if="this.ukazatPaliva">
         <div  class="filter-znacky" v-for="pal in paliva" :key="pal._id">
           <h3>{{ pal }}</h3>
           <input name="active" type="checkbox" :id="pal" @change="pridatPalivo(pal)">

         </div>

         <hr style="width:100%" size="3" color=black>
       </div>



       <!-------Filtr barvy --------->
       <button class="filter-button" @click="this.odkrytBarvy">Barva {{this.symbolBarvy}}</button>
       <br>
       <div v-if="this.ukazatBarvy">
         <div  class="filter-znacky" v-for="barv in barvy" :key="barv._id">
           <h3>{{ barv }}</h3>
           <input name="active" type="checkbox" :id="barv" @change="pridatBarvu(barv)">

         </div>

         <hr style="width:100%" size="3" color=black>
       </div>
       <br>

       <div class="filter-znacky">
         <button class="filterByGrade" @click="hlavniFiltrovani()">Potvrdit</button>
       </div>


       <br>

     </section>


    <!--
    <section class="column right" v-if="this.omezeni()">
      <section class="border-text-choose-car" v-for="car of Cars"
           :key="car._id"
      >
        <div class="carDescription">
        <h1 class="title-car">{{car.znacka}} {{car.model}}</h1>
        <img v-bind:src=car.fotka class="imgCar" alt="" border="0" />
        <h3 class="">{{car.karoserie}}</h3>
        <h3 class="">{{car.motor}} {{car.vykon}} kW</h3>
        <p>{{car.rok}}</p>
        <br>

          <button class="showCar" @click="toCarDetail(car)">Detail auta</button>

        <br>
        <h2 class ="price-car-browsing">{{car.cena}} Kč</h2>
        </div>

      </section>
    </section>

  -->

    <section class="column right">
      <h2>Pocet nalezenych aut: {{this.vybranaAuta.length}}</h2>
      <br>
      <section class="border-text-choose-car" v-for="car of vybranaAuta"
               :key="car._id"
      >
        <div class="carDescription">
          <h1 class="title-car">{{car.znacka}} {{car.model}}</h1>
          <img v-bind:src=car.fotka class="imgCar" alt="" border="0" />
          <h3 class="">{{car.karoserie}}</h3>
          <h3 class="">{{car.motor}} {{car.vykon}} kW</h3>
          <p>{{car.rok}}</p>
          <p>Najeto: {{car.kilometry}} km</p>
          <br>
          <button class="showCar" @click="toCarDetail(car)">Detail auta</button>

          <br>
          <h2 class ="price-car-browsing">{{car.cena}} Kč</h2>
          <h2 class ="car-grade">Toto vozidlo vyhovuje vašim požadavkům na: {{car.datumProdeje}} %</h2>
        </div>

      </section>
    </section>
   </div>


    <footer-page/>
    </section>

    <section class="one-car" v-else>
      <header-page/>

      <section class="border-text-choose-car">
      <h1 class="subtitle-car-browsing">{{choosenCar.znacka}} {{choosenCar.model}}</h1>
      <img v-bind:src=choosenCar.fotka class="imgCar" alt="" border="0" />

      <br>
      <button class="showCar" @click="oneCar=false">Zpet</button>

      <br>
      <h2 class ="price-car-browsing">{{choosenCar.cena}} Kč</h2>
        <p>Rok: {{choosenCar.rok}}</p>
        <p>Najeté kilometry: {{choosenCar.kilometry}}</p>
        <p>Palivo: {{choosenCar.palivo}}</p>
        <p>Motor: {{choosenCar.motor}}</p>
        <p>Výkon: {{choosenCar.vykon}}</p>
        <p>Barva: {{choosenCar.barva}}</p>
      </section>
      <footer-page />

    </section>

  </div>

</template>

<script>


//import axios from "axios";
import PostService from "@/PostService";


export default {
  name: 'carSelection',
  /*
  props:{
    brand:{
      type: String
    }
   }
   */

  data(){
    return {
      oneCar:false,
      choosenCar:{},


      Cars: [],
      vybranaAuta: [],
      zvoleneAuto:{},


      znacky: [],
      vybraneZnacky:[],
      vsechnyZnacky: true,
      symbolZnacky:"▼",
      ukazatZnacky:false,


      karoserie:[],
      vybraneKaroserie:[],
      vsechnyKaroserie: true,
      symbolKaroserie:"▼",
      ukazatKaroserie:false,


      paliva:[],
      vybranaPaliva:[],
      vsechnyPaliva: true,
      symbolPaliva:"▼",
      ukazatPaliva:false,


      barvy:[],
      vybraneBarvy:[],
      vsechnyBarvy: true,
      symbolBarvy:"▼",
      ukazatBarvy:false,


      minCena: 0,
      maxCena: 1000000,
      znamkaCeny: 4,

      minRokVyroby:0,
      maxRokVyroby:2022,
      znamkaRokVyroby: 4,

      minStavTachometru:0,
      maxStavTachometru:1000000,
      znamkaStavTachometru: 4,

      minVykon:0,
      maxVykon:1000,
      znamkaVykon: 4,

      zadanaVaha:0

    }
  },

  async mounted() {
    let tmp;
    try{
      tmp= await PostService.getPosts();
      for(let i=0; i<tmp.length; i++){
        if(!tmp[i].prodane){
          this.Cars.push(tmp[i]);
        }
      }
      this.getZnacky();
      this.getKaroserie();
      this.getPaliva();
      this.getBarvy();
      this.vybranaAuta = this.Cars;

    } catch (err){
      this.error = err;
    }
    console.log(this.Cars);
  },

  methods: {

    seradit(parametr){


        switch (parametr) {
          case 'nejlevnejsi':

            this.vybranaAuta.sort(function (a, b){
              return a.cena - b.cena;
            })
            break;

          case 'nejdrazsi':

            this.vybranaAuta.sort(function (a, b){
              return b.cena - a.cena;
            })
            break;

          case 'nejnovejsi':

            this.vybranaAuta.sort(function (a, b){
              return b.rok - a.rok;
            })
            break;

          case 'kilometry':

            this.vybranaAuta.sort(function (a, b){
              return a.kilometry - b.kilometry;
            })
            break;

          case 'vykon':

            this.vybranaAuta.sort(function (a, b){
              return b.vykon - a.vykon;
            })
            break;
        }



    },

    getZnacky(){
      this.vybraneZnacky =[];
      for(let i =0; i<this.Cars.length; i++){
        this.Cars[i].datumProdeje = 100;
        if( !(this.znacky.includes(this.Cars[i].znacka)))
          this.znacky.push(this.Cars[i].znacka);
      }
    },
    getKaroserie(){
      this.vybraneKaroserie =[];
      for(let i =0; i<this.Cars.length; i++){
        if( !(this.karoserie.includes(this.Cars[i].karoserie)))
          this.karoserie.push(this.Cars[i].karoserie);
      }
    },

    getPaliva(){
      this.vybranaPaliva =[];
      for(let i =0; i<this.Cars.length; i++){
        if( !(this.paliva.includes(this.Cars[i].palivo)))
          this.paliva.push(this.Cars[i].palivo);
      }
    },

    getBarvy(){
      this.vybraneBarvy =[];
      for(let i =0; i<this.Cars.length; i++){
        if( !(this.barvy.includes(this.Cars[i].barva)))
          this.barvy.push(this.Cars[i].barva);
      }
    },



    odkrytZnacky(){
      this.ukazatZnacky = !this.ukazatZnacky;
      if(this.ukazatZnacky){
        this.symbolZnacky = "▲";
      }else{
        this.symbolZnacky = "▼";
      }
    },
    odkrytKaroserie(){
      this.ukazatKaroserie= !this.ukazatKaroserie;
      if(this.ukazatKaroserie){
        this.symbolKaroserie = "▲";
      }else{
        this.symbolKaroserie = "▼";
      }
    },

    odkrytPaliva(){
      this.ukazatPaliva= !this.ukazatPaliva;
      if(this.ukazatPaliva){
        this.symbolPaliva = "▲";
      }else{
        this.symbolPaliva = "▼";
      }
    },

    odkrytBarvy(){
      this.ukazatBarvy= !this.ukazatBarvy;
      if(this.ukazatBarvy){
        this.symbolBarvy = "▲";
      }else{
        this.symbolBarvy = "▼";
      }
    },

    omezeni(){
      if(this.vsechnyZnacky && this.vsechnyKaroserie && this.vsechnyPaliva && this.vsechnyBarvy){
        return true;
      }else{
        return false;
      }

    },



    //is selected car allready in array vybranaAuta
    isInArray(id){
      let bool = false;
      for(let i=0; i< this.vybranaAuta.length; i++){
        if(this.vybranaAuta[i]._id === id){
          bool = true;
        }
      }
      return bool;
    },

    pridatZnacku(zn){

      if( (!this.vybraneZnacky.includes(zn)) || this.vybraneZnacky.length === 0) {
        this.vybraneZnacky.push(zn);

      }else{
        //remove from vybranaKategorie
        this.vybraneZnacky.splice(this.vybraneZnacky.indexOf(zn), 1);
        if(this.vybraneZnacky.length ===0){
          this.vsechnyZnacky = true;
        }
      }

    },

    pridatKaroserii(karo){

      if( (!this.vybraneKaroserie.includes(karo)) || this.vybraneKaroserie.length === 0) {
        this.vybraneKaroserie.push(karo);

      }else{
        //remove from vybranaKategorie
        this.vybraneKaroserie.splice(this.vybraneKaroserie.indexOf(karo), 1);
        if(this.vybraneKaroserie.length === 0){
          this.vsechnyKaroserie = true;
        }
      }


    },



    pridatPalivo(pal){

      if( (!this.vybranaPaliva.includes(pal)) || this.vybranaPaliva.length === 0) {
        this.vybranaPaliva.push(pal);

      }else{
        //remove from vybranaKategorie
        this.vybranaPaliva.splice(this.vybranaPaliva.indexOf(pal), 1);
        if(this.vybranaPaliva.length === 0){
          this.vsechnyPaliva = true;
        }
      }


    },

    pridatBarvu(barv){

      if( (!this.vybraneBarvy.includes(barv)) || this.vybraneBarvy.length === 0) {
        this.vybraneBarvy.push(barv);


      }else{
        //remove from vybranaKategorie
        this.vybraneBarvy.splice(this.vybraneBarvy.indexOf(barv), 1);
        if(this.vybraneBarvy.length === 0){
          this.vsechnyBarvy = true;
        }
      }


    },




    zadejMaxCenu(){

      this.maxCena = this.$refs.maxCena.value;
      if(this.maxCena === ''){
        this.maxCena = 10000000;

      }
      console.log('max cena je: ',this.maxCena);

    },

    zadejMinCenu(){


      this.minCena = this.$refs.minCena.value;
      if(this.minCena === ''){
        this.minCena = 0;

      }
      console.log('min cena je: ',this.minCena);


    },

    zadejVahu(vaha){
      this.zadanaVaha = vaha;

    },

    zadejZnamkuCeny(znamka){
      this.znamkaCeny = znamka;
      console.log('znamka ceny je: ', this.znamkaCeny);
    },




    zadejMaxRok(){
      this.maxRokVyroby = this.$refs.maxRokVyroby.value;
      if(this.maxRokVyroby === ''){
        this.maxRokVyroby = 2022;

      }

    },
    zadejMinRok(){
      this.minRokVyroby = this.$refs.minRokVyroby.value;
      if(this.minRokVyroby === ''){
        this.minRokVyroby = 0;

      }

    },
    zadejZnamkuRokVyroby(znamka){
      this.znamkaRokVyroby = znamka;
    },



    zadejMaxKilometry(){
      this.maxStavTachometru = this.$refs.maxStavTachometru.value;
      if(this.maxStavTachometru === ''){
        this.maxStavTachometru = 1000000;

      }
    },
    zadejMinKilometry(){
      this.minStavTachometru = this.$refs.minStavTachometru.value;
      if(this.minStavTachometru === ''){
        this.minStavTachometru = 0;

      }
    },

    zadejZnamkuKilometru(znamka){
      this.znamkaStavTachometru = znamka;
    },

    zadejMaxVykon(){
      this.maxVykon = this.$refs.maxVykon.value;
      if(this.maxVykon === ''){
        this.maxVykon = 500;

      }
    },
    zadejMinVykon(){
      this.minVykon = this.$refs.minVykon.value;
      if(this.minVykon === ''){
        this.minVykon = 500;

      }
    },

    zadejZnamkuVykonu(znamka){
      this.znamkaVykon = znamka;
    },




    zrusitFiltry(){
      this.vybraneKaroserie.clear();
    },

    filtrujPodleVahy(){

      for(let i=0; i<this.vybranaAuta.length; i++){
        this.vybranaAuta[i].datumProdeje =100;
      }

    let tmpZnamka;
    //1) CENA
      for(let i=0; i<this.vybranaAuta.length; i++) {
        if (!(this.vybranaAuta[i].cena >= this.minCena && this.vybranaAuta[i].cena <= this.maxCena)){
          tmpZnamka = this.znamkaCeny;
          console.log(this.znamkaCeny);
          if(tmpZnamka > 0) {
            this.vybranaAuta[i].datumProdeje -= ((this.znamkaCeny * 25) / (tmpZnamka * (4 / tmpZnamka)));
            if (this.vybranaAuta[i].datumProdeje < 0) {
              this.vybranaAuta[i].datumProdeje = 0;
            }
          }

        }

      }

    //2) ROK VYROBY
      for(let i=0; i<this.vybranaAuta.length; i++) {
        if (!(this.vybranaAuta[i].rok >= this.minRokVyroby && this.vybranaAuta[i].rok <= this.maxRokVyroby)){
          tmpZnamka = this.znamkaRokVyroby;
          console.log(this.znamkaRokVyroby);
          if(tmpZnamka > 0) {
            this.vybranaAuta[i].datumProdeje -= ((this.znamkaRokVyroby * 25) / (tmpZnamka * (4 / tmpZnamka)));
            if (this.vybranaAuta[i].datumProdeje < 0) {
              this.vybranaAuta[i].datumProdeje = 0;
            }
          }
        }

      }

      //3) STAV TACHOMETRU

      for(let i=0; i<this.vybranaAuta.length; i++) {
        if (!(this.vybranaAuta[i].kilometry >= this.minStavTachometru && this.vybranaAuta[i].kilometry <= this.maxStavTachometru)){
          tmpZnamka = this.znamkaStavTachometru;
          console.log(this.znamkaStavTachometru);
          if(tmpZnamka > 0) {
            this.vybranaAuta[i].datumProdeje -= ((this.znamkaStavTachometru *25)/(tmpZnamka*(4/tmpZnamka)));
            if(this.vybranaAuta[i].datumProdeje < 0){
              this.vybranaAuta[i].datumProdeje = 0;
            }
          }
        }

      }

      //4) VYKON
      for(let i=0; i<this.vybranaAuta.length; i++) {
        if (!(this.vybranaAuta[i].vykon >= this.minVykon && this.vybranaAuta[i].vykon <= this.maxVykon)){
          tmpZnamka = this.znamkaVykon;
          console.log(this.znamkaVykon);
          if(tmpZnamka > 0) {
            this.vybranaAuta[i].datumProdeje -= ((this.znamkaVykon *25)/(tmpZnamka*(4/tmpZnamka)));
            if(this.vybranaAuta[i].datumProdeje < 0){
              this.vybranaAuta[i].datumProdeje = 0;
            }
          }

        }

      }

    },

    hlavniFiltrovani(){
      this.vybranaAuta = this.Cars;
      //1) zavolani metody se switch a filtrovnani podle znamky


      this.filtrujPodleVahy();

      //2) filtrovani podle vybranych parametru

      let znackyF = this.vybraneZnacky;
      let karoserieF = this.vybraneKaroserie;
      let palivaF = this.vybranaPaliva;
      let barvyF = this.vybraneBarvy;
      let vahaF = this.zadanaVaha;


      //1.filtr - znacky
      if(this.vybraneZnacky.length !== 0) {
        this.vsechnyZnacky = false;
        this.vybranaAuta = this.vybranaAuta.filter(function (data) {
          let bool = false;
          for (let i = 0; i < znackyF.length; i++) {
            if (data.znacka === znackyF[i]) {
              bool = true;
            }
          }
          return bool;
        });

      }

      //2.filtr - karoserie
      if(this.vybraneKaroserie.length !==0) {
        this.vsechnyKaroserie = false;
        this.vybranaAuta = this.vybranaAuta.filter(function (data) {
          let bool = false;
          for (let i = 0; i < karoserieF.length; i++) {
            if (data.karoserie === karoserieF[i]) {
              bool = true;
            }
          }
          return bool;
        });

      }

      //3.filtr -paliva
      if(this.vybranaPaliva.length !==0) {
        this.vsechnyPaliva = false;
        this.vybranaAuta = this.vybranaAuta.filter(function (data) {
          let bool = false;
          for (let i = 0; i < palivaF.length; i++) {
            if (data.palivo === palivaF[i]) {
              bool = true;
            }
          }
          return bool;
        });

      }

      //4.filtr -barvy
      if(this.vybraneBarvy.length !==0) {
        this.vybraneBarvy = false;
        this.vybranaAuta = this.vybranaAuta.filter(function (data) {
          let bool = false;
          for (let i = 0; i < barvyF.length; i++) {
            if (data.barva === barvyF[i]) {
              bool = true;
            }
          }
          return bool;
        });

      }


      this.vybranaAuta.sort(function (a, b){
        return b.datumProdeje - a.datumProdeje;
      });


      this.vybranaAuta = this.vybranaAuta.filter(function (data) {
         if(data.datumProdeje >= vahaF){
           return true;
         }
      });

    },





    toCarDetail(car){
      this.choosenCar = car;
      this.oneCar = true;


    },



  }
}
</script>

<style>


.column {
  float: left;


}
.left{
  width: 20%;

  border-style: solid;
  padding-left: 1em;
  background: #ffee80;
  font-size: 20px;
  border-radius: 1em;


  margin-bottom: 5rem;
}

.filter-button{
  font-size: 18px;

  background:#ffee80;
}

.column-line{
  width: 100%;
}
.cursor{
  width: 100%;
}

.filter-znacky{
  width: 100%;
  padding-bottom: 15%;
  font-size: 15px;
}


.right{
  width: 80%;
}

/* Clear floats after the columns */
.main-content:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

.showCar{
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */



.border-text-choose-car{
  text-align: center;

  width: 100%;
  background: #ffee80;
  font-size: 20px;
  border-style: solid;
  border-radius: 1em;


  margin-bottom: 5rem;
}

.border-text
{
  width:100%;
  text-align: center;
}
.sort-btn
{
  background-color: #e7e7e7;
  color: black;
  border: none;
  /* color: white; */

  padding: 15px 32px;
  display: inline-block;
  font-size: 16px;
  border-style: solid;


}


.filterByGrade {

  border: 1px solid #007600;
  color: #FFFFFF;
  padding: 0.75em 1.5em;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;

  background: linear-gradient(#009000, #007600);

}
.car-grade{
  font-size: 25px;
  text-align: right;
}

</style>
