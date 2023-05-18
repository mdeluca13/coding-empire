const router =  require("express").Router();

const {Talk, Question, User} = require("../../models");

const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
    Talk.findAll( {
        attributes: ["talk_id", "name", "description", "date", "user_id"],
        include: [{model: Question, attributes: ["question_id", "question", "created", "user_id", "talk_id"],
                    include: {model: User, attributes: ["name"]},}]
    }).then ((talkData) => {
        res.json(talkData);
    }).catch((error) => {
        res.status(500).json(error);
    });
});

router.post("/", async (req, res) => {
    const newTalk = await Talk.create({
        ...req.body,
        user_id: req.session.user_id,
    });

    res.status(200).json(newTalk);
});

module.exports = router;















// const router = require('express').Router();
// const { Talk, User, Attend, Question } = require('../../models');

// router.get('/', async (req, res) => {
//     const talkData = await Talk.findAll({
//         include: [
//             {
//                 model: User,
//                 attributes: ['name'],
//             },
//             {
//                 model: Attend,
//                 attributes: ['attend_id'],
//                 include: {
//                     model: User,
//                     attributes: ['name'],
//                 }
//             },
//         ],
//     }).catch((err) => {res.json(err)});
//     res.status(200).json(talkData);
// });

// router.post('/', async (req, res) => {
//     try { 
//         const talkData = await Talk.create({
//             name: req.body.name,
//             description: req.body.description,
//             user_id: req.session.user_id,
//         });
//         res.status(200).json(talkData)
//     } catch (err) {
//         console.log(err)
//         res.status(400).json(err);
//     }
// });

// router.get('/:id', async (req, res) => {
//     if (!req.session.logged_in) {
//         res.redirect('/user/login');
//     } else {
//         try {
//             const talkData = await Talk.findByPk(req.params.id, {
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['name'],
//                     },
//                     {
//                         model: Question,
//                         attributes: ['question_id', 'question', 'created', 'user_id'],
//                         include: {
//                             model: User,
//                             attributes: ['name'],
//                         }
//                     },
//                 ],
//             });
//             const talk = talkData.get({ plain: true });
//             res.render('talk', { talk, logged_in: req.session.logged_in });
//             res.status(200).json(talkData)
//             console.log(talkData)
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         };
//     };
// });

// router.put('/:id', (req, res) => {
//     Talk.update(
//       {
//         name: req.body.name,
//         description: req.body.description,
//         created: req.body.created,
//       },
//       {
//         where: {
//           talk_id: req.params.id,
//         },
//       }
//     )
//     .then((updatedTalk) => {res.json('Talk Updated')}).catch((err) => res.json(err));});

// // Delete post
// router.delete('/:id', (req, res) => {
//     Talk.destroy({
//         where: {
//             talk_id: req.params.id,
//         },
//     })
//     .then((deletedTalk) => {res.json('Talk Deleted')}).catch((err) => res.json(err));});

// module.exports = router;