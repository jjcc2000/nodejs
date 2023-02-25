const os = require("os");
const http = require("http");
const fs = require("fs");
const colors = require("colors");
const htmlColors = require("html-colors");
// fs.writeFile("./new.js", "console.log('aler')", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("The file has been created");
//   }
// });
// console.log("This is the last line of code");
////////////////////////////////////TODO: Node is a nonsincronic language TODO://///////////////////////////////////////////////////
//////////////////////////TODO:This is a more clean way to write this code TODO:///////////////////////////////////////////////////////////////////////////

// http
//   .createServer(function (req, res) {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.write("<h1>Hello World desde Node</h1>");
//     res.end();
//   })
//   .listen(2000);

const serverHandler = function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h1> Hello World with HTML</h1>");
  res.end();
};

const server = http.createServer(serverHandler);

server.listen(3000, function () {
  console.log("This server is going in the server 3000".random);
});
