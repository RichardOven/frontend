<template>
    <p>This is where the main feed of posts will be</p>
    <div v-for="post of posts">
        <p><strong>{{post.title}}</strong></p>>
        <p>{{post.author}}</p>
        <p>{{post.posttext}}</p>
        <p>{{post.creationdate}}</p>
       
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                posts:[]
            }
        },
        mounted () {
            //api calling
            axios
            .get('http://localhost:3000/posts/')
            .then((res) => {
            console.log(res);
            this.posts = res.data;
            })
        }
    }
</script>