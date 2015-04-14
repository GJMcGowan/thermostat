describe('Thermostat', function() {

  var thermostat;

  it('should have a starting temperature of 20', function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);
  });

  it('should increase temperature by one', function() {
    thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

});