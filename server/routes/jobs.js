const cheerio = require("cheerio");
const axios = require("axios");
const getUrls = require("get-urls");
const puppeteer = require("puppeteer");
const express = require("express");
const router = express.Router();

router.get("/jobs", (req, res, next) => {
  res.json({ msg: "route test" });
});

module.exports = router;
