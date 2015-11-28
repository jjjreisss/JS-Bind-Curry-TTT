var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Game = function(){
  this.board = [[3,2,1], [], []];
};

Game.prototype = {
  isWon: function() {
    if (this.board[2].length === 3) {
      return true;
    }  else {
      return false;
    }
  },

  isValidMove: function(popStack, pushStack) {
    if (popStack.length === 0) {
      return false;
    } else if (pushStack.length === 0){
      return true;
    } else if (popStack[popStack.length - 1] < pushStack[pushStack.length - 1]) {
      return true;
    } else {
      return false;
    }
  },

  move: function(popStack, pushStack) {
    pushStack.push(popStack.pop());
  },

  print: function() {
    console.log(this.board);
  },

  promptMove: function(moveIfValidThenRunAgain) {
    var thisGame = this;
    this.print();

    reader.question("Pop stack?", function(arrIndex1) {
      reader.question("Push stack?", function(arrIndex2){
        var popStack = thisGame.board[parseInt(arrIndex1)];
        var pushStack = thisGame.board[parseInt(arrIndex2)];
        moveIfValidThenRunAgain.call(thisGame, popStack, pushStack);
      });
    });
  },

  run: function(completionCallback) {
    if (!this.isWon()) {
      var moveIfValidThenRunAgain = function(popStack, pushStack) {
        if (this.isValidMove(popStack, pushStack)) {
          this.move(popStack, pushStack);
        } else {
          console.log("invalid move");
        }
        this.run(completionCallback);
      }

      this.promptMove(moveIfValidThenRunAgain);
    } else {
      completionCallback();
    }
  }

};


var game = new Game;
// console.log(game.isWon());
// console.log(game.isValidMove(game.board[0], game.board[1]));
// console.log(game.isValidMove(game.board[2], game.board[1]));
// (game.move(game.stack1, game.stack2));
// game.print();
game.run( function() {
  console.log("YOU WON");
  reader.close();
});
