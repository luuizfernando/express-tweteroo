import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

const PORT = 5000;

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

    if (!username || !avatar) return res.status(422).send("Todos os campos são obrigatórios!!");

    const novoUsuario = { username: username, avatar: avatar };

    users.push(novoUsuario);
    res.sendStatus(201);
});

app.post("/tweets", (req, res) => {

    if (users.length == 0) return res.send("UNAUTHORIZED");

    const { username, tweet } = req.body;

    if (!username || !tweet) return res.status(422).send("Todos os campos são obrigatórios!!");

    const novoTweet = { username: username, tweet: tweet };

    tweets.push(novoTweet);
    res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
    res.send(tweets);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}.`));