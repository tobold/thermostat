$(document).ready(function() {
  var thermostat = new Thermostat();
  var powerusagehash = {  'low-usage' : 'green',
                          'medium-usage' : 'yellow',
                          'high-usage' : 'red'}

  function updateDisplays() {
    $('#powersavetoggledisplay').text(thermostat._powersaving);
    $('#energyusagedisplay').text(thermostat.getEnergyUsage());
    $("#tempdisplay").css("background-color", powerusagehash[thermostat.getEnergyUsage()]);
    $('#tempdisplay').text(thermostat.getTemp());
  }

  updateDisplays();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
    $('#temperature').text(data.main.temp - 273.15);
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
    $('#weather').text(data.weather[0].description);
  })

  $('#increasetempbutton').click(function() {
    thermostat.increaseTemp(1);
    updateDisplays();
  });

  $('#decreasetempbutton').click(function() {
    thermostat.decreaseTemp(1);
    updateDisplays();
  });

  $('#resettempbutton').click(function() {
    thermostat.resetTemp();
    updateDisplays();
  });

  $('#powersavetogglebutton').click(function() {
    thermostat.powerSaveToggle();
    updateDisplays();
  });
})
