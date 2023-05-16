const router = require('express').Router();
const questionRoutes = require('./questionRoutes');
const talkRoutes = require('./talkRoutes');
const userRoutes = require('./userRoutes');

router.use('/questions', questionRoutes);
router.use('/talk', talkRoutes);
router.use('/users', userRoutes);

module.exports = router;
