const express = require('express');
const mongojs = require('mongojs');
const router = express.Router();
const sec = require('./../db');

const db = mongojs(`mongodb+srv://${sec.LOGIN}:${sec.PASS}@cluster0.qukdk.mongodb.net/meantodos?retryWrites=true&w=majority`, ['todos']);

// GET todos
router.get('/todos', (req, res, next) => {
    db.todos.find((err, todos) => {
        err
            ? res.send(err)
            : res.json(todos);
    });
});

// GET todo
router.get('/todos/:id', (req, res, next) => {
    db.todos.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, todo) => {
        err
            ? res.send(err)
            : res.json(todo);
    });
});

// POST todo
router.post('/todos', (req, res, next) => {
    const todo = req.body;

    if (!todo.text || todo.isCompleted === undefined) {
        res.status(400);
        res.json({
            "error": "Invalid Data",
        });
    } else {
        db.todos.save(todo, (err, result) => {
            err
                ? res.send(err)
                : res.json(result);
        });
    }
});

// UPDATE todo
router.put('/todos/:id', (req, res, next) => {
    const todo = req.body;
    let upd = {};

    if (todo.isCompleted) {
        upd.isCompleted = todo.isCompleted;
    }

    if (todo.text) {
        upd.text = todo.text;
    }

    if (!upd) {
        res.status(400);
        res.json({
            "error": "Invalid Data",
        });
    } else {
        db.todos.update({ _id: mongojs.ObjectId(req.params.id) }, upd, (err, result) => {
            err
                ? res.send(err)
                : res.json(result);
        });
    }
});

// POST todo
router.delete('/todos/:id', (req, res, next) => {
    db.todos.remove({ _id: mongojs.ObjectId(req.params.id) }, '', (err, result) => {
        err
            ? res.send(err)
            : res.json(result);
    });
});

module.exports = router;