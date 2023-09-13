// api key bb5470923bb74a46afe52441231209


export async function getCurrentWeatherFromApi(location) {
    let myrequest = await fetch(`http://api.weatherapi.com/v1/current.json?key=bb5470923bb74a46afe52441231209&q=${location}`);
    let data = await myrequest.json();
    return data;
}


export async function checkIfTheLocationValid(location) {
    let data = await getCurrentWeatherFromApi(location);
    if(data.error) {
        return false;
    }
    return true;
}