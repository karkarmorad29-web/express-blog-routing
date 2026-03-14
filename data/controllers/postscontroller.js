let posts = require('../data/posts');

//index con filtro per tag

const index = (req, res) => {
    let filteredPosts = posts;

    if (req.query.tag) {
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tag));
    }

    res.json(filteredPosts);
};

//show
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
};

const store = (req, res) => {
    res.send("Creazione di un nuovo post");
};

const update = (req, res) => {
    res.send("Aggiornamento di un post esistente");
};

//destroy
const destroy = (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));

    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    posts.splice(postIndex, 1);
    res.json({ message: 'Post deleted successfully' });
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};


