const express = require('express')
const router = express.Router()
const twitterController =   require('../controllers/twitter.controller');

// Retrieve all twitter
router.get('/twitter', twitterController.findAll);
// Create a new twitter
router.post('/twitter', twitterController.create);
// Retrieve a single twitter with id
router.get('/twitter/:id', twitterController.findById);
// Update a twitter with id
router.put('/twitter/:id', twitterController.update);
// Delete a twitter with id
router.delete('/twitter/:id', twitterController.delete);

module.exports = router

