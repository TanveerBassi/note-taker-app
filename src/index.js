const express = require("express");
const path = require("path");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
