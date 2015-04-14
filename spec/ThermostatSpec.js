describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should have a starting temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature by one', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature by one', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minumum temperature of 10', function() {
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.temperature).toEqual(10);
  });

});