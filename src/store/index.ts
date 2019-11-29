import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// TODO: move to a module
export default new Vuex.Store({
  state: {
    posts: [],
    selectedPost: null,
    gallery: [],
  },
  mutations: {
    selectedPost(state, payload) {
      state.selectedPost = payload;
    },
  },
  actions: {
    selectPost({ commit }, payload) {
      commit('selectedPost', payload);
    },
  },
  modules: {},
});
