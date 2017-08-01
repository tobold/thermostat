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
  });




});
