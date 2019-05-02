const express = require('express');
const route = express.Router();

route.get('/', (req, res)=> {});

route.post('/', (req, res)=> {
    var user = req.body;    
    for (x in data) {        
        if (user.nick == data[x].nick && user.pass == data[x].pass) {
            res.status(200).send('Bienvenido');
        }
    }    
});

let data = [
    {
        nick: "Test",
        pass: "@test"
    },
    {
        nick: "admin",
        pass: "123456"
    },    
];

module.exports = route