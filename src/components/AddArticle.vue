<template>
  <form @submit.prevent="postArticle" class="test">
    <table border="1">
      <tr>
        <th>タイトル</th>
        <td>
          <input class="input-long" type="text" v-model="title">
        </td>
      </tr>
      <tr>
        <th>内容</th>
        <td>
          <textarea type="textarea"
            v-model="article"
            rows="10"
            cols="60"  
          />
        </td>
      </tr>
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

<style scoped>
form {
  display: block;
}
table {
  justify-content: center;
}

table tr, th, td {
  padding: 5px;
}

.input-long {
  width: 420px;
}

button {
  height: 30px;
  width: 100px;
}
</style>
