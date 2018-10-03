const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");  
const {User} = require("./../server/models/user");  

Todo.remove().then((result) => {
console.log(result);
    
});

Todo.findByIdAndRemove('5bb491c5c4828982c76f42e5').then((todo) => {
    console.log(todo);
});