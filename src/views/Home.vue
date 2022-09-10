<template>
  <HomeCard />
  <router-view />
</template>



<script>

import HomeCard from '../components/HomeCard.vue';


export default {
  name: 'Home',
  components: {
    HomeCard
  }
}

</script>





<style>


</style>
