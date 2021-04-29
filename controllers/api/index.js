const router = require('express').Router();
const userRoutes = require('./users');
const budgetRoutes = require('./budget');

router.use('/users', userRoutes);
router.use('/budget', budgetRoutes);

module.exports = router;
