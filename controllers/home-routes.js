const router = require("express").Router();
// Require models when complete

router.get("/", async (req, res) => {
	try {
		res.render("homepage", {});
		// Update with res.render once handlebars are complete
		res.status(200).json("Hello Homepage");
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/dashboard/:id", async (req, res) => {
	try {
		res.render("dashboard", {});
		// Update with res.render once handlebars are complete
		res.status(200).json("Hello dashboard");
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/login", (req, res) => {
	if (req.session.logged_in) {
		res.redirect("/dashboard");
		return;
	}
	res.render("login");
	// Update with res.render once handlebars are complete
	res.status(200).json("Hello Login");
});

router.get("/signup", (req, res) => {
	if (req.session.logged_in) {
		res.redirect("/dashboard");
		return;
	}
	res.render("signup");
	// Update with res.render once handlebars are complete
	res.status(200).json("Hello Signup");
});

module.exports = router;
