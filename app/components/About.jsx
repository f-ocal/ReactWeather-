var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center"> About </h1>
      <p> This is a weather application built on React. Submit a location and it will return the current temperature in that city. </p>
      <p> Here are some of the tools I used:
      </p>
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Description </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href='https://facebook.github.io/react'>React </a></td>
            <td>Frontend Javascript Framework</td>
          </tr>
          <tr>
            <td><a href='https://openweathermap.org'>Open Weather Map </a></td>
            <td> API to search for weather data by city name</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

module.exports = About;
