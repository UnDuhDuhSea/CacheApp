const router = require('express').Router();
const { User, Budget } = require('../models');
const withAuth = require('../util/withAuth');

router.get('/', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.render('homepage');
    } else {
      res.redirect('/dashboard');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userBudgetData = await User.findByPk(req.session.user_id, {
      attributes: ['username'],
      include: [
        {
          model: Budget,
        },
      ],
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

router.get('/edit-budget/:id', withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findOne({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!budgetData) {
      res.status(404).json({ message: 'No Budget found with this id!' });
      return;
    }
    const budget = budgetData.get({ plain: true });
    res.render('edit-budget', {
      budget,
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

// router.get('/total', async (req, res) => {
//   try {
//     Budget.sum('budget_amount', { where: { user_id: 1 } }).then((sum) => {
//       console.log(sum);
//       res.status(200).json(sum);
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
