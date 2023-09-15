export function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
}

export async function getUserCurrenLocation() {
    let request = await fetch("https://ipapi.co/json/", {mode: 'cors', referrerPolicy: "unsafe_url" });
    let location = await request.json();
    return location.city;
}
