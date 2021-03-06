describe('Thermostat', function() {

  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
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

  it('has a miniumum temperature of 10', function() {
    thermostat.temperature = 10;
    expect( function(){ thermostat.down(); } ).toThrow(new Error("10 is the minimum temperature"));
  });

  it('has a maximum temperature of 25 when powersaving mode is on', function() {
    thermostat.temperature = 25;
    thermostat.powersaving = true;
    expect( function(){ thermostat.up(); } ).toThrow(new Error("25 is max when powersaving is on"));
  });

  it('has a default max temp of 32', function() {
    thermostat.powersaving = false;
    thermostat.temperature = 32;
    expect( function(){ thermostat.up(); } ).toThrow(new Error("Temperature cannot exceed 32"))
  });

  it('has powersaving on by default', function(){
    expect(thermostat.powersaving).toBe(true);
  });

  it('can reset the temp to 20 via reset button', function() {
    thermostat.temperature = 12;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('can color the display green when temperature < 18', function() {
    thermostat.temperature = 17;
    thermostat.colours();
    expect(thermostat.colour).toEqual('Green');
  });

  it('can colour the display red when temperature is >= 25', function() {
    thermostat.temperature = 25;
    thermostat.colours();
    expect(thermostat.colour).toEqual('Red');
  });

  it('can colour the display yellow when temperature is between 18 and 25', function(){
    thermostat.temperature = 21;
    thermostat.colours();
    expect(thermostat.colour).toEqual('Yellow');
  });

  it('can switch colours when temperature is increased', function() {
    thermostat.temperature = 17;
    thermostat.colours();
    thermostat.up();
    expect(thermostat.colour).toEqual('Yellow');
  });

  describe('web interface', function() {
    it('displays a default temperature of 20', function() {
      expect('#temperature').toContainText('20');
    });

    it('increases temp with an up button', function() {
      $("input#up").click();
      expect('#temperature').toContainText('21');
    });

    it('decreases temp with a down button', function() {
      $("input#down").click();
      expect('#temperature').toContainText('19');
    });

    it('sets temperature to 20 when reset is hit', function() {
      $("input#down").click();
      $("input#reset").click();
      expect('#temperature').toContainText('20');
    });

    it('can display whether powersaving is on', function(){
      expect('#temperature').toContainText('true');
    });

    it('can change powersaving from on to off', function(){
      $('input#powersaving').click();
      expect('#temperature').toContainText('false');
    });

  });

});