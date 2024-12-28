import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistancecStorage'

const state = {
    user: null,
    isSubmitting: false,
    isLoginSubmit: false,
    counter: 0,
    isAuth: false,
    authError: [],

}

export const mutationTypes = {
    registrationStart: '[auth] registrationStart',
    registrationStartSuccess: '[auth] registrationStartSuccess',
    registrationFail: '[auth] registrationFail',

    loginStart: '[auth] loginStart',
    loginStartSuccess: '[auth] loginStartSuccess',
    loginFail: '[auth] loginFail',

    me: '[auth] me',
    isAuth: '[auth] isAuth',
    logout: '[auth] logout',
}

export const actionTypes = {
    register: '[auth] register',
    login: '[auth] login',
    me: '[auth] me',
    logout: '[auth] logout',
}

export const gettersTypes = {
    isAuth: '[auth] auth',
    user: '[auth] user',
}

const getters = {
    [gettersTypes.isAuth]: (state) => state.isAuth,
    [gettersTypes.user]: (state) => state.user
}

const mutations = {
    ['increase']: (state) => state.counter++,
    ['decrease']: (state) => state.counter--,
    [mutationTypes.registrationStart]: (state) => state.isSubmitting = true,
    [mutationTypes.registrationStartSuccess]: (state) => state.isSubmitting = false,
    [mutationTypes.registrationFail]: (state) => state.isSubmitting = false,
    [mutationTypes.loginStartSuccess]: (state) => state.isLoginSubmit = false,
    [mutationTypes.me]: (state, user) => state.user = user,
    [mutationTypes.isAuth]: (state) => state.isAuth = true,

    [mutationTypes.logout](state) {
        state.isAuth = false
        state.user = null
    },
    [mutationTypes.loginFail](state, errors) {
        state.isLoginSubmit = false
        state.authError = errors
    },
    [mutationTypes.loginStart](state) {
        state.isLoginSubmit = true
        state.authError = []
    },
}

const actions = {
    ['increase']: (state) => setTimeout(() => state.commit('increase'), 1000),
    decrease(state) {
        state.commit('decrease')
    },
    [actionTypes.register](state, payload) {
        return new Promise((resolve) => {
            state.commit(mutationTypes.registrationStart)
            authApi.registration(payload)
                .then(response => {
                    state.commit(mutationTypes.registrationStartSuccess)
                    resolve(response) // что бы можно было получить результат во vue component
                })
                .catch(result => {
                    state.commit(mutationTypes.registrationFail)
                    resolve(result) // possible get result in vue component
                })
        })
    },
    [actionTypes.login](state, payload) {
        return new Promise(() => {
            state.commit(mutationTypes.loginStart)
            authApi.login(payload)
                .then(response => {
                    let resp = response.data

                    if (resp.code === 200) {
                        state.commit(mutationTypes.loginStartSuccess)
                        setItem('access_token', resp.data.access_token)
                        state.commit(mutationTypes.isAuth)
                        window.location = '/'
                    }
                    if (resp.code === 400) {
                        state.commit(mutationTypes.loginFail, [resp.data])
                    }
                })
                .catch(result => {
                    state.commit(mutationTypes.loginFail, result.response)
                })
        })
    },

    [actionTypes.me](state) {
        return new Promise(() => {
            authApi.me()
                .then(response => {
                    state.commit(mutationTypes.me, response.data.data)
                    state.commit(mutationTypes.isAuth)
                })
                .catch(error => {
                    console.log('error', error)
                })
        })
    },

    [actionTypes.logout]() {
        return new Promise(() => {
            authApi.logout()
                .then( () => {
                    localStorage.removeItem('access_token')
                    authApi.me()
                        .then(response => {
                            console.log(response)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
