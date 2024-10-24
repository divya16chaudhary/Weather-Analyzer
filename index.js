// let city = document.getElementById("city");
// let img= document.getElementById("image");
// let digree = document.getElementById("deeg");
// let type = document.getElementById("type");
// let input = document.getElementById("inp");
// let api_key = "575c9ccfca46c8060ed29c026b21bf8d";
// const data= async function(search){
//     let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`);
//     console.log(getdata);
//     let jsondata = await getdata.json();
//     console.log(jsondata);
//     console.log(jsondata.name);

//     city.innerHTML = jsondata.name;
//     type.innerHTML = jsondata.weather[0].main;
//     digree.innerHTML = Math.floor(jsondata.main.temp)+" °C";
// }
//  function myfun(){
//     search = input.value;
//     data (search);
//  }
// let city = document.getElementById("city");
// let img = document.getElementById("image");
// let degree = document.getElementById("deeg");
// let type = document.getElementById("type");
// let input = document.getElementById("inp");
// let api_key = "575c9ccfca46c8060ed29c026b21bf8d";

// const fetchData = async function(search) {
//     try {
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`);
//         if (!response.ok) {
//             throw new Error('Weather data not available');
//         }
//         let jsonData = await response.json();
//         console.log(jsonData);

//         city.innerHTML = jsonData.name;
//         type.innerHTML = jsonData.weather[0].main;
//         degree.innerHTML = Math.round(jsonData.main.temp) + " °C";
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         alert('Failed to fetch weather data. Please try again later.');
//     }
// }

// function myfun() {
//     let search = input.value.trim();
//     if (search === "") {
//         alert("Please enter a city name");
//         return;
//     }
//     fetchData(search);
// }
let city = document.getElementById("city");
let img = document.getElementById("image");
let degree = document.getElementById("deeg");
let type = document.getElementById("type");
let input = document.getElementById("inp");
let api_key = "575c9ccfca46c8060ed29c026b21bf8d";

const fetchData = async function(search) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        let jsonData = await response.json();
        console.log(jsonData);

        city.innerHTML = jsonData.name;
        type.innerHTML = jsonData.weather[0].main;
        degree.innerHTML = Math.round(jsonData.main.temp) + " °C";

        // Update the weather icon
        let iconCode = jsonData.weather[0].icon;
        img.src = `http://openweathermap.org/img/wn/${iconCode}.png`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
}

function myfun() {
    let search = input.value.trim();
    if (search === "") {
        alert("Please enter a city name");
        return;
    }
    fetchData(search);
}
