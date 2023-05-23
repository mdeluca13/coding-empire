const router =  require("express").Router();

const { Talk, Question, User, Attend } = require("../../models");

const withAuth = require("../../utils/auth");

router.get('/:id', withAuth, async (req, res) => {

    const talkData = await Talk.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['name'],
            },
            {
                model: Question,
                attributes: ['question_id', 'question', 'created', 'user_id'],
                include: {
                    model: User,
                    attributes: ['name'],
                }
            },
            {
                model: Attend,
                attributes: ['user_id', 'attend_id'],
                include: {
                    model: User,
                    attributes: ['name'],
                }
            },
        ],
    })
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Talk }],
    });
    const attendData = await Attend.findAll({
        where: {
            user_id: req.session.user_id,

        },
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    })
    const attend = attendData.map((attend) => attend.get({ plain: true }));
    
    const user = userData.get({ plain: true });
    const talk = talkData.get({ plain: true });
    console.log(talk)
    console.log('_________________')
    console.log(user)
    console.log(attend)
    res.render('talk', {
        ...user,
        talk,
        logged_in: req.session.logged_in,
    })
    // .catch((error) => {res.status(500).json(error)});
});

router.put('/:id', (req, res) => {
    Talk.update(
      {
        name: req.body.name,
        description: req.body.description,
        created: req.body.created,
      },
      {
        where: {
          talk_id: req.params.id,
        },
      }
    )
    .then((updatedTalk) => {res.json('Talk Updated')}).catch((err) => res.json(err));});

// Delete post
router.delete('/:id', (req, res) => {
    Talk.destroy({
        where: {
            talk_id: req.params.id,
        },
    })
    .then((deletedTalk) => {res.json('Talk Deleted')}).catch((err) => res.json(err));});

module.exports = router;