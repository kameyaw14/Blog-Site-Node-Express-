const express = require('express');
const Blog = require("../models/blog");

const router = express.Router();



router.get("/", (req, res) => {
  res.redirect("/blogs");
});

router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/create", (req, res) => {
  res.render("createBlog", { title: "Chief Page" });
});

router.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/:blogId", (req, res) => {
  const bId = req.params.blogId;
  Blog.findById(bId)
    .then((result) => {
      res.render('blogDetails', { detailBlog: result, title: 'Blog Details' });
    })
    .catch((err) => {
  res.status(404).render("404page", { title: "Chief Page" });
      
    });
});

// Delete blog route
router.delete('/blogs/:blogId', (req, res) => {
  const bId = req.params.blogId;
  Blog.findByIdAndDelete(bId)
    .then(() => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Export the router module
module.exports = router;
