const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');

app.use(express.json());

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port} `);
});

//Importiamo il router
const postsRouter = require('./routers/posts');


//Importiamo il router
const postsRouter = require('./routers/posts');

//Definiamo la rotta home
app.get('/', (req, res) => {
    res.send("Benvenuto nel server del Blog");

});

//Registriamo le rotte del post con il prefisso /posts
app.use('/posts', postsRouter);

//Avvio Server
app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port} `);
})
