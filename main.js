// List of const 

const buttonSearch = document.querySelector("#search");




buttonSearch.addEventListener("click", searchNorad);

function searchNorad() {
    const apiEntry = document.querySelector("#api-key");
    const addressEntry = document.querySelector('input[type="text"]');
    const addressEntryValue = addressEntry.value;
    const apiEntryValue = apiEntry.value;
  console.log(addressEntryValue)
  console.log(apiEntryValue)

    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+addressEntryValue+".json?access_token="+apiEntryValue)
    .then(function(bootdata) {
        return bootdata.json();
    })
    .then (function(data){
console.log(data, "data")
console.log(addressEntry, "address");
console.log(apiEntry,"key")

    })
}
