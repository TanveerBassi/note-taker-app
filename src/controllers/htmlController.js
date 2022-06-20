const path = require("path");

const renderHome = (req, res) => {
  res.send("home");
};

const renderNotes = (req, res) => {
  res.send("notes");
};
module.exports = { renderHome, renderNotes };
