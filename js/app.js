const Api = `b08f44367e45834a938195180f72249b`;
const searchTemp = () =>{
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Api}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData =(data)=>{
document.getElementById('city').innerText=data.name;
document.getElementById('temp').innerText=data.main.temp;
document.getElementById('tempSky').innerText=data.weather[0].main;
const url =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
document.getElementById('weatherIcon').setAttribute('src',url);
}