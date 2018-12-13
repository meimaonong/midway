const express = require("express");
const router = express.Router();

const feedService = require("./../service/feedService");
const hashtagService = require("./../service/hashtagService");

router.use((req, res, next) => {
  console.log("Called: ", req.path);
  next();
});

router.use(feedService);
router.use(hashtagService);

module.exports = router;
