// List of const 

const buttonSearch = document.querySelector("#search");
const apiEntry = document.querySelector("#api-key");
const addressEntry = document.querySelector("#address");

buttonSearch.addEventListener("click", searchNorad);

function searchNorad() {

    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+addressEntry+".json?access_token="+apiEntry"
    .then(function(bootdata) {
        return bootdata.json();
    })
    .then (function(data){
console.log(data, "data")
    })
}
