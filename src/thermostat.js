function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.getTemp = function() {
  return this._temperature;
};
