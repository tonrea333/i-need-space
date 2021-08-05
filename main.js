// List of const 

const buttonSearch = document.querySelector("#search");




buttonSearch.addEventListener("click", searchNorad);
//Function to convert text inputs from API Key and address field to values.
function searchNorad() {
    const apiEntry = document.querySelector("#api-key");
    const addressEntry = document.querySelector('input[type="text"]');
    const addressEntryValue = addressEntry.value;
    const apiEntryValue = apiEntry.value;

if(addressEntryValue === String," ",String){
   let  to =addressEntryValue + "%" + String;
}


    //Console logs to evaluate and confirm user inputs
    console.log(addressEntryValue)
    console.log(apiEntryValue)
    //Value fields API Key and address concatenated with mapbox url
    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + addressEntryValue + ".json?access_token=" + apiEntryValue)
        .then(function (bootdata) {
            return bootdata.json();
        })
        .then(function (data) {
            //Need to extract required data from information displayed in consolelog of data
            console.log(data, "data")
            console.log(data.features)
            const x = data.features
            console.log(addressEntryValue)
            console.log(apiEntryValue)
        })
    //========================================================================ASYNC Method below==========
    
    
    async function satData() {
        //Extract satelite information from mapbox
        const satExtract = await fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + addressEntryValue + ".json?access_token=" + apiEntryValue);
        const satRequired = await satExtract.json();
        console.log(satRequired)
        console.log(satExtract)

        //Const need to for longitude and latitude; addtionally change satellite value to const.

        const longPoint = satRequired.features[0].center[0];
        const latPoint = satRequired.features[0].center[1]
        const noradInput = document.querySelector("#norad")
        const noradInputValue = noradInput.value;

        //Fetch for satellite api

        fetch("https://satellites.fly.dev/passes/" + noradInputValue + "?lat=" + latPoint + "&lon=" + longPoint + "&limit=1&days=15&visible_only=true")
            .then(function (bootdata) {
                return bootdata.json();
            })
            .then(function (data) {
                console.log(data, "norad data")

console.log(data[0].culmination.utc_datetime)

//const to place converted data into to readable html
const outputRiseUtc = document.querySelector("#riseUTC");
const outputCulminateUtc = document.querySelector("#culminateUTC");
const outputSetUtc = document.querySelector("#setUTC");


//Const to convert data rise culmination and set UTC

const culminationData = data[0].culmination.utc_datetime;
const riseData = data[0].rise.utc_datetime;
const setData = data[0].set.utc_datetime;
console.log(riseData, "rise")
console.log(culminationData, "culmin")
console.log(setData, "set")




//Connecting html locations with JS outputs

outputRiseUtc.innerHTML =  riseData
outputCulminateUtc.innerHTML =  culminationData
outputSetUtc.innerHTML =  setData
console.log(outputRiseUtc.innerHTML )
console.log(riseData.toString())


            })
        console.log(latPoint)
        console.log(longPoint)
        console.log(noradInputValue)
//Const for the UTC outputs






        //Const for longatitude and Latitude



    } satData()

//Function to transition user from input screen to output.
function searchNorad(){
    location.href ="satindex.html"
}
}


