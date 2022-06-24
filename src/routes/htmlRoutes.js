const { Router } = require("express");
const { renderHome, renderNotes } = require("../controllers/htmlController");

const router = Router();

router.get("/notes", renderNotes);
router.get("*", renderHome);

module.exports = router;
