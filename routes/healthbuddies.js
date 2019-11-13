const express = require('express');

const {
  getHealthbuddies,
  getHealthbuddy,
  createHealthbuddy,
  updateHealthbuddy,
  deleteHealthbuddy
} = require('../controllers/healthbuddies');
const router = express.Router();

router
  .route('/')
  .get(getHealthbuddies)
  .post(createHealthbuddy);

router
  .route('/:id')
  .get(getHealthbuddy)
  .put(updateHealthbuddy)
  .delete(deleteHealthbuddy);
module.exports = router;
