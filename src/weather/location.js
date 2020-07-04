const request = require("request");

const location = (id, callback) => {
  // const url ="https://openweathermap.org/data/2.5/weather?id=" +id + "&appid=439d4b804bc8187953eb36d2a8c26a02";
  const url =
    "http://api.weatherapi.com/v1/current.json?key=a0b3cce82db143c086564210200107&q=" +
    id;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        cond: response.body.current.condition.text,
        temp: response.body.current.temp_c,
        // lon: response.body.coord.lon,
        city: response.body.location.name,
      });
    }
  });
};

module.exports = location;
