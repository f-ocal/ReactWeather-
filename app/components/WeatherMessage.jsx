var React = require('react');

var WeatherMessage = ({temp, location}) => {
//ES6 Destructing
  return (
    <h4 className="text-center"> It is {temp} degrees in {location}.</h4>
  )
}


module.exports = WeatherMessage;
