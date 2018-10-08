const _ = require("lodash");
// var isBoolean = require('lodash.isboolean');
const express = require('express')
const fs = require("fs");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var { User} = require("./models/user");
var {authenticate} = require("./middleware/authenticate"); 
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send({
            e
        })
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!mongodb.ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        } else {
            console.log("\n TODO: \n");
            res.send({
                todo
            });
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

    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password'])
    var user = new User(body);
    // console.log('TCL: user', user);

    user.save().then(() => {
        return user.generateAuthToken();

    }).then((token) => {
        console.log('TCL: token', token);
        res.header('x-auth', token).send(user);

    }).catch((e) => {
        res.status(400).send(e);
    });
});



app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;

    var body = _.pick(req.body, ['text', 'completed']);
    if (!mongodb.ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    if (body.completed && _.isBoolean(body.completed)) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({
            todo
        });

    }).catch((e) => {
        res.status(400).send()
    });
});

app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;

    if (!mongodb.ObjectId.isValid(id)) {
        return res.status(404).send();
    };

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(400);
        }

        res.send(todo);
    }).catch((e) => {
        res.status(400).send();
    });
});

app.get('/users/me', authenticate,  (req, res) => {
    res.send(req.user);
});

app.listen(3000, () => {
    console.log(`Started on port ${port}`);
});