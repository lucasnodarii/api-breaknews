import express from "express";
const app = express();

app.get('/', (req, res) => {
    const soma = 1 + 2;
    res.send({soma});
});

app.listen(3000);