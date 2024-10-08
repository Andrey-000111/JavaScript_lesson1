async function fetchWeather() {
    return new Promise((resolve) => {
        setTimeout(
            () => {
                const weather = Math.random() > 0.5 ? "sunny" : "rainy";
                resolve(weather);
            }, Math.random * 1000);
    })
}

async function prepareForDayOut() {
    try {
        const weather = await fetchWeather();
        console.log(`It is ${weather}`); // `` прописать текст
    } catch (error) {
        console.error("Error: ", error);
    }
}


prepareForDayOut();