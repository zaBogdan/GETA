const {Router} = require('express')
const router = Router()
const {getFruits, patchFruits, postFruits, deleteFruits} = require('../controller')

router.get('/fruit', getFruits);
router.post('/fruit',postFruits);
router.patch('/fruit',patchFruits);
router.delete('/fruit',deleteFruits);

module.exports = router