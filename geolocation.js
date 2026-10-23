let outputPara = document.getElementById("geolocation");

function getGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showGeo, handleGeoError);
    }else{
        outputPara.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeo(position){
    outputPara.innerHTML =
        "Latitude: " + position.coords.latitude
        + "<br>Longitude: " + position.coords.longitude;
}

function handleGeoError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            outputPara.innerHTML = "Location Request: User denied geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            outputPara.innerHTML = "Location Request: Position information unavailable.";
            break;
        case error.TIMEOUT:
            outputPara.innerHTML = "Location Request: Request timed out.";
            break;
        case error.UNKNOWN_ERROR:
            outputPara.innerHTML = "Location Request: Unknown error.";
            break;
    }
}
