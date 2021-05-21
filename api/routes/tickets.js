var express = require('express');
var router = express.Router();

const aTickets = [
    {
    "ticketId" : "xk3d03",
    "subject" : "Hola, mi item esta roto",
    "date" : "2020-03-01 01:30:00Z",
    "from" : "Joaquin Perez",
    "status" : "SOLVED",
    "body": "Mi producto llego roto, no funcionacomo debería"
    },
    {
    "ticketId" : "xx35",
    "subject" : "Hola, mi item no llego",
    "date" : "2020-03-02 05:30:00Z",
    "from" : "Romina Esperanto",
    "status" : "NEW",
    "body": "Mi producto no llegó, cuando deberíallegar?"
    }];

router.get('/getTickets', function(req, res, next) {
    res.json(aTickets);
});

module.exports = router;