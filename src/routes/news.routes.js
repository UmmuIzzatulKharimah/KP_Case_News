const express = require('express')
const router = express.Router()
const newsController =   require('../controllers/news.controller');
const employeeController =   require('../controllers/employee.controller');
const twitterController =   require('../controllers/twitter.controller');

// Retrieve all news
router.get('/news', newsController.findAll);
// Create a new news
router.post('/news', newsController.create);

module.exports = router

// Retrieve all employees
router.get('/employee', employeeController.findAll);
// Create a new employee
router.post('/employee', employeeController.create);



// Retrieve all twitter
router.get('/twitter', twitterController.findAll);
// Create a new twitter
router.post('/twitter', twitterController.create);

// Retrieve a single news with id
router.get('/news/:id', newsController.findById);
// Update a news with id
router.put('/news/:id', newsController.update);
// Delete a news with id
router.delete('/news/:id', newsController.delete);

// Retrieve a single employee with id
router.get('/employee/:id', employeeController.findById);
// Update a employee with id
router.put('/employee/:id', employeeController.update);
// Delete a employee with id
router.delete('/employee/:id', employeeController.delete);

// Retrieve a single twitter with id
router.get('/twitter/:id', twitterController.findById);
// Update a twitter with id
router.put('/twitter/:id', twitterController.update);
// Delete a twitter with id
router.delete('/twitter/:id', twitterController.delete);


module.exports = router