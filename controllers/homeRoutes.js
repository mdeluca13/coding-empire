const router = require("express").Router();
const {User, Talk, Question} = require("../models");
const withAuth = require("../utils/auth");

// homepage get all talks route
router.get("/", async (req, res) => {
    const talkData = await Talk.findAll( {
        attributes: ["talk_id", "name", "description", "date", "location", "user_id"],
        include: [
            {
            model: User,
            attributes: ['name'],
            },
            
            {model: Question, 
            attributes: 
                ["question_id", "question", "created", "user_id", "talk_id"],
            include: {model: User, 
                attributes: 
                ["name"]},}]
    }).catch((error) => {res.status(500).json(error)});
    const talk = talkData.map((talk) => talk.get({ plain: true }));
    console.log(talk)
    res.render('homepage', {
        talk,
        logged_in: req.session.logged_in,
    })
});

// login get
router.get("/login", (req, res) => { 
    if (req.session.logged_in){
        res.redirect("/");
        return;
    }
    res.render("login");
});

// dashboard get
router.get("/dashboard", withAuth, async (req, res) => {
    try {
		const currentUser = await User.findByPk(req.session.user_id, {
			attributes: {
				exclude: ['password']
			},
			include: [{
				model: Talk
			}],
		});

		const user = currentUser.get({
			plain: true
		});

		res.render('dashboard', {
			...user,
			logged_in: true
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;