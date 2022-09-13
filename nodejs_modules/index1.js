// var name = " SUST";
// const name = " SUST";

const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // req, res explore

  //   console.log(req.url);
  //   if (req.url == "/") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("<p>this is home page</p>");
  //     res.end();
  //   } else if (req.url == "/contact") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("<p>this is contact page</p>");
  //     res.end();
  //   } else if (req.url == "/about") {
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.write(JSON.stringify({ COURSE: "ACC" }));
  //     res.end();
  //   }

  //   url explore

  //   const address_url = "http://localhost:4000/contact?name=saku&country=bd";

  //   const parse_URL = url.parse(address_url, true);

  //   const queryObject = parse_URL.query;
  //   console.log(queryObject);

  // file system module

  if ((req.url = "/")) {
    // asynchronous

    // fs.readFile("data.txt", (err, data) => {
    //   if (err) {
    //     res.write("failed to red");
    //     res.end();
    //   } else {
    //     res.write(data);
    //     res.end();
    //   }
    // });

    fs.writeFile("newData.text", "hello node js !!", (err) => {
      if (err) {
        res.write("data failed to write");
        res.end();
      } else {
        res.write("data written successfully");
        res.end();
      }
    });

    // synchronous

    // const data = fs.readFileSync("data.txt");
    // res.write(data);
    // res.end();
  }
});

// console.log(url);

const PORT = 4000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);
