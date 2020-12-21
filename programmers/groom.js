const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});





rl.on("line", function(line) {
	input = line.split(' ').map(item => input += item);
	console.log("Hello Goorm! Your input is", line);
	rl.close();
}).on("close", function() {
	process.exit();
});
