<template>
    <div v-for="post in posts" :key="post.postid" class="card" style="width:45%;">
        <div class="card-body">
            <h4 class="card-title"><strong>{{ post.title }}</strong></h4>
            <h5 class="card-subtitle mb-2 text-strong">posted by {{ post.author }}</h5>
            <p class="card-text">{{ post.posttext }}</p>
                <div class="card-img">
                    <img v-if="file" @change="getImage()" class="image" :src="fileSource" />
                </div>
            <p class="card-subtitle text-muted">{{ post.creationdate }}</p>
            <!-- <button type="button" class="comment-btn bg-primary text-white">add comment</button> -->
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: "PostCard",
    data() {
        return {
            posts: [],
            
        }
    },

    created: function () {
        this.fetchPosts()
    },

    methods: {
        getImage() {
            this.file = this.$refs.file.files[0];
            this.fileSource = URL.createObjectURL(this.$refs.file.files[0]);
        },

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
</script>


<style scoped>

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.card {
    margin: 5rem 5rem 0 26rem
}

.card-body {
    padding: 2rem;

}

</style>