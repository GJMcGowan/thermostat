var Thermostat = function(){

  this.temperature = 20;
  this.powersaving = false;

};

Thermostat.prototype.up = function() {
  if (this.temperature === 25 && this.powersaving) throw new Error("25 is max when powersaving is on");
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) throw new Error("10 is the minimum temperature");
  this.temperature --;
};

