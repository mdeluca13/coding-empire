const router = require('express').Router();
const questionRoutes = require('./questionRoutes');
const talkRoutes = require('./talkRoutes');
const userRoutes = require('./userRoutes');
const attendRoutes = require('./attendRoutes');

router.use('/questions', questionRoutes);
router.use('/talk', talkRoutes);
router.use('/users', userRoutes);
router.use('/attend', attendRoutes);

module.exports = router;
