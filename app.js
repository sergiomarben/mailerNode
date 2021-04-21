const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMessage = require('./config-message');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/mail', (req, res) => {
    configMessage(req.body);
    res.status(200).send();
})

app.listen(3000, () => {
    console.log('Servidor corriendo')
});