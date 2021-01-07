import Vue from "vue";
import Vuex from "vuex";
import apiCall from "../utils/apiCalls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isloading: false,
    user: [],
    repos: [],
    error: false
  },
  mutations: {
    FETCH_USER_LOADING (state) {
      state.isloading = true
    },
    FETCH_USER_SUCCESS (state, payload) {
      state.user = payload
      state.isloading = false
    },
    FETCH_USER_ERROR (state, payload) {
      state.error = payload
      state.isloading = false
    },
    FETCH_REPOS_LOADING (state) {
      state.isloading = true
    },
    FETCH_REPOS_SUCCESS (state, payload) {
      state.repos = payload
      state.isloading = false
    },
    FETCH_REPOS_ERROR (state, payload) {
      state.error = payload
      state.isloading = false
    }
  },
  actions: {
    fetchUser: async ({ commit }, user) => {
      commit('FETCH_USER_LOADING')
      try {
        const userData = await apiCall(user)
        commit('FETCH_USER_SUCCESS', userData)
      } catch (error) {
        console.error(`failed to fetch users: ${error}`);
        commit('FETCH_USER_ERROR', error)
      }
    },
    fetchRepos: async ({ commit }, user) => {
      commit('FETCH_REPOS_LOADING')
      try {
        const repos = await apiCall(user + "/repos")
        commit('FETCH_REPOS_SUCCESS', repos)
      } catch (error) {
        console.error(`failed to fetch repos: ${error}`);
        commit('FETCH_REPOS_ERROR', error)
      }
    },
  },
  modules: {}
});
