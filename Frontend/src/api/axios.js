import axios from "axios";

const API = axios.create({
    baseURL: "https://job-portal-backend-hh5p.onrender.com/api"
   // baseURL: "http://localhost:5000/api"
});

export default API;