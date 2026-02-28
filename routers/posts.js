const express = require('express');
const router = express.Router();
const posts = require('../data/posts');


// (Get) Tutti i post
router.get('/', (req, res) => {
  res.json(posts);


});

// (Get) Singolo post per ID
router.get('/ :id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);


  //Retituisco il post trovatp
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  res.json(post);
});

//Create - Crea un post
router.post('/', (req, res) => {
  console.log("Creazione di un nuovo post con i dati:", req.body);

  const { title, content, image, tags } = req.body;

  if (!title || !content || !image || !tags) {
    return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
  }
  //Generazione ID univoco
  const lastIndex = posts.length > 0 ? posts[posts.length - 1].id : 0;
  const newId = lastIndex + 1;

  const newPost = {
    id: newId,
    title,
    content,
    image,
    tags
  };

  posts.push(newPost);

  res.status(201).json(newPost);
});

//Update - Aggiorna un post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === id);

  //Controllo se il post esiste
  if (postIndex === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  const { title, content, image, tags } = req.body;

  if (!title || !content || !image || !tags) {
    return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
  }

  posts[postIndex] = {
    ...posts[postIndex],
    title,
    content,
    image,
    tags
  };

  res.json(posts[postIndex]);
});

//Delete - Elimina un post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  posts.splice(postIndex, 1);
  res.json({ message: "Post eliminato con successo" });
});





module.exports = router;