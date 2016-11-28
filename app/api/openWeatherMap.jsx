var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8318b8ac8c60726204b59aa79a28fd77&units=imperial';
//8318b8ac8c60726204b59aa79a28fd77

module.exports = {
  getTemp: function (location) {
    //template strings
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error (res.data.message)
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error("Cannot fetch weather for invalid city");
    });
  }
}
