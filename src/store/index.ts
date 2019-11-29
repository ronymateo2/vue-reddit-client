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
  },
  actions: {
    selectPost({ commit }, payload) {
      commit('selectedPost', payload);
    },
    addToGallery({ commit }, payload) {
      commit('gallery', payload);
    },
    loadPosts({ commit }, payload) {
      commit('posts', payload);
      commit('isLoaded', true);
    },
  },
  modules: {},
});
