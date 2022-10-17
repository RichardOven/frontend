<template>
    <HeaderLogo />
    <RouterLink to="/home">
      <button class="btn btn-primary btn-med" role="button">Home</button>
    </RouterLink>
    <RouterView />
</template>


<script>
// get posts with selected user id
// if you are the user, ability to delete posts
// ability to delete user 

import HeaderLogo from '@/components/HeaderLogo.vue';

export default {
  name: 'Profile',
  components: {
    HeaderLogo
  }
}

</script>



<style scoped>



</style>