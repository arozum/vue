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
      currTodo: ""
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