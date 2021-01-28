const express = require("express");
const logger = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(logger("dev"));

app.get('/', (req, res) => {
    res.send("Diseñando ando");
});

app.listen(PORT, () => {
    console.log ("Probando servidor en puerto", PORT);
});