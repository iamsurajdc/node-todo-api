const {MongoClient, ObjectID} = require("mongodb"); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log("Unable to connect to mongodb server");
    else {
        console.log("Connected to Mongo Server");
//deletemany

   // db.collection ('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, err => {
    //     if(err) console.error(err);
    // })

//deleteOne

        // db.collection("Todos").deleteOne({text: 'Eat Lunch'}).then((result) => {
        //    console.log(result); 
        // });
// findOneAndDelete

        // db.close();
    }
});