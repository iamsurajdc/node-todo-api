const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log("Unable to connect to mongodb server");
    else {
        console.log("Connected to Mongo Server");

        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) => {
        //     if(err){
        //        return console.log("Unable to insert todo")
        //     } else {
        //         console.log(JSON.stringify(result.ops, undefined, 2));
        //     }
        // });

        // db.collection('Users').insertOne({
        //     Name: "Suraj",
        //     Age: 23,
        //     location: "Nashik"
        // }, (err, result) => {
        //     if(err){
        //        return console.log("Unable to insert todo")
        //     } else {
        //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
        //     }
        // });

        db.close();
    }
});