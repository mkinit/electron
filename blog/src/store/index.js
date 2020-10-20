import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    website: {},
    categories: []
  },
  mutations: {
    setWebsiteInfo(state, data) {
      state.website = data
    },
    setCategories(state, data) {
      state.categories = []
      state.categories = data
    }
  },
  actions: {
  },
  modules: {
  }
})
