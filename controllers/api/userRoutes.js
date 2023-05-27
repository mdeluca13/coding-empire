const router = require("express").Router();
const {User} = require("../../models");

// login route
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.name = userData.name;
        req.session.user_id = userData.user_id;
        res.status(200).json({ user: userData, message: 'Login Success.' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// signup route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData)
    if (!userData) {
      console.log(User.findAll())
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log(userData)
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.name = userData.name;
      req.session.user_id = userData.user_id;
      
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
  
module.exports = router;
  