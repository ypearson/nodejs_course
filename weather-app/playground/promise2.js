
const request = require('request');


var geocodeAddress = (address) =>
{
    return new Promise( (resolve, reject) =>
    {
        request(
        {
            url:'http://www.mapquestapi.com/geocoding/v1/address?key=KZhIbgQ2JP5epCkAr1W55fNRocosU1Xi&location='+encodeURIComponent(address),
            json: true
        },
        (error, response, body) =>
        {
            if(error)
            {
                reject("can't connect to server");
            }
            else if(response.statusCode !== 200)
            {
                reject("error");
            }
            else if(body.results[0].locations.length !== 1)
            {
                reject("Address match not found");
            }
            else
            {
                // console.log(JSON.stringify(body, undefined, 2));
                // console.log(JSON.stringify(error, undefined, 2));
                var latitude = body.results[0].locations[0].latLng.lat;
                var longitude = body.results[0].locations[0].latLng.lng;
                var info = { latitude: latitude,
                             longitude: longitude };
                resolve(info);
            }
        });
    });
};

geocodeAddress("30 norfolk st cambridge")
.then(res =>
{
    console.log(res);
})
.catch(errorMsg =>
{
    console.log(errorMsg);
});
