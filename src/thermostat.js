function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.getTemp = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function(increase) {
  this._temperature += increase;
};

Thermostat.prototype.decreaseTemp = function(decrease) {
  this._temperature -= decrease;
};
