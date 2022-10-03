const express = require('express');
const router = express.Router();
const dailyController = require('../controllers/dailyController');
router
  .route('/')
  .get(dailyController.getMemo)
  .post(dailyController.createMemo)

  .delete(dailyController.deleteAllMemo);
router
  .route('/:code')
  .get(dailyController.getOne)
  .patch(dailyController.updateMemo);
module.exports = router;
