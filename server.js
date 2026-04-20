const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// obtener árbol
app.get("/arbol", (req, res) => {
    const data = fs.readFileSync("arbol.json");
    res.json(JSON.parse(data));
});

// guardar árbol
app.post("/arbol", (req, res) => {
    fs.writeFileSync("arbol.json", JSON.stringify(req.body, null, 2));
    res.send("Guardado");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});