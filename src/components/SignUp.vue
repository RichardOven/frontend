<template>
  <div>
    <header-logo/>
    <div class="col-md-4">
      <form class ="signup_form">
        <label for ="firstName-input" class = "form-label"></label>
          <input type="text" class="form-control" id = "signup_firstName" placeholder="First Name" maxlength="15" v-model="firstName" required/> 
        <label for ="lastName-input" class = "form-label"></label>
          <input type = "text" class="form-control" id = "signup_lastName" placeholder="Last Name" maxlength = "20" v-model="lastName" required />
        <label for ="email-input" class = "form-label"></label>
          <input type = "text" class="form-control" id = "signup_email" placeholder= "Email" minlength="10" v-on:blur="emailValidation()" v-model="email" required />
        <label for = "password-input" class = "form-label"></label>
          <input type = "text" class="form-control" id = "signup_password" placeholder = "Password" minlength="8" v-on:blur="passwordValidation()" v-model="password" required/>
        <router-link to = "/">
          <input type="submit" id = "signup_btn_2" v-on:click ="SignUp()" value = "Sign Up"/>
        </router-link>
      </form>
    </div>
  </div>
</template>


<script>
import HeaderLogo from './HeaderLogo.vue';

export default {
  name: "SignUp",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passConditions: {
        validEmail: false,
        validPassword: false
      }
    };
  },

  watch: {
    password() {
      this.passwordValidation()
    },
    email() {
      this.emailValidation()
    }
  },

 
  methods: {
    
    passwordValidation() {
      let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (passwordRegEx.test('password.value')) {
        validPassword = true 
      } else {
        validPassword = false
      }
      //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    },
    emailValidation() {
      let emailRegEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      if (emailRegEx.test('email.value')) {
        validEmail = true 
      } else {
        validEmail = false
      }
    },
    SignUp() {
      const signUpForm = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpForm),
      };
      fetch("http://localhost:3000/api/users/signup", requestOptions)
        .then((response) => {
        return response
          .json()
          .then((data) => {
          console.log(data);
          if (response.ok) {
            this.$router.push("/");
          }
        });
      })
      .catch((error) => {
      console.error("There was an error!", error);
      });
    }
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
  
  components: { 
    HeaderLogo
  }
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
