Function.prototype.myBind = function (context) {
  var fn = this;
  var bound = function() {
    fn.apply(context);
  };

  return bound;
};


function Cat(name) {
  this.name = name;
}
//
// Cat.prototype.sayName = function () {
//   console.log("My name is:" + this.name);
// };

Cat.prototype = {
  sayName: function() {
    console.log("my name is:" + this.name);
  },

  double: function () {
    console.log(this.name + this.name);
  }
};


var gizmo = new Cat("gizmo");
var atlas = new Cat("atlas");
gizmo.sayName();
gizmo.double();

// atlas.sayName.myBind(gizmo);
// gizmo.sayName.apply(atlas);
// var later = gizmo.sayName.myBind(atlas);
// later();

// Game.prototype = {
//   isWon?: function() {
//     this.stack3 === [3,2,1] ? return true : return false;
//   };
//
//   isValidMove?: function(popStack, pushStack) {
//     this.popStack
//   }
