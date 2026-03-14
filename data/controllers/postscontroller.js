let posts = require('../data/posts');

const postscontroller = {

    //index con filtro per tag

    index: (req, res) => {
        let filteredPosts = posts;

        if (req.query.tag) {
            filteredPosts = posts.filter(post => post.tags.includes(req.query.tag));
        }

        res.json(filteredPosts);
    },

    //show
    show: (req, res) => {
        const id = parseInt(req.params.id);
        const post = posts.find(p => p.id === id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(post);
    },

    store: (req, res) => {
        const { title, content, image, tags } = req.body;

        if (!title || !content || !image || !tags) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        //Calcolo nuovo ID
        const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;

        const newPost = {
            id: newId,
            title,
            content,
            image,
            tags
        };

        posts.push(newPost);
        res.status(201).json(newPost);
    },

    update: (req, res) => {
        const id = parseInt(req.params.id);
        const postIndex = posts.findIndex(p => p.id === id);

        if (postIndex === -1) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const { title, content, image, tags } = req.body;

        // Aggiorna solo i campi forniti
        post.title = title || post.title;
        post.content = content || post.content;
        post.image = image || post.image;
        post.tags = tags || post.tags;
        res.json(posts[postIndex]);
    },

    //destroy
    destroy: (req, res) => {
        const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));

        if (postIndex === -1) {
            return res.status(404).json({ error: 'Post not found' });
        }

        posts.splice(postIndex, 1);
        res.sendStatus(204);
    },

}


module.exports = postscontroller;




