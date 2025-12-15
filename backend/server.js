const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Stockage en mémoire
let messages = [];

// GET /api/messages → retourne tous les messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// POST /api/messages → ajoute un message
app.post('/messages', (req, res) => {
    const { pseudo, text } = req.body;
    if(!pseudo || !text) return res.status(400).json({ error: "Pseudo et texte requis" });

    const newMessage = {
        pseudo,
        text,
        time: new Date()
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

