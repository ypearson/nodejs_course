const request = require('request')

var getWeather = (location, callback) =>
{
    request(
    {
        url:`https://api.darksky.net/forecast/76baf2a35ccfa62c7a56edfb0fa19a09/${location.latitude},${location.longitude}`,
        json: true
    },
        (error, response, body) =>
        {
            if(error)
            {
                callback("can't connect to server");
            }
            else if(response.statusCode == 400)
            {
                callback("bad request");
            }
            else if(response.statusCode == 200)
            {
                var temperature         = body['currently']['temperature'];
                var apparentTemperature = body['currently']['apparentTemperature'];

                var info                = {
                                            temperature:temperature,
                                            apparentTemperature:apparentTemperature
                                          };

                callback(undefined, info);
            }
            else
            {
                console.log("error!")
            }
        }
    );
}

module.exports =
{
    getWeather,
}