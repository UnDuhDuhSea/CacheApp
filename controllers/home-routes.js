const router = require('express').Router();
// Require models when complete

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {});
    // Update res.render once handlebars are complete
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    // add find user by PK and get their info and include all their expenses to display
    res.render('dashboard', {});
    // Update res.render once handlebars are complete
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create-expense', async (req, res) => {
  try {
    res.render('create-expense', {});
    // Update res.render once handlebars are complete
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/record-expense', async (req, res) => {
  try {
    res.render('record-expense', {});
    // Update res.render once handlebars are complete
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
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
  // Update res.render once handlebars are complete
});

module.exports = router;
