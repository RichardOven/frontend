<template>
  <HomeCard />
  <router-view />
  <!-- <div id = "welcome">
    <h1>Welcome to Groupomania</h1>
  </div> -->
</template>



<script>

import HomeCard from '../components/HomeCard.vue';
// import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HomeCard
  }
}

</script>





<style>


</style>
