const router = require('express').Router();
const { User, Budget } = require('../models');
const withAuth = require('../util/withAuth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
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

router.get('/create-budget', withAuth, async (req, res) => {
  try {
    res.render('create-budget', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/record-expense', withAuth, async (req, res) => {
  try {
    res.render('record-expense', {
      logged_in: req.session.logged_in,
    });
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
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

module.exports = router;
