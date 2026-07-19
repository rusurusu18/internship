Axios
It is a javascript library used to send HTTP request to apis or server

WHY?
--cleaner syntax
--automatic JSON conversion
-- better error handling 
-- request and response interceptors

npm install axios

//Fetch api
fetch("url")
.then(response.json())
.then(data=> console.log(data))


Axios
axios.get("url")
.then(response=>console.log(response.data))


import axios from 'axios'

const API = axios.create({
    // when learning (baseURL:"https://localhost:3000")
    baseURL:import.meta.url.baseURL
})

