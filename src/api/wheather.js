const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
 
  let url = `${baseUrl}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WHEATHER_API_KEY}`;

return await (await fetch(url)).json();
};


export const fetchextendedforcast = async (city)=>{
let url = `${baseUrl}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WHEATHER_API_KEY}`;

return await (await fetch(url)).json();
}