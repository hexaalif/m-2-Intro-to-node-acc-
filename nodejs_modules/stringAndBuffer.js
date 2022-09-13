const fs = require("fs");

const readStream = fs.createReadStream("./bufferLorem.txt");

readStream.on("data", (chunk) => {
  console.log(".........");
  console.log(chunk);
});

readStream.on("open", () => {
  console.log("sterm is open");
});

setTimeout(() => {
  readStream.pause();
  console.log("it is pause");
}, 15);

setTimeout(() => {
  readStream.resume();
  console.log("streaming is resume now");
}, 8000);
