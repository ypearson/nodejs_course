const yargs   = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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


geocode.geocodeAddress(argv.address, (error, geocodeResult) =>
    {
        if(error)
        {
            // console.log(error);
        }
        else
        {
            // console.log(JSON.stringify(results, undefined, 2));
            weather.getWeather(geocodeResult, (error, weatherResult) =>
            {
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    console.log(`The current temperature is ${weatherResult.temperature}\u00B0F, but it feels like ${weatherResult.apparentTemperature}\u00B0F`);
                }
            });
        }
    });

