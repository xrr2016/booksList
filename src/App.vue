<template>
  <div id="app" class="container-fluid">
    <h1 class="title">
        <img class="logo" src="./assets/logo.png" alt="">
          {{ title }}
        <img src="https://docs.wilddog.com/images/logo-d2df5d3b45.svg" height="40" alt=""></h1>

    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>书名</th>
            <th>作者</th>
            <th>简介</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book,index) of books">
            <td>{{ index }}</td>
            <td><a :href="book.url">{{ book.name }}</a></td>
            <td>{{ book.author }}</td>
            <td class="col-md-4 subject">{{ book.subject }}</td>
            <td><button type="button" class="btn btn-danger">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <form >
      <div class="form-group">
        <label for="">书名:{{newBook.name}}</label>
        <input type="text" class="form-control"  placeholder="请输入书名" v-model="newBook.name">
      </div>
      <div class="form-group">
        <label for="">作者:{{newBook.author}}</label>
        <input type="text" class="form-control"  placeholder="请输入作者名" v-model="newBook.author">
      </div>
      <div class="form-group">
        <label for="">简介:</label>
        <input type="text" class="form-control"  placeholder="请输入简介" v-model="newBook.subject">
      </div>
      <button type="button" name="button" class="btn btn-success btn-fluid">添加书籍</button>
    </form>
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
  data() {
    return {
      title: 'BookList',
      newBook: {
        name:'',
        author:'',
        subject:'',
        url:''
      }
    }
  },
  wilddog: {
    books: booksRef
  },
  methods: {},
  components: {},
  mounted() {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 12px;
  color: #2c3e50;
}

.logo {
  height: 40px;
}
.title {
  padding:12px;
  text-align: center;
}
.subject{

}
</style>
