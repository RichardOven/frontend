<template>
    <div>
      <header-logo/>
      <div class="col-md-4">
        <h2 class="addPost_header"><strong>Create a Post</strong></h2>
        <form class ="addpost_form">
          <label for ="firstName-input" class = "form-label"></label>
            <input type="text" class="form-control" id = "firstName" placeholder="Name" maxlength="15" v-model="firstName" required/>
          <label for ="title-input" class = "form-label"></label>
            <input type="text" class="form-control" id = "title" placeholder="Title" minlength="3" v-model="title" required/>
          <label for ="postText-input" class = "form-label"></label>
            <input type = "text" class="form-control" id = "postText" placeholder="Write post" minlength="25" v-model="postText" required />
        <div id="file">
            <input type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ref="file"/>
        </div>
        <img v-if="file" class="image" :src="fileSource" />
            <router-link to = "/home">
                <input type="submit" id = "create_post_btn" v-on:click ="sendPost()" value = "Create Post"/>
            </router-link>
        </form>
      </div>
    </div>
  </template>


<script>
import HeaderLogo from '../components/HeaderLogo.vue';

export default {
    name: 'AddPost',
    components: {
        HeaderLogo
    },
    methods: {
        sendPost() {
            let addPostForm = [];
            let requestOptions = [];
            let post = {};
        
            if(this.file != null) {
                post = JSON.stringify({
                name: this.name,
                title: this.title,
                postText: this.postText
                });
                addPostForm = new FormData();
                addPostForm.set('file', this.file);
                addPostForm.set('post', post);
                console.log(addPostForm);
        
                requestOptions = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: addPostForm,
                };
            } else {
            addPostForm = {
                name: this.name,
                title: this.title,
                postText: this.postText,
            }
            requestOptions = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(addPostForm),
            }
        }
        fetch("http://localhost:3000/api/posts/", requestOptions)
            .then((response) => {
                return response
                .json()
                .then((data) => {
                    console.log(data);
                        if (response.ok) {
                            this.$router.push("/addPost");
                        }
                });
            })
            .catch((error) => {
            console.error("There was an error!", error);
            })
        }
    },
    mounted() {
      //api calling
      axios
          .post("http://localhost:3000/api/posts/")
          .then((res) => {
          console.log(res);
          this.addpost = res.data;
      });
  },

  created: function () {
        this.sendPost()
    },
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

label, input {
  padding: .5rem;
  /* text-align: center; */
  font-weight: 500;
  font-size: medium;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0 0 12rem;
}

#file {
    width: 100%;
    margin-top: 1rem;
}
.addPost_header {
    margin: 3rem 0 1rem 12rem;
    color: blue;
}


#create_post_btn {
  font-weight: bold;
  font-style: normal;
  cursor: pointer;
  border-radius: 25px;
  padding: .5rem;
  width: 14rem;
  margin: 4rem 0 0 9.7rem; /*  12 for large monitor */
  font-size: 18px;
  color: black;
  border: none;
  box-shadow: 5px 5px 5px gray;
  background: linear-gradient(to bottom right, #8521dd, #be5deb); 
}




</style>