<template>
  <div class = "home">
    <div class = "home_page_img">
      <img id = "logo" alt="groupomania logo" src="../assets/icon-left-font-monochrome-black.svg" />
    </div> 
    <div class = "login_section">
      <div class="col-md-4" id = "login_card">
        <form class = "login_form" id = "login_form">
          <label for ="email-input" class = "form-label"></label>
            <input type= "text" class="form-control" id = "email" placeholder="Email" v-model ="email" required/>
          <label for = "password-input" class = "form-label"></label>
            <input type="text" class="form-control" id = "password" placeholder ="Password" v-model ="password" required/>
          <!-- <p class="errorMessage">{{ errorMessage }}</p> -->
        </form>
          <router-link to ="/home">
            <button type = "submit" v-on:click ="LogIn()" id = "login_btn">Log In</button>
          </router-link>
          <router-link to ='/signup'>
            <button type = "submit"  id = "signup_btn">Create new account</button>
          </router-link>
      </div>
    </div>
  
  </div>
 
</template>



<script>

export default {
  data() {
    return {
      email: "",
      password: ""
      }
  },
  methods: {
    LogIn() {
      const logInForm = {
        email: this.email,
        password: this.password
      }
      const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(logInForm),
      }
      fetch("http://localhost:3000/api/users/login", requestOptions)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (response.ok) {
              localStorage.setItem("user", JSON.stringify(data));
              this.$router.push("/home");
              console.log(data)
            }
          })
          .catch((error) => {
            error: error;
          })
        }
      }
  }








    



  
  //   async LogIn() {
  //     try {
  //       let response = await this.$http.post("http://localhost:3000/api/users/login", this.login)
  //       let token = response.data.token
  //       localStorage.setItem("user", token)
  //       this.$router.push("/")
  //     } catch (err) {
  //       console.log(err.response)
  //     }
  //   }
  // }


</script>


<style scoped>

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.home {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    background-color: lightgrey;
}

.home_page_img {
    display: inline-block;
    justify-content: start;
    height: 8rem;
    width: 33%;
    margin: 21.3rem 0 0 16.5rem;
}

#logo {
    height: 5rem;
}

.login_form {
    display: flex;
    flex-direction: column;
    margin: 1rem 4rem 0 4rem;
}

label, input {
    padding: .5rem;
    box-sizing: border-box;
    text-align: center;
    font-weight: 400;
    font-size: medium;
}

/* #email {
  height: 2.7rem;
  border-radius: 20px;
} */

/* #password {
  height: 2.7rem;
  border-radius: 20px;
  margin-top: 2rem;
} */


.login_section {
    display: inline-block;
    justify-content: end;
    width: 35%;
    height: auto;
    margin: 12rem 13rem 0 0;
}

#login_card {
    background-color: #FBF9F9;
    padding: 5px;
    width: 100%;
    height: 24rem;
    margin-bottom: 10px;
    box-shadow: 8px 8px 3px rgba(0, 0, 0, 0.867);
}

#login_btn {
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
  padding: 1rem;
  width: 17rem;
  margin: 3rem 0 0 8.5rem;
  font-size: 18px;
  color: black;
  border: none;
  box-shadow: 5px 5px 5px gray;
  background: linear-gradient(to bottom right, #9E9CE2, #2e27e4); 
}

#login_btn:hover,
#signup_btn:hover {
  filter: brightness(90%);
}

#signup_btn {
  font-weight: bold;
  font-style: normal;
  cursor: pointer;
  border-radius: 20px;
  padding: 1rem;
  width: 17rem;
  margin: 2.2rem 0 0 8.5rem; /*  12 for large monitor */
  font-size: 18px;
  color: black;
  border: none;
  box-shadow: 5px 5px 5px gray;
  background: linear-gradient(to bottom right, #7BDCA1, #05CD54); 
}



@media screen and (max-width: 520px) {
  
}


</style>
