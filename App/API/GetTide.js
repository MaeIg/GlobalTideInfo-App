const axios = require('axios');
import KEYS from '../constants/API_KEYS';

const GEO_KEY = KEYS.GEO_KEY;
const WTIDE_KEY = KEYS.WTIDE_KEY;

async function getTide (location) {
    let coords = await requestGeoAPI(location);
    
    if (coords == null || coords == "ZERO_RESULTS") {
        throw new Error("CITY_ERROR");
    }

    let data = await requestTideAPI(coords);

    if (data == null) {
        throw new Error("TIDE_ERROR");
    }

    return  {
        station: data.station,
        lat: data.responseLat,
        lon: data.responseLon,
        extremes: parseExtremes(data.extremes)
    };
}


// Useful functions

function parseLocation (location) {
    // Ex : 'La Rochelle' => 'la+rochelle'
    let words = location.toLowerCase().split(' ');
    return words.join('+');
}

function formatNumberDate (n) {
    if (n < 10) {
        return ("0" + n);
    }
    return n;
}

function parseExtremes (extremes) {
    let tide = [];
    let saveDay = -1;
    let j = -1;

    for (let i = 0 ; i < extremes.length ; i++) {
        let date = new Date(extremes[i].date);
        let day = date.getDay();

        if (day == saveDay) {
            tide[j].push({
                date: extremes[i].date,
                height: extremes[i].height,
                type: extremes[i].type
            });
        } else {
            saveDay = day;
            j++;
            tide.push([]);
            tide[j].push({
                date: extremes[i].date,
                height: extremes[i].height,
                type: extremes[i].type
            });
        }
    }

    return tide;
}


// API functions

async function requestGeoAPI (location) {
    let lat, lon = 0;

    try {
        let request = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + parseLocation(location) + '&key=' + GEO_KEY;
        console.log("[API GET REQUEST] : " + request);
        const resp = await axios.get(request);
        
        if (resp.data.status == "ZERO_RESULTS") {
            console.log("[API WARNING] : ZERO_RESULTS");
            return "ZERO_RESULTS";
        }

    	lat = resp.data.results[0].geometry.location.lat;
    	lon = resp.data.results[0].geometry.location.lng;
        //console.log("lat : " + lat);
        //console.log("lon : " + lon);

        return {lat: lat, lon: lon};
    } catch (e) {
        console.log(`Error when call geo API : ${e}`);
        return null;
    }
}

async function requestTideAPI (coords) {
    const dateStart = new Date(); // date of the day

    try {
        let request = `https://www.worldtides.info/api/v2?extremes&lat=${coords.lat}&lon=${coords.lon}&date=${dateStart.getFullYear()}-${formatNumberDate(dateStart.getMonth() + 1)}-${formatNumberDate(dateStart.getDate())}&days=7&datum=CD&key=${WTIDE_KEY}`;
        console.log("[API GET REQUEST] : " + request);
        const ret = await axios.get(request);
        
    	console.log("[REQUEST STATUS] : " + ret.data.status);
    	//console.log("req lat : " + ret.data.requestLat);
        //console.log("req lon : " + ret.data.requestLon);

        if (ret.data.status != 200) {
            return null;
        }

        return ret.data;
    } catch (e) {
        console.log(`Error when call tide API : ${e}`);
        return null;
    }
}

exports.getTide = getTide;

