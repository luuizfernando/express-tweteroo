import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORTA = 5000;

app.get("/tweets", (req, res) => {

});

app.post("/sign-up", (req, res) => {

});

app.post("/tweets", (req, res) => {

});

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}.`));