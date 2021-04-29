const router = require('express').Router();
// Require models when complete

router.post('/', async (req, res) => {
  try {
    res.status(200).json('Add a new expense');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.status(200).json('Record an expense');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json('Delete expense');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
