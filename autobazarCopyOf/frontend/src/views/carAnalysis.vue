<template>
<div>
  <header-page/>

  <br>
  <div class="main-contentA">
    <section class="columnA leftA">

      <h3>Všechny filtry</h3>
      <input name="active" type="radio" @click="zobrazitVsechnyProdanyAuta">

      <h3>Značky: </h3>

      <div  class="filter-znacky" v-for="zn in vsechnyZnacky" :key="zn._id">
        <h3>{{ zn }}</h3>
        <input name="active" type="radio" :id="zn" @click="pouzitZnacku(zn)">

      </div>
      <hr style="width:100%" size="5" color=black>
      <br>

      <h3>Karoserie: </h3>

      <div  class="filter-znacky" v-for="karo in vsechnyKaroserie" :key="karo._id">
        <h3>{{ karo }}</h3>
        <input name="active" type="radio" :id="karo" @click="pouzitKaroserii(karo)">

      </div>
      <hr style="width:100%" size="5" color=black>
      <br>

      <h3>Barvy: </h3>

      <div  class="filter-znacky" v-for="barv in vsechnyBarvy" :key="barv._id">
        <h3>{{ barv }}</h3>
        <input name="active" type="radio" :id="barv" @click="pouzitBarvu(barv)">

      </div>




  </section>



  <section class="columnA rightA">


  <div class="container">
    <h1>Přehled prodaných aut za rok 2021</h1>
    <br>
    <Bar v-if="loaded" :chart-data="chartData" />
  </div>

    <br>
    <div class="border-text-optional-car">
    <h2>Nejvíce prodávané značky za rok 2021</h2>
    <section class="" v-for="car of poctyProdanychZnacek"
             :key="car._id"
    >
      <h2 class="">{{car.znacka}}</h2>
      <p>Počet: {{car.celkovyPocet}}</p>

    </section>
    </div>


    <div class="border-text-optional-car">
      <h2>Nejvíce prodávané karoserie za rok 2021</h2>
      <section class="" v-for="car of poctyProdanychKaroserii"
               :key="car._id"
      >
        <h2 class="">{{car.karoserie}}</h2>
        <p>Počet: {{car.celkovyPocet}}</p>

      </section>
    </div>

    <div class="border-text-optional-car">
      <h2>Nejvíce prodávané barvy aut za rok 2021</h2>
      <section class="" v-for="car of poctyProdanychBarev"
               :key="car._id"
      >
        <h2 class="">{{car.barva}}</h2>
        <p>Počet: {{car.celkovyPocet}}</p>

      </section>
    </div>


    <div class="border-text-optional-car">
      <h1>TOP AUTO roku 2021</h1>
      <div class="title-top-car">
        <p>Značka:</p>
        <h3>{{topZnacka}}</h3>
      </div>


      <div class="title-top-car">
        <p>Karoserie:</p>
        <h3>{{topKaroserie}}</h3>
      </div>


      <div class="title-top-car">
        <p>Barva:</p>
        <h3>{{topBarva}}</h3>
      </div>


      <div class="title-top-car">
        <p>Prměrná cena:</p>
        <h3>{{prumernaCena}} Kč</h3>
      </div>

      <div class="title-top-car">
        <p>Průměrný rok výroby:</p>
        <h3>{{prumernyRok}}</h3>
      </div>

      <div class="title-top-car">
        <p>Průměrně najeto:</p>
        <h3>{{prumerneKilometry}} km</h3>
      </div>

      <br>

    </div>


  </section>




  </div>


  <footer-page/>

</div>


