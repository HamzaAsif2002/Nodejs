const EventEmitter = require ("events");

const emitter = new EventEmitter;

emitter.on("greet", (data) => {
console.log(`hi ${data.name} you are a ${data.job}`);
});

emitter.on("greet", (data) => {
console.log(`hi ${data.name} you are a ${data.job}`);
});

emitter.emit("greet", {name : "Hamza", job : "webDeveloper"});