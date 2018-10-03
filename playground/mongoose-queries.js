const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");  
const {User} = require("./../server/models/user");  


var id = '6bb2f5db124fb92924834d9c11';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
// console.log('Todos',todos);
    
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
// console.log('Todo',todo);
    
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Todo not found');
//     }
//     console.log('Todo by id',todo);
        
//     }).catch((e) => console.log(e));


User.findById(id).then((user) => {
    if(!user) {
        return console.log('Todo not found');
    }
    console.log('User by id',user);
        
    }, (e) => {
            console.log(e)
    });