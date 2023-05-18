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



