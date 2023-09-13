import { getCurrentWeatherFromApi, checkIfTheLocationValid } from "./apiFunctions";

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
            changeTempDisplay();
            renderTodayDataToDom(data);
        }

        searchField.value = "";
    });
}


async function renderTodayDataToDom(data) {
    document.querySelector(".description").innerText = data.current.condition.text;
    document.querySelector(".location").innerText = data.location.name;
}


export function changeTempDisplay() {
    document.querySelector(".display").addEventListener("click", () => {
        document.querySelector(".display").classList.toggle("F");
        document.querySelector(".display").classList.toggle("C");
        if(document.querySelector(".display").classList.contains("F")) {
            document.querySelector(".display").innerText = "Display °C";

        } else if (document.querySelector(".display").classList.contains("C")) {
            document.querySelector(".display").innerText = "Display °F";

        }
    })
}