<template>
    <PostCard />
    <RouterView />
</template>


<script>
// get posts with selected user id
// get comments attached to those posts
// if you are the user, delete posts

import PostCard from '@/components/PostCard.vue';

export default {
  name: 'Profile',
  components: {
    PostCard
  }
}

</script>



<style scoped>



</style>