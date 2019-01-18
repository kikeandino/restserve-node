require('./config/config');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//pasera la aplicacion json
app.use(bodyParser.json());


app.get('/usuarios', function(req, res) {
    res.json('get usuario');
});

app.post('/usuarios', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'EL nombre no es el correcto'

        });

    } else {
        res.json({
            persona: body
        });
    }


});

app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuarios', function(req, res) {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log('escuchando el puetro:', process.env.PORT);
});