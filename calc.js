const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol === "+") {
		console.log(num1 + num2)
	} else if (mathSymbol === "-"){
		console.log(num1 - num2)
	} else if (mathSymbol === "*"){
		console.log(num1 * num2)
	} else if (mathSymbol === "/"){
		console.log(num1 / num2)
	} else if (mathSymbol === "^"){
		console.log(Math.sqrt (num1))
		console.log(Math.sqrt (num2))
	} else {
		console.log("Might be too advanced for this calculator.")
	}
	// console.log(mathSymbol)
	// console.log(num1)
	// console.log(num2)
	// This line closes the connection to the command line interface.
	reader.close()

});
