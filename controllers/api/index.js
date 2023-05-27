// setting routes
const router = require('express').Router();
const questionRoutes = require('./questionRoutes');
const talkRoutes = require('./talkRoutes');
const userRoutes = require('./userRoutes');
const attendRoutes = require('./attendRoutes');
const dashboardRoutes = require('./dashboardRoutes')

router.use('/questions', questionRoutes);
router.use('/talk', talkRoutes);
router.use('/users', userRoutes);
router.use('/attend', attendRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
