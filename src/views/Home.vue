<template>
  <div class>
    <HeaderLogo />
    <router-link to ="/addpost">
      <button class="btn btn-primary btn-med text-strong" id="btn_addPost" role="button"><strong>Add Post</strong></button>
    </router-link>
    <RouterLink to="/profile">
      <button class="btn btn-secondary btn-med text-strong" id ="btn_profile" role="button"><strong>Profile</strong></button>
    </RouterLink>
    <PostCard />
    <RouterView />
  </div> 
</template>

<script>

import PostCard from '@/components/PostCard.vue';
import HeaderLogo from '../components/HeaderLogo.vue'
    
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  
    components: {
    PostCard,
    HeaderLogo
}
}

</script>


<style scoped>

#btn_addPost {
  margin: 5rem 0 0 8rem;
}
#btn_profile {
  margin: 5rem 0 0 3rem;
}



</style>
