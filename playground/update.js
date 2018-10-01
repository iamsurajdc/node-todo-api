const {MongoClient, ObjectID} = require("mongodb"); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log("Unable to connect to mongodb server");
    else {
        console.log("Connected to Mongo Server");

        // db.collection('Users').findOneAndUpdate(
        //     {
        //     _id: new ObjectID('5bacc1ee6497d12ae49437dd')
        //     },
        //     {
        //         $set: {
        //             completed: true
        //         }
        //     },
        //     {
        //         returnOriginal: false
        //     }
        // ).then((result) => {
        //   console.log(result);  
        // })

        db.collection('Users').findOneAndUpdate(
            {
            _id: new ObjectID('5bacc1ee6497d12ae49437dd')
            },
            {
                $set:{
                        Name: "Suraj"
                      },
                $inc:{
                        Age: -1
                     }
            },
            {
                returnOriginal: false
            }
        ).then((result) => {
          console.log(result);  
        })
        // db.close();
    } 
}); 