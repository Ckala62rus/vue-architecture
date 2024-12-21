import axios from "axios";
import {getItem} from "@/helpers/persistancecStorage";
// import router from "@/router";

const env = process.env

axios.defaults.baseURL = env.VUE_APP_BACKEND_API

axios.interceptors.request.use( config => {
    const token = getItem('access_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
})

axios.interceptors.response.use(undefined, (error) => {
    if (error.response.status === 401 && window.location.pathname !== '/login') {
        //place your reentry code
        localStorage.removeItem('access_token')
        // store.dispatch('user', null)
        delete axios.defaults.headers.common["Authorization"];
        console.log('interceptor')
        window.location.href = '/login';
    }
    return Promise.reject(error);
});

export default axios
