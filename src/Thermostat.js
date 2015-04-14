var Thermostat = function(){

  this.temperature = 20;

};

Thermostat.prototype.up = function() {
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) throw new Error("10 is the minimum temperature");
  this.temperature --;
};