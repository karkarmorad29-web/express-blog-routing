const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');

app.use(express.json());

app.use(express.static('public'));




//Definiamo la rotta home
app.get('/', (req, res) => {
    res.send("Benvenuto nel server del Blog");

});

//Registriamo le rotte del post con il prefisso /posts
app.use('/posts', postsRouter);

//Gestione 404
app.use((req, res, next) => {
    res.status(404).json({ error: "Risorsa non trovata" });
});



//Avvio Server
app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port} `);
})
