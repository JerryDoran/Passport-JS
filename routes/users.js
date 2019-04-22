const express = require('express');
const router = express.Router();

// CREATE THE LOGIN PAGE FOR THE CLIENT(BROWSER)
// router.get('/login', (req, res) => res.send('Login'));
router.get('/login', (req, res) => res.render('login'));

// CREATE THE REGISTER PAGE FOR THE CLIENT(BROWSER)
// router.get('/register', (req, res) => res.send('Register'));
router.get('/register', (req, res) => res.render('register'));

module.exports = router;
