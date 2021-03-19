const express = require("express");
const messageDAO = require('../DAO/messageDAO');
const { model } = require('../model/contactmessage');
const route = express.Router();



route.post('/insertmessage', async function (req, res) {

    let data = await messageDAO.insertmessage(req.body);

    if (data) {
        res.status(200).send(data);

    } else {
        res.status(400).send("error");
    }
});


module.exports = route;