const express = require('express');
const Model = require('../models/trans.schema');
const indexController = require('../utils/indexes');
const responsesController = require('../utils/ServerResponse')
const logger = require('../utils/logger');



function create(req, res) {
    Model.findOne({}).sort({ transactionid: -1 }).exec(function (err, doc) {
        id = doc.transactionid + 1
        req.body.transactionid = id;
        let todo = new Model(req.body);
        todo.save()
            .then(todo => {
                const message = 'Succesfully created';
                console.log(message);
                res.status(200).json(message);
            })
            .catch(err => {
                const message = 'Could not create';
                console.log(message);
                res.status(400).send(message);
            });
    });
}

function index(req, res) {
    let id = req.params.id;
    Model.findOne({ transactionid: id }, (err, doc) => {
        if (doc) {
            const message = 'Succesfully founded';
            console.log(message);
            res.status(200).json(doc);
            
        } else {
            const message = 'Could not find index';
            console.log(message);
            res.status(400).send(message);
        }
    });
}

function list(req, res) {
    Model.find({}).sort({ datesold: -1 }).exec((err, doc) => {
        if (err) {
            const message = 'Could not find list';
            console.log(message);
            res.status(400).send(message);
        } else {
            const message = 'Succesfully founded';
            console.log(message);
            res.status(200).json(doc);
        }
    });
}

function update(req, res) {
    let id = req.params.id;
    const filter = { transactionid: id };
    const update = { $set: req.body };
    Model.findOneAndUpdate(filter, update)
        .then(res.status(200).send('Updated'))
        .catch(res.status(404).send('Not updated'));
}

function destoy(req, res) {
    let id = req.params.id;
    const filter = { transactionid: id };
    const update = { deleted: true };
    Model.findOneAndDelete(filter, update, (err, doc) => {
        if (doc) {
            const message = 'Succesfully deleted';
            console.log(message);
            res.status(200).json(message);
        } else {
            const message = 'Could not find index';
            console.log(message);
            res.status(400).send(message);
        }
    });
}

module.exports = { create, index, list, update, destoy };