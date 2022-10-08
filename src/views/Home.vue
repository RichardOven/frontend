<template>
    <nav>
    <router-link to = "/">
      <i class="fas fa-arrow-left" id="home_arrow"></i>
    </router-link>
    <div class = "signup_page_img">
      <img id = "black-logo" alt="groupomania logo" src="../assets/icon-left-font-monochrome-black.svg" />
    </div> 
  </nav>
    <PostCard />
</template>


<script>
import PostCard from '@/components/PostCard.vue';
  
    
export default {
    name: 'Home', 
    components: { 
        PostCard 
    }
}

</script>

<style scoped>

nav {
  display: flex;
}

i {
  font-size: 1.5rem;
  padding: .5rem;
  color: black;
  margin: 1.75rem 0 0 1.5rem;
}

#black-logo {
  margin: 1rem 0 0 3rem;
  padding: 0;
  width: auto;
  height: 4rem;
}


</style>