import readline from "readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const apiKey = "fab7c742b86cf6c2335a598403c81f07";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"



const getWeather = async (city) => {
       const URL = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
       try {
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error("city not found. Please check the city name");
        }       
        const weatherData = await response.json();
        console.log("\nWeather Information: ");
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}C`);
        console.log(`Description: ${weatherData.weather[0].description}`);         
       } catch (error) {
        console.log(error);
        
       }

}

const city = await rl.question("Enter a City Name: ");
await getWeather(city);
rl.close();