function Thermostat() {
  this.DEFAULTTEMP = 20;
  this._temperature = this.DEFAULTTEMP;
  this.MINIMUMTEMP = 10;
  this._powersaving = true;
  this._maximumTemp = this._powersaving === true ? 25 : 32;
};

Thermostat.prototype.getTemp = function() {
  return this._temperature;
};

Thermostat.prototype.powerSaveToggle = function() {
  this._powersaving = this._powersaving === true ? false : true;
  this._maximumTemp = this._powersaving === true ? 25 : 32;
};

Thermostat.prototype.increaseTemp = function(increase) {
  if((this._temperature + increase) > this._maximumTemp) {
    this._temperature = this._maximumTemp;
  } else {
    this._temperature += increase;
  }
};

Thermostat.prototype.decreaseTemp = function(decrease) {
  if((this._temperature - decrease) < this._minimumTemp) {
    this._temperature = this._minimumTemp;
  } else {
    this._temperature -= decrease;
  }
};

Thermostat.prototype.resetTemp = function() {
  this._temperature = this._defaultTemp;
};

Thermostat.prototype.getEnergyUsage = function () {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
