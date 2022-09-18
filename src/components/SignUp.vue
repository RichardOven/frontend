<template>
  <nav>
    <router-link to = "/">
      <i class="fas fa-arrow-left" id="home_arrow"></i>
    </router-link>
    <div class = "signup_page_img">
      <img id = "black-logo" alt="groupomania logo" src="../assets/icon-left-font-monochrome-black.svg" />
    </div> 
  </nav>
    <div>
        <form class = "signup_form" @submit = "signIn">
          <label for ="firstName-input"></label>
            <input id = "signup_firstName" placeholder= "First Name" name = "firstName" type = "text"/> 
          <label for ="lastName-input"></label>
            <input id = "signup_lastName" placeholder= "Last Name" name = "lastName" type = "text"/>
          <label for ="email-input"></label>
            <input id = "signup_email" placeholder= "Email" name = "email" type = "text"/>
          <label for = "password-input"></label>
            <input id = "signup_password" placeholder = "Password" name = "password" type = "text"/>
          <router-link to = "/home">
            <input type="submit" id = "signup_btn_2" value = "Sign Up"/>
          </router-link>
          <p class="errorMessage">{{ errorMessage }}</p>
        </form>
        <!-- <button id = "signup_btn_2" v-on:click ='signIn'>Sign Up</button>
        <p class="errorMessage">{{ errorMessage }}</p> -->
    </div>
</template>


<script>

  export default {
    name: 'SignUp',
    data: function() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        validPassword: '',
        errorMessage: ''
      }
    }
  }

  methods: {
    signIn: () => {
    let validEmail = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    let validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"); // min 8 characters, one uppercase, one lowercase, one number


    if (!validEmail.test(email.value)) {
      this.errorMessage = null; // changed from this.errorMessage to data.errorMessage
      email.style.border = '2px solid green';
      validEmail = true;
    } else if (validEmail.test(email.value) === false || email.value === '') {
      data.errorMessage = 'Please enter a valid email address';
      email.style.border = '2px solid red';
      validEmail = false;
    } if (!validPassword.test(password.value)) {
      data.errorMessage = null;
      password.style.border = '2px solid green';
      validPassword = true;
    } else if (validPassword.test(password.value) === false || password.value === '') {
      data.errorMessage = 'Please enter a valid email address';
      password.style.border = '2px solid red';
      validPassword = false;
    } else if (
        this.firstName != "" &&
        this.lastName != "" &&
        this.email != "" &&
        this.password != "" &&
        this.validPassword === this.password
      ) {
        this.$store
        // create account
        ({ })
        .then(() => {
          //check the store for the user, error - this email has already been used
        });
      } else if (this.validPassword != this.password) {
        data.errorMessage = 'Both passwords must match'
      } else {
        data.errorMessage = 'All fields must be filled in'
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

nav {
  display: flex;
}

i {
  font-size: 1.5rem;
  padding: .5rem;
  color: black;
  margin: 2.2rem 0 0 2rem;
}

#black-logo {
  margin: 2rem 0 0 2rem;
  padding: 0;
  width: auto;
  height: 3rem;
}

label, input {
  padding: .5rem;
  box-sizing: border-box;
  text-align: center;
  font-weight: 400;
  font-size: medium;
  height: 2.7rem;
}

form {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 6rem 0 0 16rem;
}

#signup_firstName,
#signup_lastName,
#signup_email,
#signup_password {
  border: .125rem solid black;
}

#signup_btn_2 {
  font-weight: bold;
  font-style: normal;
  cursor: pointer;
  border-radius: 25px;
  padding: 0rem;
  width: 14rem;
  margin: 4rem 0 0 12.5rem; /*  12 for large monitor */
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