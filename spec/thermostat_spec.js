describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("#getTemp", function(){
    it("returns the temperature value", function(){
      expect(thermostat.getTemp()).toBe(20);
    });
  });

  describe("#increaseTemp", function() {
    it("increases the temperature", function() {
      thermostat.increaseTemp(1);
      expect(thermostat.getTemp()).toBeGreaterThan(20);
    });

    describe("power saving on", function() {
      it("doesn't increase the temperature above the maximum", function() {
        thermostat.increaseTemp(6);
        expect(thermostat.getTemp()).toBe(25);
      });
    });

    describe("power saving off", function() {
      it("doesn't increase the temperature above the maximum", function() {
        thermostat.powerSaveToggle();
        thermostat.increaseTemp(13);
        expect(thermostat.getTemp()).toBe(32);
      });
    });
  });

  describe("#descreaseTemp", function() {
    it("decreases the temperature", function() {
      thermostat.decreaseTemp(1);
      expect(thermostat.getTemp()).toBe(19);
    });

    it("doesn't decrease the temperature below the minimum", function() {
      thermostat.decreaseTemp(11);
      expect(thermostat.getTemp()).toBe(10);
    });
  });

  describe("#resetTemp", function() {
    it("resets the temperature to the default value", function(){
      thermostat.increaseTemp(5);
      thermostat.resetTemp();
      expect(thermostat.getTemp()).toBe(20);
    });
  });

  describe("getEnergyUsage", function() {
    it("returns the current energy usage", function() {
      expect(thermostat.getEnergyUsage()).toBe("medium-usage");
    });
  });





});
