<template>
    <div v-for="post in posts" :key="post.postid" class="card" style="width:45%;">
        <div class="card-body">
            <h4 class="card-title"><strong>{{ post.title }}</strong></h4>
            <h5 class="card-subtitle mb-4 text-strong">posted by {{ post.author }}</h5>
            <p class="card-text mb-4">{{ post.posttext }}</p>
                <div class="card-img">
                    <img v-if="file" @change="getImage()" class="image" :src="fileSource" />
                </div>
            <p class="card-subtitle text-muted">{{ post.creationdate }}</p>
            <!-- <button type="button" class="comment-btn bg-primary text-white">add comment</button> -->
        </div>
    </div>
</template>


<script>

export default {
    name: "PostCard",
    data() {
        return {
            posts: [],
            
        }
    },

    created() {
        this.fetchPosts()
    },
    methods: {
        fetchPosts() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        };
        fetch("http://localhost:3000/api/posts", requestOptions)
            .then((response) => {
                return response
            .json()
                .then((data) => {
                    console.log(data);
                    this.posts = data;
                });
            })
            .catch((error) => {
            console.error("There was an error!", error);
            });
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
    margin: 5rem 5rem 0 26rem;
    background: linear-gradient(to bottom right, #9ea5f4, #ffffff);
    box-shadow: 6px 6px 3px rgba(65, 64, 64, 0.867);
    /* background-color: rgb(163, 161, 248); */
}


.card-body {
    padding: 2rem;

}

</style>