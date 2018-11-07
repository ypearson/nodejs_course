const request = require('request');

// encodeURIComponent("30 Norfolk st Cambridge MA");
// decodeURIComponent("30%20Norfolk%20st%20Cambridge%20MA");

var geocodeAddress = (address, callback) =>
    {
        request({
        url:'http://www.mapquestapi.com/geocoding/v1/address?key=KZhIbgQ2JP5epCkAr1W55fNRocosU1Xi&location='+encodeURIComponent(address),
        json: true
        },(error, response, body) =>
        {
            if(error)
            {
                callback("can't connect to server");
            }
            else if(response.statusCode !== 200)
            {
                callback("error");
            }
            else if(body.results[0].locations.length !== 1)
            {
                callback("Address match not found");
            }
            else
            {
                // console.log(JSON.stringify(body, undefined, 2));
                // console.log(JSON.stringify(error, undefined, 2));
                var latitude = body.results[0].locations[0].latLng.lat;
                var longitude = body.results[0].locations[0].latLng.lng;
                var info = { latitude: latitude,
                             longitude: longitude };
                callback(undefined, info);
            }
        });
    };

module.exports =
{
    geocodeAddress,
};


// https://api.darksky.net/forecast/76baf2a35ccfa62c7a56edfb0fa19a09/42.364991,-71.101513