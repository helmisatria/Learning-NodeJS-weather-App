/* jshint esversion:6 */

const request = require('request');

var geocodeAddress = (geocode) => {
    var encodedAddress = encodeURIComponent(geocode);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,    
        json: true
    }, (err, res, body) => {
        if (err){
            console.log('Cannot connect with google server');
        }
        else if (body.status !== 'OK'){
            console.log('Address not found!');
        } else {
            // console.log(JSON.stringify(body, undefined, 2));
            console.log(`Address : ${body.results[0].formatted_address}`);
            console.log(`Location :`);
            console.log(`  Lat : ${body.results[0].geometry.location.lat}`);
            console.log(`  Lng : ${body.results[0].geometry.location.lng}`);    
        }
    });
};

module.exports = {
    geocodeAddress
};