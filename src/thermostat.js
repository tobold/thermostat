function Thermostat() {
  this._temperature = 20;
  this._minimumTemp = 10;
};

Thermostat.prototype.getTemp = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function(increase) {
  this._temperature += increase;
};

Thermostat.prototype.decreaseTemp = function(decrease) {
  if((this._temperature - decrease) < this._minimumTemp) {
    this._temperature = this._minimumTemp;
  } else {
    this._temperature -= decrease;
  }
};
