const router = require("express").Router();
const {User, Talk, Question} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    const talkData = await Talk.findAll( {
        attributes: ["talk_id", "name", "description", "date", "user_id"],
        include: [{model: Question, attributes: ["question_id", "question", "created", "user_id", "talk_id"],
                    include: {model: User, attributes: ["name"]},}]
    }).catch((error) => {res.status(500).json(error)});
    const talk = talkData.map((talk) => talk.get({ plain: true }));
    console.log(talk)
    res.render('homepage', {
        talk,
        logged_in: req.session.logged_in,
    })
});

// router.get("/login", (req, res) => {
    
//     if (req.session.logged_in){
//         res.redirect("/");
//         return;
//     }

//     res.render("login");
    
// });

module.exports = router;