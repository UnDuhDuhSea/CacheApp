const router = require('express').Router();
// Require models when complete

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {});
    // Update res.render once handlebars are complete
    // res.status(200).json("Hello Homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    // add find user by PK and get their info and include all their expenses to display
    res.render('dashboard', {});
    // Update res.render once handlebars are complete
    res.status(200).json('Hello dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create-expense', async (req, res) => {
  try {
    res.render('', {});
    // Update res.render once handlebars are complete
    res.status(200).json('Hello Create Expense');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/record-expense', async (req, res) => {
  try {
    res.render('', {});
    // Update res.render once handlebars are complete
    res.status(200).json('Hello Record Expense');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
  // Update res.render once handlebars are complete
  // res.status(200).json("Hello Login");
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
  // Update res.render once handlebars are complete
  // res.status(200).json("Hello Signup");
});

module.exports = router;
