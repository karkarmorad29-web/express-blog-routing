const express = require('express');
const router = express.Router();
const posts = require('../data/posts');



router.get('/', (req, res) => {
  res.json(posts);


});

// (Get) Singolo post per ID
router.get('/ :id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);


  //Retituisco il post trovatp
  if (post) {
    res.json(post);
  }
  else {
    res.status(404).json({ error: "Post non trovato" });
  }

});

//Create - Crea un post
router.post('/', (req, res) => {
  res.send("Creazione di un nuovo post");

});

//Update - Aggiorna un post
router.put('/:id', (req, res) => {
  res.send(`Aggiornamento totale del post ${req.params.id}`);

});

//Delete - Elimina un post
router.delete('/:id', (req, res) => {
  res.send(`Eliminazione del post ${req.params.id}`);
});





module.exports = router;