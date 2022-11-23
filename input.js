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
    console.log(`bye bye!`);
    process.exit();
  }
  // movement inputs
  // up / w
  if (key === '\u0077') {
    connection.write("Move: up");
  }
  // left / a
  if (key === '\u0061') {
    connection.write("Move: left");
  }
  // down / s
  if (key === '\u0073') {
    connection.write("Move: down");
  }
  // right / d
  if (key === '\u0064') {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };