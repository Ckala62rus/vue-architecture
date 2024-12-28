import axios from '@/api/axios'
import urls from "@/api/urls";
import {getItem} from "@/helpers/persistancecStorage";

/**
 * {
 *   "email": "admin@mail.ru",
 *   "password": "123123",
 *   "username": "admin"
 * }
 *
 * @param credential
 * @returns {Promise<AxiosResponse<any>>}
 */
const registration = credential => {
    return axios.post(urls.registration, credential)
}

const login = credential => {
    return axios.post(urls.login, credential)
}

const me = () => {
    return axios(urls.me, {
        headers: {
            'Authorization': getItem('access_token')
        }
    })
}

const logout = () => {
    return axios.post(urls.logout)
}

export default {
    registration,
    login,
    me,
    logout
}
