function Clock () {
  this.date = new Date();

  this.printTime();

  setInterval(this._tick.bind(this), 1000);

}


Clock.prototype.printTime = function () {
  this.hours = this.date.getHours();
  this.minutes = this.date.getMinutes();
  this.seconds = this.date.getSeconds();

  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype._tick = function () {
  this.date.setSeconds(this.date.getSeconds() + 1);
  this.printTime();
};
