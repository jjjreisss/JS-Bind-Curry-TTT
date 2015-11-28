var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question("Is " + el1 + " > " + el2, function(answer) {
    console.log("answer is");
    console.log(answer);

    answer === "yes" ? callback(true) : callback(false);
  });
}

function innerBubbleSortLoop(arr, i, madeSwaps, outerBubbleSortLoop) {

  var swap = function (shouldSwap) {
    if (shouldSwap) {
      madeSwaps = true;
      var dummy = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = dummy;
    }
    innerBubbleSortLoop(arr, i + 1, madeSwaps, outerBubbleSortLoop);
  };
  
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], swap);
  } else {
    outerBubbleSortLoop(madeSwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeSwaps) {
    if (madeSwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

// absurdBubbleSort([3,6,2,4,8,1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });
