// List of const 

const buttonSearch = document.querySelector("#search");




buttonSearch.addEventListener("click", searchNorad);
//Function to convert text inputs from API Key and address field to values.
function searchNorad() {
    const apiEntry = document.querySelector("#api-key");
    const addressEntry = document.querySelector('input[type="text"]');
    const addressEntryValue = addressEntry.value;
    const apiEntryValue = apiEntry.value;

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


            //==============================
            async function satData() {
                //Extract satelite information from mapbox
                const satExtract = await fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + addressEntryValue + ".json?access_token=" + apiEntryValue);
                const satRequired = await satExtract.json();
                console.log(satRequired)
                console.log(satExtract)
                
                const satInfo =  satRequired.features;
console.log(satRequired.features)
                if (satInfo) {
                    for (const featureID of satRequired.features){
                        await satData(satRequired.features, featureID, 5)
                    }
                }
            }satData()
        })








}
