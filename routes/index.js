const express = require('express');
const router = express.Router();

// CREATE THE HOME ROUTE FOR THE CLIENT(BROWSER)
// router.get('/', (req, res) => res.send('Welcome'));
router.get('/', (req, res) => res.render('welcome'));

module.exports = router;
