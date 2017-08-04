
$(document).ready(function() {
  var thermostat = new Thermostat();

  var powerusagehash = {  'low-usage' : '#9BC53D',
                          'medium-usage' : '#FDE74C',
                          'high-usage' : '#E55934'};

  var powersavehash = {  true : 'green',
                          false : 'red'};

  function updateDisplays() {
    $("#tempdisplay").css("background-color", powerusagehash[thermostat.getEnergyUsage()]);
    $('#tempdisplay').text(thermostat.getTemp());
  }

  function sendPost() {
    var json = JSON.stringify({ temp: thermostat.getTemp(), city: $('#cityselector').find(":selected").text()});
    $.post('http://localhost:9292', json)
  }

  function updateWeather() {
    weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#cityselector').find(":selected").text() + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric';
      $.get(weatherapi, function(data) {
        $('#temperature').text((data.main.temp).toFixed(0) + ' °C');
        $('#weather').text(data.weather[0].main);
        $('#weatherpicture').html('<img src="../assets/weather/' + data.weather[0].main + '.png" height=210>');
        $('#location').text($('#cityselector').find(":selected").text());
      });
  }

  $.get('http://localhost:9292', function(response) {
    var obj = JSON.parse(response)
    thermostat._temperature = obj.temp
    $('#cityselector').val(obj.city)
    updateDisplays();
    // $('#cityselector').text(obj.city);
  });

  updateDisplays();
  updateWeather();

  $('#increasetempbutton').click(function() {
    thermostat.increaseTemp(1);
    updateDisplays();
    sendPost()
  });

  $('#decreasetempbutton').click(function() {
    thermostat.decreaseTemp(1);
    updateDisplays();
    sendPost()
  });

  $('#resettempbutton').click(function() {
    thermostat.resetTemp();
    updateDisplays();
    sendPost()
  });

  $(document).on('click','#powersavetogglebutton', function() {
    thermostat.powerSaveToggle();
    updateDisplays();
    sendPost()
  });

  $('#cityselector').change(function() {
    $('#location').text($('#cityselector').find(":selected").text());
    updateWeather();
    sendPost()
  });
})
