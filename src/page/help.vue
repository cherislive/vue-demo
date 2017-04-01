<template>
  <div class="hello tc">
    <h1 v-bind:title="message">{{ msg }}</h1>
    <div class="mod-listcard">

      <div class="listcard-item">
        <h3 v-bind:title="message">指令: v-bind</h3>
      </div>

      <div class="listcard-item">
        <h3>条件与循环</h3>
        <ul>
          <li v-if="seen">条件语句：控制一个元素显示</li>
        </ul>
        <ul>
          <li v-for="todo in todos">
            循环语句{{': '+todo.text}}
          </li>
        </ul>

      </div>

      <div class="listcard-item">
        <h3>处理用户输入<button v-on:click="reverseMessage">{{reverseTxt }}</button></h3>
        <h3>处理用户输入<button @click="reverseMessage">{{reverseTxt }}</button></h3>
      </div>

      <div class="listcard-item">
        <h3>用组件构建应用</h3>{{ fullName }}
        <com-todo-item v-for="item in todos" v-bind:comtodo="item" />
      </div>

      <div class="listcard-item">
        <select v-model="selected">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
    </div>
    <div class="listcard-item">
      <table>
        <tr><td> id </td><td> name </td><td> author </td><td> price </td></tr>
        <tr v-for="booklist in books">
          <td>{{booklist.id}}</td>
          <td>{{booklist.name}}</td>
          <td>{{booklist.author}}</td>
          <td>{{booklist.price}}</td>
        </tr>
      </table>
      <div id="add-book">
       <legend>添加书籍</legend>
       <div class="form-group">
             <label for="">书名</label>
             <input type="text" class="form-control" v-model="book.name">
       </div>
       <div class="form-group">
              <label for="">作者</label>
              <input type="text" class="form-control" v-model="book.author">
       </div>
       <div class="form-group">
                <label for="">价格</label>
                <input type="text" class="form-control" v-model="book.price">
        </div>
        <button class="btn btn-primary btn-block" @click="addBook()">添加</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// Define a new component called todo-item
Vue.component('com-todo-item', {
  props: ['comtodo'],
  template: '<li>{{ comtodo.text }}</li>'
})
export default {
  name: 'hello',
  data () {
    let _this = this
    _this
    return {
      selected: '',
      book: {},
      books: [],
      msg: 'Welcome to Vue Project',
      message: new Date(),
      seen: true,
      //
      todos: [
        {text: '0'},
        {text: '1'},
        {text: '2'},
        {text: '3'}
      ],
      //
      reverseTxt: '我是正的吗',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }

  },
  computed: {  // 计算缓存
    isFullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {   // 避免缓存
    reverseMessage: function (e) {
      console.log(e)
      this.reverseTxt = this.reverseTxt.split('').reverse().join('')
    },
    addBook: function () {
      // 计算书的id
      if (!this.book.name || !this.book.author || !this.book.price) {
        alert('信息填写错误')
        return
      }
      this.book.id = this.books.length + 1
      this.books.push(this.book)
      console.log(this.book)
      console.log(this.books)
      // 将input中的数据重置
      this.book = {}
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mod-listcard{width:80%; margin:0 auto;}
.listcard-item{margin-bottom:1rem; border:1px solid #ccc; border-radius:5px;}
table{margin:1rem;}
td{border:1px solid #ddd; padding:.5rem 1rem; font-size:1.4rem;}
</style>
