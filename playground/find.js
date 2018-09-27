const {MongoClient, ObjectID} = require("mongodb"); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log("Unable to connect to mongodb server");
    else {
        console.log("Connected to Mongo Server");
    
        // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        //     console.log("Todos");
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('unable to find todos', err);
        // });

        db.collection("Users").find({Name:"Suraj"}).toArray().then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
            
        }, (err) => {
            console.log('unable to find users', err);
        });

        // db.close();
    }
});