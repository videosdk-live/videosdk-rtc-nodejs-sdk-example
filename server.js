const express = require("express");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/get-token", (req, res) => {
  const API_KEY = process.env.ZUJONOW_API_KEY;
  const SECRET_KEY = process.env.ZUJONOW_SECRET_KEY;
  const options = { expiresIn: "10m", algorithm: "HS256" };
  const payload = {
    apikey: API_KEY,
    permissions: ["allow_join", "allow_mod"], // also accepts "ask_join"
  };
  const token = jwt.sign(payload, SECRET_KEY, options);
  res.json({ token });
});
app.post("/create-meeting/", (req, res) => {
  const token = req.body.token;
  console.log("token", token);
  const ZUJONOW_API_ENDPOINT = `${process.env.ZUJONOW_API_ENDPOINT}/api/meetings`;
  const options = {
    method: "POST",
    headers: {
      Authorization: token,
    },
  };
  fetch(ZUJONOW_API_ENDPOINT, options)
    .then((response) => response.json())
    .then((result) => res.json(result)) // result will contain meetingId
    .catch((error) => console.log("error", error));
});
app.get("/validate-meeting/:token", (req, res) => {
  const token = req.params.token;
  const ZUJONOW_API_ENDPOINT = `${process.env.ZUJONOW_API_ENDPOINT}/api/meetings`;
  const options = {
    method: "POST",
    headers: {
      Authorization: token,
    },
  };
  fetch(ZUJONOW_API_ENDPOINT, options)
    .then((response) => response.json())
    .then((result) => res.json(result)) // result will contain meetingId
    .catch((error) => console.log("error", error));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
