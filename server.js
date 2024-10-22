const http = require("http");
const fs = require("fs");
const lodash = require('lodash')

const myServer = http.createServer((req, res) => {


    const randNum = lodash.random(1,10)
    console.log(randNum);
    


  //   send html file
  res.setHeader("Content-Type", "text/html");

  let path = "./views";

  switch (req.url) {
    case "/":
      path += "/index.html";
      break;
    case "/about":
      path += "/about.html";
      break;

    default:
      path += "/404page.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("error");
      res.end();
    }
    // res.write(data);
    res.end(data);
  });
});

myServer.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
