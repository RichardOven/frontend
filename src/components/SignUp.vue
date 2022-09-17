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
        <form class = "signup_form">
          <label for ="firstName-input"></label>
            <input id = "signup_firstName" placeholder= "First Name" name = "firstName" type = "text"/> 
          <label for ="lastName-input"></label>
            <input id = "signup_lastName" placeholder= "Last Name" name = "lastName" type = "text"/>
          <label for ="email-input"></label>
            <input id = "signup_email" placeholder= "Email" name = "email" type = "text"/>
          <label for = "password-input"></label>
            <input id = "signup_password" placeholder = "Password" name = "password" type = "text"/>
        </form>
        <button id = "signup_btn_2" @click = "signIn" >Sign Up</button>
    </div>
</template>


<script>
  // import Header from './Header.vue';

  export default {
    name: 'SignUp',
    data: function() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmedPassword: '',
        errorMessage: ''
      }
    }
  }


  methods: {

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
  padding: 1rem;
  width: 14rem;
  margin: 4rem 0 0 31.2rem; /*  12 for large monitor */
  font-size: 18px;
  color: black;
  border: none;
  box-shadow: 5px 5px 5px gray;
  background: linear-gradient(to bottom right, #8521dd, #be5deb); 
}
    
    
</style>