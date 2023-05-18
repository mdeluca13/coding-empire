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
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newAttend = await Attend.create({
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const attendData = await Attend.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!attendData) {
      res.status(404).json({ message: 'Attendance found with this id!' });
      return;
    }

    res.status(200).json(attendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
