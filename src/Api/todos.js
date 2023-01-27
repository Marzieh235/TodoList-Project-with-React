import axios from "axios";

const instance = axios.create({

    baseURL: 'https://todo-app-25b4f-default-rtdb.firebaseio.com',

    timeout: 30000,


})
instance.interceptors.request.use(function (config) {
    return config;
}, function (err) {
    return Promise.reject(err)
})

instance.interceptors.response.use(function(response){
    return (response)
}, function(err){
    console.log(err)
    return Promise.reject(err)
})

export default instance;