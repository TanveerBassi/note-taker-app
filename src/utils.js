const { json } = require("express");
const fs = require("fs");

const path = require("path");

const getDataFromFile = () => {
  const filePath = path.join(__dirname, "../db/db.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const writeDataToFile = (data) => {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = {
  getDataFromFile,
  writeDataToFile,
};
