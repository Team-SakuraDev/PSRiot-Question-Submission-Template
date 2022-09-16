const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  console.log(line);
  rl.close();
  process.exit();
}).on("close", function() {
  process.exit();
});
