var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft ===  0) {
    completionCallback(sum);

  }
  else {reader.question("What do you want to add", function(num) {
      addNumbers(sum + parseInt(num), numsLeft - 1, completionCallback);
    });
  }

  console.log("End of program");
}

var adding = addNumbers(0, 3, function(sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
