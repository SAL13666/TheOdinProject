import { getCurrentWeatherFromApi, checkIfTheLocationValid, getForecastFromApi } from "./apiFunctions";

export async function searchForLocation() {
    let searchField = document.querySelector(".search input");
    let srearchButton = document.querySelector(".search-button");
    srearchButton.addEventListener("click", async () => {
        let searchFieldValue = searchField.value;
        if(!searchFieldValue) {
            return;
        }
        if(await checkIfTheLocationValid(searchFieldValue)) {
            let data = await getCurrentWeatherFromApi(searchFieldValue);
            console.log(data);
            changeTempDisplay(data);
            renderTodayDataToDom(data, searchFieldValue);
        }
        searchField.value = "";
    });
}



async function renderTodayDataToDom(data, location) {
    let forecast = await getForecastFromApi(location);
    document.querySelector(".description").innerText = data.current.condition.text;
    document.querySelector(".Humidity").innerText = `${data.current.humidity} %`;
    document.querySelector(".wind-speed").innerText = `${data.current.wind_mph} mph`;
    document.querySelector(".chance-of-rain").innerText = `${forecast.forecast.forecastday[0].day.daily_chance_of_rain} %`;
    document.querySelector(".location").innerText = data.location.name;
    document.querySelector(".date").innerText = data.location.localtime;
}


export function changeTempDisplay(data) {
    document.querySelector(".display").addEventListener("click", () => {
        document.querySelector(".display").classList.toggle("F");
        document.querySelector(".display").classList.toggle("C");
        if(document.querySelector(".display").classList.contains("F")) {
            document.querySelector(".display").innerText = "Display °C";
            displayDataInF(data);
        } else if (document.querySelector(".display").classList.contains("C")) {
            document.querySelector(".display").innerText = "Display °F";
            displayDataInC(data)
        }
    })
}


function displayDataInF(data) {
    document.querySelector(".dgree").innerText = `${data.current.temp_f} °F`;
    document.querySelector(".feels-like").innerText = `${data.current.feelslike_f} °F`;
}

function displayDataInC(data) {
    // document.querySelector(".dgree").innerText = `${data.current.temp_c} °C`;
    // document.querySelector(".feels-like").innerText = `${data.current.feelslike_c} °c`;
    console.log(data);
}