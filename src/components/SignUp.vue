<template>
    <div>
        <form class = "signup_form">
          <label for ="firstName-input"></label>
            <input id = "signup_firstName" placeholder="First Name" name = "firstName" type = "text"/> 
          <label for ="lastName-input"></label>
            <input id = "signup_lastName" placeholder="Last Name" name = "lastName" type = "text"/>
          <label for ="email-input"></label>
            <input id = "signup_email" placeholder="email" name = "email" type = "text"/>
          <label for = "password-input"></label>
            <input id = "signup_password" placeholder = "password" name = "password" type = "text"/>
        </form>
        <button id = "signup_btn_2">Sign Up</button>
    </div>
</template>

<script>

    export default {
      name: 'SignUp'
    }
    
    
    
</script>
    
    
<style>
    
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

label, input {
    padding: .5rem;
    box-sizing: border-box;
    text-align: center;
    font-weight: 400;
    font-size: medium;
}
    
#email {
    height: 2.7rem;
    border-radius: 20px;
}
    
#password {
    height: 2.7rem;
    border-radius: 20px;
    margin-top: 2rem;
}

#signup_btn_2 {
    font-weight: bold;
    font-style: normal;
    cursor: pointer;
    border-radius: 25px;
    padding: 1rem;
    width: 14rem;
    margin: 2.2rem 0 0 8.5rem; /*  12 for large monitor */
    font-size: 18px;
    color: black;
    border: none;
    box-shadow: 5px 5px 5px gray;
    /* background: linear-gradient(to bottom right, #7BDCA1, #05CD54);  */
}
    
    
</style>