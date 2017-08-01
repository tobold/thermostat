describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("has a temperature method", function(){
    it("returns the temperature value", function(){
      expect(thermostat.getTemp()).toBe(20);
    });
  });

});
