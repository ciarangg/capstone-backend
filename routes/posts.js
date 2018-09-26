const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'))
}

function validPost(post) {
    const hasTitle = typeof post.title == 'string' && post.title.trim() != '';
    const hasContent = typeof post.content == 'string' && post.content.trim() != '';

    return hasTitle && hasContent;
}

router.get('/', (req, res) => {

    queries.getAll().then(posts => {
        res.json(posts)
    })
})

router.get('/:id', isValidId, (req, res, next) => {

    queries.getOne(req.params.id).then(post=> {
        if(post) {
            res.json(post)
        }

        else {
            res.status(404);
            next(new Error('Not Found'));
        }

    })

})

router.post('/', (req, res, next) => {
        queries.create(req.body).then(postPost => {
            res.json({postPost})
        }) 
})

router.put('/:id', isValidId, (req, res, next) => {
    if(validPost(req.body)) {
        queries.update(req.params.id, req.body).then(arrayOfPosts => {
            res.json(arrayOfPosts[0]);
        });
    }
    else {
        res.status(404);
        next(new Error('Not Found'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({ deleted: true})
    });
});

module.exports = router;