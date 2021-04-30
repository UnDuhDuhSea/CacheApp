const withAuth = require("../../util/withAuth");
const { Budget } = require('../../models');
const router = require('express').Router();

router.post("/", withAuth, async (req, res) => {
  try {
    const newExpense = await Budget.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newExpense);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const reportExpense = await Budget.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!reportExpense) {
      res.status(404).json({ message: "No Budget found with this id!" });
      return;
    }

    res.status(200).json(reportExpense);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const delExpense = await Budget.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!delExpense) {
      res.status(404).json({ message: "No Budget found with this id!" });
      return;
    }

    res.status(200).json(delExpense);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
