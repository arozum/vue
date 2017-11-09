var app = new Vue({
    el: '#vueApp',
    data: {
      todos: [{
        name: "Ship package",
        editing: false,
        complete: true
      }, {
        name: "Buy sth",
        editing: false,
        complete: false
      }],
      currTodo: "",
      website: "http://www.winzo.pl",
      htmlTag: "<a href='/test'>link html from model</a>",
      x: 0,
      y: 0,
      isDynamicRed: false,
      isShow: false,
      isError: false,
      output: 'Nothing'
    },
    methods: {
      addTodo: function() {
        this.todos.push({name:this.currTodo, editing:false, complete: false});
        this.currTodo = ""
      },
      remove: function(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index,1);
      },
      edit: function(todo){
        var index = this.todos.indexOf(todo);
        this.todos[index].editing = true;
      },
      save: function(todo){
        var index = this.todos.indexOf(todo);
        this.todos[index].editing = false;
      },
      changeCheck: function(todo) {
        todo.complete = !todo.complete;
      },
      updateXY: function(event){
        this.x = event.offsetX;
        this.y = event.offsetY;
      },
      beforeLink: function(){
        alert("Are you ready?");
      },
      logName: function(){
        console.log("log name by enter");
      },
      logAge: function(){
        console.log("log age");
      },
      readRefs: function() {
        console.log(this.$refs);
        this.output =  this.$refs.input.value;
      }
    },
    computed: {
      completedTodos() {
        return this.todos.filter(function(item){ return item.complete })
      },
      waitTodos() {
        return this.todos.filter(function(item){ return !item.complete })
      }
    }
  })

  //////////////////////////
  Vue.component('samplecomp', {
    template: '<p>Hi, I am {{name}}. <button v-on:click="changeName">Change name</button></p>',
    data: function(){
      return {
        name: 'Tom'
      }
    },
    methods: {
      changeName: function(){
        this.name = 'Mario';
      }
    }
  })

  new Vue({
    el: '#vue-app-one'
  })

  new Vue({
    el: '#vue-app-two'
  })