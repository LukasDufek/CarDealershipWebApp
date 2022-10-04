const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
    //res.send('hello');
});

// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        znacka: req.body.znacka,
        model: req.body.model,
        cena: req.body.cena,
        rok: req.body.rok,
        kilometry:req.body.kilometry,
        karoserie: req.body.karoserie,
        palivo:req.body.palivo,
        motor: req.body.motor,
        vykon: req.body.vykon,
        barva: req.body.barva,
        fotka: req.body.fotka,
        prodane: req.body.prodane,
        datumProdeje: req.body.datumProdeje

    });
    res.status(201).send();
});


// Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({});
});


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://lukas_dufek:<password>@autobazarvue.7i1joxw.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlParser: true
        }
    );

    return client.db('autobazarVue').collection('posts');
}

module.exports = router;
