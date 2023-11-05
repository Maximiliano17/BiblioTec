import axios from "axios";
const instance = axios.create({
    //colorcar la url de la bd
    baseURL: 'https://bilbioteca-back-end.vercel.app/api',
    withCredentials: false
});
export default instance;