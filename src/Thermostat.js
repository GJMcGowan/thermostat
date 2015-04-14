var Thermostat = function(){

  this.temperature = 20;
  this.powersaving = true;
  this.colour = 'yellow';

};

Thermostat.prototype.up = function() {
  if (this.temperature === 25 && this.powersaving) throw new Error("25 is max when powersaving is on");
  if (this.temperature === 32) throw new Error("Temperature cannot exceed 32");
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) throw new Error("10 is the minimum temperature");
  this.temperature --;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.colours = function() {
  if (this.temperature < 18) this.colour = 'Green';
};