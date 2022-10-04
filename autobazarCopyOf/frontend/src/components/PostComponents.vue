<template>
  <div>
<div class="filtering-box">

  <button type="button" class="collapsible"  @click="opening" >Open Collapsible</button>
  <div class="content">
    <p>Lorem ipsum...</p>
  </div>

</div>

<div class="car-overview">

</div>
  </div>
</template>

<script>
//import PostService from "@/PostService";
import axios from "axios";
/*
export default {
  name: "PostComponents",
  data(){
    return {
      posts: [],
      error: '',
      text: '',
    }
  },
  async created(){
    try{
      this.posts = await PostService.getPosts();
    }catch (err){
      this.error =err.message;
    }
  }
}
*/
export default {
  name: 'PostComponents',
  data() {
    return {
      Cars: [],
    }
  },
  mounted() {
    axios.get('http://localhost:5000/api/posts/')
        .then((response) =>{
          console.log(response.data);
          this.Cars = response.data;

        })
        .catch((error) => {
          console.log(error);
        });
  },
  methods: {
    /*
    findCar(id){
      let myCar;
      let i;
      for (i = 0; i<this.Cars.length; i++){
        if(id === this.Cars[i]._id){
          myCar = this.Cars[i];
        }
      }
      return myCar;
    }
    */
    opening(){
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }

  }
}

</script>

<style scoped>

.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #555;
}

.collapsible:after {
  content: '\002B';
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
</style>
