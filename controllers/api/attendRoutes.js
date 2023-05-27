const router = require('express').Router();
const { Attend, User, Talk } = require('../../models');
const withAuth = require('../../utils/auth');

// Getting all Attendance data
router.get('/', async (req, res) => {
    const attendData = await Attend.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            },
            {
                model: Talk,
                attributes: ['talk_id'],
            },
        ],
    }).catch((err) => {res.json(err)});
    res.status(200).json(attendData);
    console.log(attendData)
});

// adding attendance route
router.post('/', withAuth, async (req, res) => {
  const newAttend = await Attend.create({
    user_id: req.session.user_id,
    talk_id: req.body.talkId,
  });
  res.status(200).json(newAttend);
});

// delete attendance route
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const attendData = await Attend.destroy({
      where: {
        attend_id: req.params.id,
      },
    });
    console.log(attendData)
    if (!attendData) {
      res.status(404).json({ message: 'No attendance found with this id!' });
      return;
    }
    res.status(200).json(attendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
