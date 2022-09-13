const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   res.end("Welcome to Full Stack Development");
  //   console.log(req.url);
  if (req.url == "/") {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write("<p>Welcome to Full Stack Development</p>");
    //     res.end();
    //   } else if (req.url == "/home") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     res.write(JSON.stringify({ course: "ACC" }));
    //     res.end();
    //   } else if (req.url == "/read") {
    //     fs.readFile("first.txt", (err, data) => {
    //       if (err) {
    //         res.write("failed to read data");
    //         res.end();
    //       } else {
    //         res.write(data);
    //         res.end();
    //       }
    //     });
    fs.writeFile(
      "sec.txt",
      " I am a pull stack developer !!! 🤣",
      function (err) {
        if (err) {
          res.write("failed to read data");
          res.end();
        } else {
          res.write("success to read data");
          res.end();
        }
      }
    );
    fs.appendFile("first.txt", "No! It will be full not pull ! 😑", (err) => {
      if (err) {
        res.write("failed");
        res.end();
      } else {
        res.write(
          "I am a pull stack developer !!! 🤣No! It will be full not pull ! 😑"
        );
        res.end();
      }
    });
    fs.unlink("sec.txt", (err) => {
      if (err) {
        res.write("failed to delete");
        res.end();
      } else {
        res.write("succussfully deleted");
        res.end();
      }
    });
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`SERVER IS Running at ${PORT}`);
