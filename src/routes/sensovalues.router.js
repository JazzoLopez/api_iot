const sensovaluesController = require('../controllers/sensovalues.controller');
const {Router} = require('express');
const router = Router();


router.get('/getAll', sensovaluesController.getAll);
router.post('/insertOne', sensovaluesController.insertOne)
router.get('/getAllFront', sensovaluesController.getAllFront)

module.exports = router;