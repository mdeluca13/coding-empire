const router = require('express').Router();
const { Talk, User, Question } = require('../../models');

router.get('/', async (req, res) => {
    const questionData = await Question.findAll({
        where: {
            user_id: req.session.user_id,
        },
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
    const questions = questionData.map((question) => question.get({ plain: true }));

    res.render('dashboard', {
        questions,
        logged_in: req.session.logged_in,
    })
});

router.get('/:id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/user/login');
    } else {
        try {
            const questionData = await Question.findByPk(req.params.id, {
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
            });
            res.status(200).json(questionData)
        
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        };
    };
});

router.post('/', async (req, res) => {
    try { 
        const questionData = await Question.create({
        question: req.body.question,
        user_id: req.session.user_id,
        talk_id: req.body.talk_id,
        })
        res.status(200).json(questionData)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', (req, res) => {
    Question.update(
      {
        question: req.body.question,
        created: req.body.created,
      },
      {
        where: {
          question_id: req.params.id,
        },
      }
    )
    .then((updatedQuestion) => {res.json('Question Updated')}).catch((err) => res.json(err));});

router.delete('/:id', (req, res) => {
    Question.destroy({
        where: {
            question_id: req.params.id,
        },
    })
    .then((deletedQuestion) => {res.json('Question Deleted')}).catch((err) => res.json(err));});

module.exports = router;