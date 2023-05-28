/** @format */

const getAllBlogs = (req, res) => {
    res.send("Get All Blogs by user");
};

const getSingleBlog = (req, res) => {
    res.json({ id: req.params.id });
};

module.exports = {
    getAllBlogs,
    getSingleBlog,
};
