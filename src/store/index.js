import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('fake-blog')

const store = new Vuex.Store({
  state: {
    articles: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'タイトル',
        body: '内容'
      }
    ]
  },
  mutations: {
    postArticle (state, payload) {
      state.articles.push(payload)
    }
  },
  actions: {
    postArticle (context, payload) {
      context.commit('postArticle', payload)
    }
  },
})

store.subscribe((mutations, state) => {
  localStorage.setItem('fake-blog', JSON.stringify(state.articles))
})

export default store