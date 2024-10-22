const express = require("express");
const mongoose = require("mongoose");


const blogRoutes = require('./routes/blogRoutes')

const myApp = express();



const DB_URI =
  "mongodb+srv://cole:test1234@chiefcluster.vhyvp.mongodb.net/my-db";

mongoose
  .connect(DB_URI)
  .then((result) => {
    console.log("connected to db");
    myApp.listen(3000);
  })
  .catch((err) => console.log(err));

myApp.set("view engine", "ejs");

// middlewares
myApp.use(express.urlencoded({ extended: true }));



  


const blogs = [
  { title: "1st Blog", snippet: "Ljksbd iipnsa hkjgavug sabiavk IGH Yuggube " },
  { title: "2nd Blog", snippet: "Ljksbd iipnsa hkjgavug sabiavk IGH Yuggube " },
  { title: "3rd Blog", snippet: "Ljksbd iipnsa hkjgavug sabiavk IGH Yuggube " },
];



myApp.get("/about", (req, res) => {
  res.render("about", { title: "Chief Page" });
});











myApp.use(blogRoutes)

myApp.use((req, res) => {
  res.status(404).render("404page", { title: "Chief Page" });
});
