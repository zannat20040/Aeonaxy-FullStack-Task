const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/UserController')
const { updateUser } = require('../controllers/UpdateUserController')
const { findUser } = require('../controllers/FindUser')

// Route to handle form submission
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', findUser);

module.exports = router;
