const router = require('express').Router();
// Require models when complete

router.post('/', async (req, res) => {
  try {
    res.status(200).json({});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.status(200).json({});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json({});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
