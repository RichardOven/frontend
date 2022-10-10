<template>
    <div v-for="post in posts" :key="post.postid" class="card" style="width:45%;">
        <p>HELLO WORLD</p>
        <div class="card-body">
            <h4 class="card-title"><strong>{{ post.title }}</strong></h4>
            <h5 class="card-subtitle mb-2 text-strong">{{ post.author }}</h5>
            <p class="card-text">{{ post.postText }}</p>
            <p class="card-subtitle text-muted">creation date</p>
            <button type="button" class="comment-btn bg-primary text-white">comment</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    // name: "PostCard",
    data() {
        return {
            posts: []
        }
    },

    created: function () {
        this.fetchPosts()
    },

    methods: {
        fetchPosts() {
            axios
                .get('http://localhost:3000/api/posts/')
                .then((res) => {
                    this.posts = res.data
                    console.log(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}



// export default {
//   name: 'PostCard'
// }
</script>


<style scoped>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.card {
    margin: 5rem 5rem 0 25rem
}

.card-body {
    padding: 2rem;

}

</style>