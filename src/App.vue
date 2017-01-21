<template>
  <div id="app" class="container-fluid">
      <h1 class="title">
        <img class="logo" src="./assets/logo.png" alt="">
        {{ title }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th>书名</th>
          <th>作者</th>
          <th>简介</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book of books">
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.subject }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  </div>
</template>

<script>
import wilddog from 'wilddog'

const wildConfig = {
  authDomain: "vue-books-list.wilddogio.com",
  syncURL: "https://vue-books-list.wilddogio.com"
}
wilddog.initializeApp(wildConfig)
let ref = wilddog.sync().ref()
let booksRef = ref.child('books')

export default {
  name: 'app',
  data(){
    return {
      title:'Vue.js Wilddog BookList',
      newBook:{
      }
    }
  },
  wilddog:{
    books : booksRef
  },
  methods:{
  },
  components: {
  },
  mounted(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 60px;
  color: #2c3e50;
}
.logo{
  height: 40px;
}
.title{
  text-align: center;
}
</style>
