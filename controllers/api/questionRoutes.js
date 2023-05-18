const router =  require("express").Router();

const {Question} = require("../../models");

const withAuth = require("../../utils/auth");


router.get("/", (req, res) => {
    Question.findAll().then((questiondData) => 
        res.json(questiondData)).catch((error) => res.status(500).json(error));
});


router.post("/", withAuth, (req, res) => {
    Question.create({
        question: req.body.question,
        created: req.body.created,
        user_id: req.body.user_id,
        talk_id: req.body.talk_id
    }).then ((questiondData) => res.json(questiondData))
    .catch ((error) => {
        res.status(500).json(error);
    });
});

router.delete("/:id", withAuth, (req, res) => {
    Question.destroy( {
        where: {
            id: req.params.id,
        },
    })
    .then((delQuestiondData) => {
        if (delQuestiondData){
            res.json(delQuestiondData);
        }

        else {
            res.status(404).json({message: "Not Found"});
            return;
        }
    });
});

module.exports = router;