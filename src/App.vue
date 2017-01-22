<template>
  <div id="app" class="container-fluid">
    <h1 class="title">
        <img class="logo" src="./assets/logo.png" alt="">
          {{ title }}
        <img src="https://docs.wilddog.com/images/logo-d2df5d3b45.svg" height="40" alt="">
    </h1>
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
          <tr v-for="(book,index ) of books">
            <td>{{ index + 1 }}</td>
            <td><a :href="book.url">{{ book.name }}</a></td>
            <td>{{ book.author }}</td>
            <td class="w-50 p-2">{{ book.subject }}</td>
            <td>
              <button @click="removeBook(book)" type="button" class="close" aria-label="Close" title="删除书籍">
                <span aria-hidden="true">&times;</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="title">添加书籍</h3>
    <div class="row">
      <form @submit.prevent="addBook" class="col-12 form-inline">
        <div class="col-6">
            <div class="form-group">
              <label class="col-form-label col-2">书名:</label>
              <input type="text" class="form-control col-10"  placeholder="请输入书名" v-model="newBook.name">
            </div>
          <div class="form-group">
              <label class="col-2 col-form-label">作者:</label>
              <input type="text" class="form-control col-10"  placeholder="请输入作者名" v-model="newBook.author">
          </div>
          <div class="form-group">
              <label class="col-2 col-form-label">Url:</label>
              <input type="text" class="form-control col-10"  placeholder="请输入地址" v-model="newBook.url">
          </div>
        </div>
          <div class="form-group col-6">
            <label for="" class="col-2">简介:</label>
            <textarea  class="form-control col-10"  rows="4" placeholder="请输入简介" v-model="newBook.subject"></textarea>
          </div>
          <button type="submit"  class="btn btn-info btn-block btn-add-book">添加书籍</buttom>
    </form>
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
  methods: {
    removeBook(book){
      console.dir(booksRef.child())
    },
    addBook(){
      booksRef.push(this.newBook)
      for (let key in this.newBook) {
        console.log(key)
        this.newBook.key = ''
      }
    }
  },
  components: {},
  mounted() {}
}
</script>

<style scoped>
  ::selection{
    color: #fff;
    background-color: rgba(0,0,0,.5);
  }
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
  .btn-add-book{

    margin-top: 12px;
  }

</style>
