const express = require('express');
const app = express();
const port = 3000;


//Importiamo il router
const postsRouter = require('./router/posts');

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
