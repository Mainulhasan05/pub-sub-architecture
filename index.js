const EventEmitter = require("events");

class MessageBroker extends EventEmitter {}
const broker = new MessageBroker();

function publishNews(topic, message) {
  broker.emit(topic, message);
}

function sportsSubscriber(message) {
  console.log("Sports Subscriber:", message);
}

function politicalSubscriber(message) {
  console.log("Political Subscriber:", message);
}

broker.on("sports", sportsSubscriber);
broker.on("political", politicalSubscriber);

publishNews("political", "Political news");
publishNews("sports", "Sports news");
