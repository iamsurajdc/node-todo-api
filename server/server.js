var express = require('express')
var fs = require("fs");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();

app.use(bodyParser.json())

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
         res.send({todos});
    }, (e) => {
        res.status(400).send({e})
    });
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;

    if(!mongodb.ObjectID.isValid(id)) {
        return res.status(404).send();
    }
        Todo.findById(id).then((todo) => {
            if(!todo) {
                res.status(404).send();
            } else {
                console.log("\n TODO: \n");
                res.send({todo});
            }
        }, (e) => {
                    res.status(400).send();
        });
});

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt

    });

    todo.save().then((doc) => {
           res.send(doc);         
        //     var data = JSON.stringify(doc, undefined, 2)
        //     console.log('TCL: data', data);
        //     var r = fs.writeFile(data);
        });  
    },(e) => {
        res.status(400).send(e); 
    });


app.listen(3000, () => {
    console.log("Started on port 3000");
});