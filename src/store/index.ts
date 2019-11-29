import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// TODO: move to a module
export default new Vuex.Store({
  state: {
    isLoaded: false,
    posts: [],
    selectedPost: null,
    gallery: [],
    next: undefined,
  },
  mutations: {
    selectedPost(state, payload) {
      state.selectedPost = payload;
    },
    gallery(state, payload: any) {
      const gallery: any[] = state.gallery;
      const item = gallery.find((g: any) => g.id === payload.id);
      if (!item) {
        state.gallery = [...gallery, payload] as never[];
      }
    },
    isLoaded(state, payload) {
      state.isLoaded = payload;
    },
    posts(state, payload) {
      state.posts = payload;
    },
    next(state, payload) {
      state.next = payload;
    },
  },
  actions: {
    selectPost({ commit }, payload) {
      commit('selectedPost', payload);
    },
    addToGallery({ commit }, payload) {
      commit('gallery', payload);
    },
    isLoaded({ commit }, payload) {
      commit('isLoaded', payload);
    },
    loadPosts({ commit }, payload) {
      commit('posts', payload);
      commit('isLoaded', true);
    },
    appendPosts({ commit, state }, payload) {
      commit('posts', [...state.posts, ...payload]);
    },
    next({ commit }, payload) {
      commit('next', payload);
    },
  },
  modules: {},
});
