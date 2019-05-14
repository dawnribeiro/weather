const main = () => {}
// when the button is clicked get api
const getWeatherFromApi = () => {
    // take input to api
    let currentValue = document.querySelector('.city-zip').value
    console.log(currentValue)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + currentValue + '&appid=b986bcf3141fece7fea26687405f1183')
      .then(resp => {
        return resp.json()
      })
      .then(weather => {
        console.log({
          weather
        })
        const kelvinConvert = Math.ceil(weather.main.temp * (9 / 5) - 456.67)
        document.querySelector('.temp').textContent = kelvinConvert
        document.querySelector('.humidity').textContent = weather.main.humidity
        document.querySelector('.clouds').textContent = weather.weather[0].description
        document.querySelector('.city').textContent = weather.name
      })



    // get results
    document.querySelector('.search').addEventListener('click', getWeatherFromApi)
    document.addEventListener('DOMContentLoaded', main)