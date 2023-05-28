/** @format */

const express = require("express");
const { getAllBlogs, getSingleBlog } = require("../controllers/user_blogs");
const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/:id").get(getSingleBlog);

module.exports = router;
