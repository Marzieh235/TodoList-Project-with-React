import axios from "axios";

const instance = axios.create({

    baseURL : 'https://todo-app-25b4f-default-rtdb.firebaseio.com',

    timeout : 5000,


})


export default instance;