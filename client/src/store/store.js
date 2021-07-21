import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state:{
        token: null,
        user: null,
        isUserLoggedin: false,
    },
    mutations:{
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedin = true
            } else{
                state.isUserLoggedin = false
            }
        },
        setUser (state, user) {
            state.user = user
        },
        logout (state) {
            state.token =  null;
            state.user = null;
            state.isUserLoggedin = false;
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, token) {
            commit('setUser', token)
        },
        logout ({commit}) {
            commit('logout')
        }
    },
    getters: {
        getUser: state => {
            return state.user;
        },
    }
})