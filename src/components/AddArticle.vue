<template>
  <form @submit.prevent="postArticle">
    <table>
      <th>タイトル</th>
      <td>
        <input type="text" v-model="title">
      </td>
      <th>内容</th>
      <td>
        <input type="text" v-model="article">
      </td>
      <button type="submit">投稿</button>
    </table>
  </form>
</template>
<script>

export default {
  data () {
    return {
      title: '',
      article: ''
    }
  },
  methods: {
    postArticle () {
      this.$store.dispatch('postArticle', { title: this.title, article: this.article })
      this.title = ''
      this.article = ''
    }
  }
}
</script>