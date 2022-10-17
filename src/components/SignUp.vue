<template>
  <div>
    <header-logo/>
    <div class="col-md-4">
      <form class ="signup_form">
        <label for ="firstName-input" class = "form-label"></label>
          <input type="text" class="form-control" id = "signup_firstName" placeholder="First Name" value ="" required/> 
        <label for ="lastName-input" class = "form-label"></label>
          <input type = "text" class="form-control" id = "signup_lastName" placeholder="Last Name" name ="lastName" required />
        <label for ="email-input" class = "form-label"></label>
          <input type = "text" class="form-control" id = "signup_email" placeholder= "Email" name = "email" required />
        <label for = "password-input" class = "form-label"></label>
          <input type = "text" class="form-control" id = "signup_password" placeholder = "Password" name = "password" required/>
        <router-link to = "/">
          <input type="submit" id = "signup_btn_2" value = "Sign Up"/>
        </router-link>
        <p class="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>


<script>
import HeaderLogo from './HeaderLogo.vue';

export default {
    name: "SignUp",
    data: function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            validPassword: "",
            errorMessage: ""
        };
    },
    mounted() {
        //api calling
        axios
            .post("http://localhost:3000/users/signup")
            .then((res) => {
            console.log(res);
            this.signup = res.data;
        });
    },
    components: { HeaderLogo }
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
  text-align: center;
  font-weight: 500;
  font-size: medium;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 6rem 0 0 16rem;
}


#signup_btn_2 {
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
    
@media screen and (max-width: 1150px) {
  
}

@media screen and (max-width: 520px) {
  
}


</style>
