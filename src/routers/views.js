const router = require('express').Router();
const { home, about, mathTable } = require('../controller/viewsController');

router.get('/', home);
router.get('/about', about);
router.get('/table/:num', mathTable)

module.exports = router;
