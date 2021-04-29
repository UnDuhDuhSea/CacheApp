const router = require('express').Router();
// Require models when complete
const { User, Budget } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const userBudgetData = await User.findByPk(req.session.id, {
      attributes: ['username'],
      include: [
        {
          model: Budget,
        },
      ],
    });
    const userBudget = userBudgetData.get({ plain: true });
    res.render('dashboard', {
      ...userBudget,
      expenses: userBudget.budgets,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/create-budget', async (req, res) => {
  try {
    res.render('create-budget', {});
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
