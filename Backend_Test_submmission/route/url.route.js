const express = require('express');

const { shortUrl } = require('../controller/url.controller.js');

const urlRouter = express.Router()

urlRouter.post("/shorturl",shortUrl)

module.exports = urlRouter