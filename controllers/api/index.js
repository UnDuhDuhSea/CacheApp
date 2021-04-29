const router = require('express').Router();
const userRoutes = require('./users');
const expenseRoutes = require('./expense');

router.use('/users', userRoutes);
router.use('/expense', expenseRoutes);

module.exports = router;
