/** @format */

const express = require("express");
const router = express.Router();
const { getAllBlogs, getSingleBlog, createBlog, deleteBlog, editBlog } = require("../controllers/admin_blogs");

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getSingleBlog).put(editBlog).delete(deleteBlog);

module.exports = router;
