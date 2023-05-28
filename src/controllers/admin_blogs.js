/** @format */

//Get All Blogs Controller

const getAllBlogs = (req, res) => {
    res.send("All Blogs");
};

//Get Single Blog

const getSingleBlog = (req, res) => {
    res.json({ id: req.params.id });
};

//Create a Blog

const createBlog = (req, res) => {
    res.json(req.body);
};

//Edit a Blog

const editBlog = (req, res) => {
    res.json({ id: req.param.id });
};

//Delete a blog

const deleteBlog = (req, res) => {
    res.send("Delete a Blog");
};

//Export

module.exports = {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    editBlog,
    deleteBlog,
};
