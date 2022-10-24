<template>
    <HeaderLogo />
    <RouterLink to="/home">
      <button class="btn btn-primary btn-med" id="home_btn" role="button"><strong>Home</strong></button>
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
    },

    mounted() {
        //api calling
        axios
            .get("http://localhost:3000/api/users/:id")
            .then((res) => {
            console.log(res);
            this.profile = res.data;
        });
        axios
            .get("http://localhost:3000/api/posts/:id")
            .then((res) => {
            console.log(res);
            this.profile = res.data;
        });
    },
}

</script>



<style scoped>
#home_btn {
  margin: 3rem 0 0 8rem;
  font-size: 18px;
}


</style>