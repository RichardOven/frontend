<template>
  <div>
    <HeaderLogo />
    <router-link to ="/addpost">
      <button class="btn btn-primary btn-med text-strong" id="btn_addPost" role="button">Add Post</button>
    </router-link>
    <RouterLink to="/profile">
      <button class="btn btn-secondary btn-med text-strong" id ="btn_profile" role="button">Profile</button>
    </RouterLink>
    <PostCard />
    <RouterView />
  </div> 
</template>

<script>

import PostCard from '@/components/PostCard.vue';
import HeaderLogo from '../components/HeaderLogo.vue'
    
export default {
    name: 'Home', 
    components: {
    PostCard,
    HeaderLogo
}
}

</script>


<style scoped>
#btn_addPost {
  margin: 5rem
}



</style>
