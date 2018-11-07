const yargs   = require('yargs');
const axios   = require('axios');

const argv = yargs
    .options(
    {
        a:
        {
            demand:true,
            alias: 'address',
            describe: "address to fetch weather for",
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;


var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = 'http://www.mapquestapi.com/geocoding/v1/address?key=KZhIbgQ2JP5epCkAr1W55fNRocosU1Xi&location='+encodedAddress;

axios.get(geocodeUrl)
.then(response =>
{
    if(response.data.results[0].locations.length !== 1)
    {
        throw new Error("no match found");
    }
    else
    {
        var latitude = response.data.results[0].locations[0].latLng.lat;
        var longitude = response.data.results[0].locations[0].latLng.lng;
        var info = { latitude: latitude,
                     longitude: longitude };
        console.log(info);

        var weatherUrl = `https://api.darksky.net/forecast/76baf2a35ccfa62c7a56edfb0fa19a09/${latitude},${longitude}`;

        return axios.get(weatherUrl);
    }})
.then(response =>
{

    var temperature         = response.data['currently']['temperature'];
    var apparentTemperature = response.data['currently']['apparentTemperature'];
    var info                = {
                                temperature:temperature,
                                apparentTemperature:apparentTemperature
                              };
    console.log(`The current temperature is ${info.temperature}\u00B0F, but it feels like ${info.apparentTemperature}\u00B0F`);
})
.catch((e) =>
{
    if(e.code === 'ENOTFOUND')
    {
        console.log("can't connect to server.")
    }
    else
    {
        console.log(e.message);
    }
});
