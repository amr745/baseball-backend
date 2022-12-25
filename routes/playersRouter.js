const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/playersCtrl');

//INDUCES

router.get('/', playersCtrl.index);
// router.get('/seed', playersCtrl.seed);
router.delete('/:id', playersCtrl.delete);
router.put('/:id', playersCtrl.update);
router.post('/', playersCtrl.create);
router.get('/:id', playersCtrl.show);

module.exports = router;