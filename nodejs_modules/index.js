const events = require("events");
const eventEmitter = new events.EventEmitter();

// creating an event
const chitkarDimu = () => {
  console.log("oi beta koi tui??");
};

// assign the handler into an event
eventEmitter.on("screen", chitkarDimu).chitkarDimu;

// firing the event
eventEmitter.emit("screen");
