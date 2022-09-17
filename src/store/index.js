import { createStore } from 'vuex';
// import router from "../router/index";

const axios = require('axios');
const instance = axios.create({
  baseUrl: "http://localhost:3000/api",
});

// TODO: finish this

// export default createStore({
//   //create a store for the user when they login
//   state: {
//     status: "",
//     user: {
//       userId: user.userId,
//       firstName: user.firstName,
//       lastName: user.lastName
//     }
//   },

//   getters: {
//   },
//   mutations: {
//   },


//   actions: {
//     createAccount: ({}) => {
//       commit;
//       instance.post('/user')
//     }
//   },


//   modules: {
//   }
// })
