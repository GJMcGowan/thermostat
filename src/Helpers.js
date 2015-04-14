var thermostat = new Thermostat();

$( "input#up" ).click(function() {
  thermostat.up()
  document.getElementById('temp').innerHTML = thermostat.temperature;
});

$('input#down').click(function() {
  thermostat.down()
  document.getElementById('temp').innerHTML = thermostat.temperature;
});

$('input#reset').click(function() {
  thermostat.reset()
  document.getElementById('temp').innerHTML = thermostat.temperature;
});

document.getElementById('temp').innerHTML = thermostat.temperature;

document.getElementById('ispowersaving_on').innerHTML = thermostat.powersaving;
