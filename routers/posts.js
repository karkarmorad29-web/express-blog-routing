const express = require('express');
const router = express.Router();
const posts = require('../data/posts');
const postsController = require('../data/controllers/postscontroller');

//Definizione delle rotte per i post

// (Get) Tutti i post con filtro per tag
router.get('/', postsController.index);

// (Get) Singolo post per ID
router.get('/:id', postsController.show);

//Create - Crea un post
router.post('/', postsController.store);

//Update - Aggiorna un post
router.put('/:id', postsController.update);

//Delete - Elimina un post
router.delete('/:id', postsController.destroy);




module.exports = router;