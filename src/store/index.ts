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
    gallery(state, payload: any) {
      debugger;
      const gallery: any[] = state.gallery;
      const item = gallery.find((g: any) => g.id === payload.id);
      if (!item) {
        state.gallery = [...gallery, payload] as never[];
      }
    },
  },
  actions: {
    selectPost({ commit }, payload) {
      commit('selectedPost', payload);
    },
    addToGallery({ commit }, payload) {
      commit('gallery', payload);
    },
  },
  modules: {},
});
