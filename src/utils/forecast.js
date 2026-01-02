const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=a9c40262124c10c2a08e78a0490c3ebd&query='
        + lat + ',' + long + '&units=f';
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Cant find that location!', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0]
                + '. It is currently ' + body.current.temperature
                + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast;