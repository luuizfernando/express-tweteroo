import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

const PORT = 5000;

const tweets = [];

app.get("/tweets", (req, res) => {
    res.send(tweets);
});

app.post("/sign-up", (req, res) => {

});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    if (!username || !tweet) return res.status(422).send("Todos os campos são obrigatórios!!");

    const novoTweet = {username: username, tweet: tweet};

    tweets.push(novoTweet);
    res.sendStatus(201);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}.`));