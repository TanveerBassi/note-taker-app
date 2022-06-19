const renderHome = (req, res) => {
  res.send("home");
};

const renderNotes = (req, res) => {
  res.send("notes");
};
module.exports = { renderHome, renderNotes };

// figure out where renderHome and render Notes hit?/?

// Controllers for other routes too
