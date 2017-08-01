$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#tempdisplay').text(thermostat.getTemp());
  $('#powersavetoggledisplay').text(thermostat._powersaving);

  $('#increasetempbutton').click(function() {
    thermostat.increaseTemp(1);
    $('#tempdisplay').text(thermostat.getTemp());
  });

  $('#decreasetempbutton').click(function() {
    thermostat.decreaseTemp(1);
    $('#tempdisplay').text(thermostat.getTemp());
  });

  $('#resettempbutton').click(function() {
    thermostat.resetTemp();
    $('#tempdisplay').text(thermostat.getTemp());
  });

  $('#powersavetogglebutton').click(function() {
    thermostat.powerSaveToggle();
    $('#powersavetoggledisplay').text(thermostat._powersaving);
  });

})
