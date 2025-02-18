require("dotenv").config(); 

const express = require("express");
const cors = require("cors");
const CardapiosRoutes = require("./src/routes/Cardapios.Routes");

const app = express();
const PORT = 4064

app.use(cors());
app.use(express.json());

app.use ("/api", CardapiosRoutes);

app.get("/", (req, res) => {
    res.send("Olá, domeneghetti por aquiii");
});

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta❤😁✌ ${PORT}`)
});