<template>
<div>
  <header-page/>
  <section>
    <p>{{choosenCar.znacka}}</p>
  </section>
  <footer-page/>
</div>


</template>

<script>
import {EventBus} from "@/EventBus";

export default {
  name: "carDetail",
  data(){
    return {
      choosenCar: {}

    }

  },


/*
  mounted() {
    EventBus.$on("sendCarInfo", (car)=>{
      //this.choosenCar = car;

      console.log(car);
      //this.znacka = this.choosenCar.znacka;
    })
  }
  */

  created: function() {
    EventBus.$on("send-car-info", (data) => {
      this.choosenCar = data;
      EventBus.$off("send-car-info");
    });
  }

}
</script>

<style scoped>

</style>
