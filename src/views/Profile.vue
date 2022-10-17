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
    },

    mounted() {
        //api calling
        axios
            .get("http://localhost:3000/users/:id")
            .then((res) => {
            console.log(res);
            this.profile = res.data;
        });
        axios
            .get("http://localhost:3000/posts/:id")
            .then((res) => {
            console.log(res);
            this.profile = res.data;
        });
    },
}

</script>



<style scoped>



</style>