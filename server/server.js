const MongoClient = require('mongodb').MongoClient;
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },

    completed: {
        type: Boolean
    },

    completedAt: {
        type: Number
    }
});

// var newTodo = new Todo({
//     text: 'Cook Dinner'
// });


// try {
//     newTodo.save().then(() => {
//         console.log("Saved todo", doc);
//     }, (e) => {
//         console.log('Unable to save Todo')
//     });
    
// } catch (error) {
//     if(error) console.error(error);
// }


    var otherTodo = new Todo({
        text: 'Get to work',
        completed: true,
        completedAt: 12
    });

    otherTodo.save().then((doc) => {
            console.log(JSON.stringify(doc, undefined,2));
            }, (e) => {
                console.log('Unable to crete Todo',e);
    });
//save new