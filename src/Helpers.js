var thermostat = new Thermostat();

$( "input#up" ).click(function() {
  thermostat.up()
  document.getElementById('temp').innerHTML = thermostat.temperature;
});

$('input#down').click(function() {
  thermostat.down()
  document.getElementById('temp').innerHTML = thermostat.temperature;
});


document.getElementById('temp').innerHTML = thermostat.temperature;