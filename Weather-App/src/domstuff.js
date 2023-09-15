import { getCurrentWeatherFromApi, checkIfTheLocationValid, getForecastFromApi, getDailyForecastFromApi} from "./apiFunctions";
import { getDayName, getUserCurrenLocation } from "./utilities";

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
            renderTodayDataToDom(data, searchFieldValue);
            displayDataInF(searchFieldValue);
        }
        searchField.value = "";
    });
}


(() => {
    document.querySelector(".display").addEventListener("click", () => {
        if(document.querySelector(".display").classList.contains("F")) {
            document.querySelector(".display").innerText = "Display °C";
            displayDataInF();
        } else if (document.querySelector(".display").classList.contains("C")) {
            document.querySelector(".display").innerText = "Display °F";
            displayDataInC()
        }
    document.querySelector(".display").classList.toggle("F");
    document.querySelector(".display").classList.toggle("C");
})
})();

(async () => {
    let location = await getUserCurrenLocation();
    let data = await getCurrentWeatherFromApi(location);
    renderTodayDataToDom(data, location);
    displayDataInF(location);
})();


async function renderTodayDataToDom(data, location) {
    let forecast = await getForecastFromApi(location);
    let dailyForecast = await getDailyForecastFromApi(location);
    document.querySelector(".description").innerText = data.current.condition.text;
    document.querySelector(".Humidity").innerText = `${data.current.humidity} %`;
    document.querySelector(".wind-speed").innerText = `${data.current.wind_mph} mph`;
    document.querySelector(".chance-of-rain").innerText = `${forecast.forecast.forecastday[0].day.daily_chance_of_rain} %`;
    document.querySelector(".location").innerText = data.location.name;
    document.querySelector(".date").innerText = data.location.localtime;

    document.querySelectorAll(".day-data").forEach((element, index) => {
        element.querySelector(".day").innerText = getDayName(new Date(dailyForecast.forecast.forecastday[index].date));
    })
}

async function displayDataInF(location = "") {
    if(!location) {
        location = document.querySelector(".location").innerText;
    }
    let data = await getCurrentWeatherFromApi(location);
    let dailyForecast = await getDailyForecastFromApi(location);
    document.querySelector(".dgree").innerText = `${data.current.temp_f} °F`;
    document.querySelector(".feels-like").innerText = `${data.current.feelslike_f} °F`;
    document.querySelectorAll(".day-data").forEach((element, index) => {
        element.querySelector("h2").innerText = `${dailyForecast.forecast.forecastday[index].day.maxtemp_f} °F`;
        element.querySelector("h4").innerText = `${dailyForecast.forecast.forecastday[index].day.mintemp_f} °F`;
    })
}

async function displayDataInC() {
    let location = document.querySelector(".location").innerText;
    let data = await getCurrentWeatherFromApi(location);
    let dailyForecast = await getDailyForecastFromApi(location);
    document.querySelector(".dgree").innerText = `${data.current.temp_c} °C`;
    document.querySelector(".feels-like").innerText = `${data.current.feelslike_c} °C`;
    document.querySelectorAll(".day-data").forEach((element, index) => {
        element.querySelector("h2").innerText = `${dailyForecast.forecast.forecastday[index].day.maxtemp_c} °C`;
        element.querySelector("h4").innerText = `${dailyForecast.forecast.forecastday[index].day.mintemp_c} °C`;
    })
}