</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import PostService from "@/PostService";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: "carAnalysis",

  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      sellsCars:[],
      pocetProdanychAut:[],

      vsechnyZnacky:[],
      vybranaZnacka:"",
      poctyProdanychZnacek:[],

      vsechnyKaroserie:[],
      vybranaKaroserie:"",
      poctyProdanychKaroserii:[],

      vsechnyBarvy:[],
      vybranaBarva:"",
      poctyProdanychBarev:[],

      prumernaCena: 0,
      prumernyRok: 0,
      prumerneKilometry: 0,
      topZnacka:'',
      topKaroserie:'',
      topBarva:'',

      loaded: false,

      chartData: {
        labels: [ 'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Řijen', 'Listopad', 'Prosinec' ],

        datasets: [
            {
              label:'Všechna auta',
              data: [],
              backgroundColor: '#2772db',


            }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },

  async mounted() {
    let tmp;
    try{
      tmp= await PostService.getPosts();
      for(let i=0; i<tmp.length; i++){
        if(tmp[i].prodane){
          this.sellsCars.push(tmp[i]);
        }
      }
      console.log(this.chartData);
      this.ziskejZnacky();
      this.ziskejKaroserie();
      this.ziskejBarvy();
      this.pridatPocetProdanychAut();

      //console.log(this.pocetProdanychAut);

    } catch (err){
      this.error = err;
    }
    //console.log(this.sellsCars);
    this.zobrazitVsechnyProdanyAuta();
    this.pridatPocetProdanychZnacek();
    this.pridatPocetProdanychKaroserii();
    this.pridatPoctyProdanychBarev();
    this.nejcastejsiAuto();
  },

    methods:{

      ziskejZnacky(){
        this.vybraneZnacky =[];
        for(let i =0; i<this.sellsCars.length; i++){
          if( !(this.vsechnyZnacky.includes(this.sellsCars[i].znacka)))
            this.vsechnyZnacky.push(this.sellsCars[i].znacka);
        }
      },

      ziskejKaroserie(){
        this.vybraneKaroserie =[];
        for(let i =0; i<this.sellsCars.length; i++){
          if( !(this.vsechnyKaroserie.includes(this.sellsCars[i].karoserie)))
            this.vsechnyKaroserie.push(this.sellsCars[i].karoserie);
        }
      },

      ziskejBarvy(){
        this.vybraneBarvy =[];
        for(let i =0; i<this.sellsCars.length; i++){
          if( !(this.vsechnyBarvy.includes(this.sellsCars[i].barva)))
            this.vsechnyBarvy.push(this.sellsCars[i].barva);
        }
      },

      pridatPocetProdanychAut(){

        this.pocetProdanychAut = [0,0,0,0,0,0,0,0,0,0,0,0]

        for(let i=0; i<this.sellsCars.length; i++){
          for(let j=0; j<this.pocetProdanychAut.length; j++){
            if(this.sellsCars[i].datumProdeje === j+1){
              this.pocetProdanychAut[j]++;
            }
          }
        }

      },

    zobrazitVsechnyProdanyAuta(){
      this.chartData.datasets[0].data = this.pocetProdanychAut;
      this.chartData.datasets[0].label = 'Všechna auta';

      this.loaded = true;
    },

   pridatPocetProdanychZnacek(){

        for(let i=0; i<this.vsechnyZnacky.length; i++){
          this.poctyProdanychZnacek[i]= {"znacka": this.vsechnyZnacky[i], "celkovyPocet": 0, "mesice": [0,0,0,0,0,0,0,0,0,0,0,0]};
        }

        for(let i=0; i<this.sellsCars.length; i++){
          for(let j=0; j<this.poctyProdanychZnacek.length; j++){
            if(this.sellsCars[i].znacka === this.poctyProdanychZnacek[j].znacka){
              this.poctyProdanychZnacek[j].celkovyPocet++;
              this.poctyProdanychZnacek[j].mesice[this.sellsCars[i].datumProdeje]++;
            }
          }
        }
        this.poctyProdanychZnacek.sort(function (a, b){
          return b.celkovyPocet - a.celkovyPocet;
        });
        this.topZnacka = this.poctyProdanychZnacek[0].znacka;

        console.log(this.poctyProdanychZnacek);

      },

      pridatPocetProdanychKaroserii(){

        for(let i=0; i<this.vsechnyKaroserie.length; i++){
          this.poctyProdanychKaroserii[i]= {"karoserie": this.vsechnyKaroserie[i], "celkovyPocet": 0, "mesice": [0,0,0,0,0,0,0,0,0,0,0,0]};
        }

        for(let i=0; i<this.sellsCars.length; i++){
          for(let j=0; j<this.poctyProdanychKaroserii.length; j++){
            if(this.sellsCars[i].karoserie === this.poctyProdanychKaroserii[j].karoserie){
              //this.poctyProdanychZnacek[j]++;
              //this.poctyProdanychZnacek[j].mesice[j+1]++;
              this.poctyProdanychKaroserii[j].celkovyPocet++;
              this.poctyProdanychKaroserii[j].mesice[this.sellsCars[i].datumProdeje]++;
            }
          }
        }

        this.poctyProdanychKaroserii.sort(function (a, b){
          return b.celkovyPocet - a.celkovyPocet;
        });

        this.topKaroserie = this.poctyProdanychKaroserii[0].karoserie;
        console.log(this.poctyProdanychKaroserii);

      },


      pridatPoctyProdanychBarev(){

        for(let i=0; i<this.vsechnyBarvy.length; i++){
          this.poctyProdanychBarev[i]= {"barva": this.vsechnyBarvy[i], "celkovyPocet": 0, "mesice": [0,0,0,0,0,0,0,0,0,0,0,0]};
        }

        for(let i=0; i<this.sellsCars.length; i++){
          for(let j=0; j<this.poctyProdanychBarev.length; j++){
            if(this.sellsCars[i].barva === this.poctyProdanychBarev[j].barva){
              this.poctyProdanychBarev[j].celkovyPocet++;
              this.poctyProdanychBarev[j].mesice[this.sellsCars[i].datumProdeje]++;
            }
          }
        }
        this.poctyProdanychBarev.sort(function (a, b){
          return b.celkovyPocet - a.celkovyPocet;
        });

        this.topBarva = this.poctyProdanychBarev[0].barva;

        console.log(this.poctyProdanychBarev);

      },

      pouzitZnacku(zn){
        for(let i=0; i<this.poctyProdanychZnacek.length; i++){
          if(this.poctyProdanychZnacek[i].znacka === zn){
            this.chartData.datasets[0].data = this.poctyProdanychZnacek[i].mesice;
          }
        }
        this.chartData.datasets[0].label = zn;

      },

      pouzitKaroserii(karo){
        for(let i=0; i<this.poctyProdanychKaroserii.length; i++){
          if(this.poctyProdanychKaroserii[i].karoserie === karo){
            this.chartData.datasets[0].data = this.poctyProdanychKaroserii[i].mesice;
          }
        }
        this.chartData.datasets[0].label = karo;
      },

      pouzitBarvu(barv){
        for(let i=0; i<this.poctyProdanychBarev.length; i++){
          if(this.poctyProdanychBarev[i].barva === barv){
            this.chartData.datasets[0].data = this.poctyProdanychBarev[i].mesice;
          }
        }
        this.chartData.datasets[0].label = barv;
      },

      nejcastejsiAuto(){
        for(let i=0; i<this.sellsCars.length; i++) {
          this.prumernaCena += this.sellsCars[i].cena;
          this.prumernyRok += this.sellsCars[i].rok;
          this.prumerneKilometry += this.sellsCars[i].kilometry;
        }
        this.prumernaCena = Math.round(this.prumernaCena/this.sellsCars.length);
        this.prumernyRok = Math.round(this.prumernyRok/this.sellsCars.length);
        this.prumerneKilometry = Math.round(this.prumerneKilometry/this.sellsCars.length);


      }



  }
}

</script>

<style>

.columnA {
  margin-top: 5%;
  float: left;



}
.leftA{
  width: 15%;
  text-align: left;
  border-style: solid;
  margin-left: 5%;
  background: #ffee80;
  padding-left: 2em;
  font-size: 20px;
  border-radius: 1em;

  margin-bottom: 5rem;

}
.rightA{
  padding-left: 10%;
  width: 65%;
  font-size: 15px;
}

/* Clear floats after the columns */
.main-contentA:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .columnA {
    width: 100%;
  }
}

.title-top-car h3, .title-top-car p {
  display: inline;
  padding-left: 1%;
}



</style>
