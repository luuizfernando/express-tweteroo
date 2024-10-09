import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

const tweets = [];
const users = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

    if (!username || !avatar) return res.status(422).send("Todos os campos são obrigatórios!!");

    const novoUsuario = ({ username, avatar });

    users.push(novoUsuario);
    res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    const userExists = users.find((user) => user.username === username);

    if (!userExists) return res.send("UNAUTHORIZED");

    const novoTweet = ({ username, tweet });

    tweets.push(novoTweet);
    res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
    const completeTweets = tweets.map((tweet) => {
        const user = users.find((u) => u.username === tweet.username)
        return {...tweet, avatar: user.avatar}
    });

    res.send(completeTweets.slice(-10));
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}.`));