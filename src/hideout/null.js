app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const bodyParser = require("body-parser");

let blogs = [
  {
    id: 1,
    title: "Blog 1",
    content: "Blog 1 content",
  },
  {
    id: 2,
    title: "Blog 2",
    content: "Blog 2 content",
  },
];

app.get("/blogs", (req, res) => res.status(200).json(blogs));

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const blog = blogs.find(blog => blog.id == id);
  res.json(blog);
});

app.post("/blogs/create", (req, res) => {
  let blog = req.body;
  console.log("CREATED BLOG", blog);
  if (blog.title !== "" && blog.content !== "") {
    let existingBlogs = [...blogs];
    blog = { id: blogs.length + 1, ...blog };
    existingBlogs.push(blog);
    blogs = existingBlogs;
    res.status(201).json({ message: "Blog created successfully", blogs: blogs });
  } else {
    res.status(500).json({ message: "Title and Content are required" });
  }
});

app.put("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  let editedBlog = req.body;
  const blog = blogs?.find(i => i.id === parseInt(id));
  console.log("IsExist", blog);
  if (blog) {
    blogs.map(i => {
      if (i.id === id) {
        i = editedBlog;
      }
      return blogs;
    });
    res.status(201).json({
      message: "Blog Edited Successfully",
      blog: editedBlog,
    });
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.delete("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const Index = blogs.findIndex(i => i.id === id);
  console.log(Index);
  if (Index !== -1) {
    blogs.splice(Index, 1);
    console.log("Blogs");
    res.status(200).json({ message: `Blog Id - ${id} is deleted successfully`, blogs: blogs });
  } else {
    res.status(400).json({ message: "Something wrong" });
  }
});

console.log("Hello World");
app.listen(port, () => console.log(`App listening on port ${port}!`));
