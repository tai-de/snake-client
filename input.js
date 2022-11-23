const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, CHAT_ONE_KEY, CHAT_TWO_KEY, CHAT_THREE_KEY } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // ctrl + c input to leave the game
  if (key === '\u0003') {
    console.log(`l8r!`);
    process.exit();
  }
  // movement inputs
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  // double time!
  if (key === 't') {
    connection.write("Move: up");
    setTimeout(() => {
      connection.write("Move: up");
    }, 50);
    setTimeout(() => {
      connection.write("Move: up");
    }, 100);
  }
  if (key === 'f') {
    connection.write("Move: left");
    setTimeout(() => {
      connection.write("Move: left");
    }, 50);
    setTimeout(() => {
      connection.write("Move: left");
    }, 100);
  }
  if (key === 'g') {
    connection.write("Move: down");
    setTimeout(() => {
      connection.write("Move: down");
    }, 50);
    setTimeout(() => {
      connection.write("Move: down");
    }, 100);
  }
  if (key === 'h') {
    connection.write("Move: right");
    setTimeout(() => {
      connection.write("Move: right");
    }, 50);
    setTimeout(() => {
      connection.write("Move: right");
    }, 100);
  }
  // chat messages
  if (key === CHAT_ONE_KEY) { //j
    connection.write("Say: l8r");
  }
  if (key === CHAT_TWO_KEY) { //k
    connection.write("Say: snek snek");
  }
  if (key === CHAT_THREE_KEY) { //l
    connection.write("Say: noo!!");
  }
  if (key === 'p') {
    connection.write("Say: yo!");
  }
};

module.exports = { setupInput };