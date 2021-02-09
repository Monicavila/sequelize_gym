const express = require("express");
const logger = require("morgan");
const sociosRouter = require("./routes/socios");
const membresiaRouter = require("./routes/membresia");
const pagosRouter = require("./routes/pagos");
const socioMembresiaRouter = require("./routes/socio_membresia");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json()); // condiguración para interpretar formato json enviados desde insomnia

app.use(logger("dev"));

app.get('/', (req, res) => {
    res.send("Diseñando ando");
});

app.use(sociosRouter);
app.use(membresiaRouter);
app.use(pagosRouter);
app.use(socioMembresiaRouter);

app.listen(PORT, () => {
    console.log ("Probando servidor en puerto", PORT);
});