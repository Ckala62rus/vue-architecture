import axios from "axios";
import {getItem} from "@/helpers/persistancecStorage";

const env = process.env

axios.defaults.baseURL = env.VUE_APP_BACKEND_API

axios.interceptors.request.use( config => {
    const token = getItem('access_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
})

axios.interceptors.response.use(undefined, (error) => {
    const location = window.location.pathname
    if (error.response.status === 401) {

        if (location === '/password-reset') {
            return
        }

        if (location !== '/login') {
            //place your reentry code
            localStorage.removeItem('access_token')
            // store.dispatch('user', null)
            delete axios.defaults.headers.common["Authorization"];
            console.log('interceptor')
            window.location.href = '/login';
        }


    }
    return Promise.reject(error);
});

export default axios
