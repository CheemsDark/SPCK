function DongHo(){
    var gio = document.getElementById("gio")
    var phut = document.getElementById("phut")
    
    let gio_hien_tai = new Date().getHours()
    var phut_hien_tai = new Date().getMinutes()

    gio.innerHTML = gio_hien_tai
    if(phut_hien_tai<10) phut.innerHTML = "0" , phut.innerHTML+=phut_hien_tai;
    else if(phut_hien_tai>10) phut.innerHTML = phut_hien_tai

    var giay_hien_tai = new Date().getSeconds()
    if(giay_hien_tai%4==0){
        document.getElementById("time").style.borderTop = "#e6d3cd 3px solid"
        document.getElementById("time").style.borderRight = "none"
        document.getElementById("time").style.borderBottom = "none"
        document.getElementById("time").style.borderLeft = "none"
    }
    else if(giay_hien_tai%4==1){
        document.getElementById("time").style.borderTop = "none"
        document.getElementById("time").style.borderRight = "#e6d3cd 3px solid"
        document.getElementById("time").style.borderBottom = "none"
        document.getElementById("time").style.borderLeft = "none"    }
    else if(giay_hien_tai%4==2){
        document.getElementById("time").style.borderTop = "none"
        document.getElementById("time").style.borderRight = "none"
        document.getElementById("time").style.borderBottom = "#e6d3cd 3px solid"
        document.getElementById("time").style.borderLeft = "none"    }
    else if(giay_hien_tai%4==3){
        document.getElementById("time").style.borderTop = "none"
        document.getElementById("time").style.borderRight = "none"
        document.getElementById("time").style.borderBottom = "none"
        document.getElementById("time").style.borderLeft = "#e6d3cd 3px solid"    }

    if(giay_hien_tai==15)
    {
        document.getElementById("time").style.background = "linear-gradient(to right, #00223E, #3a7193);"
    }else if(giay_hien_tai==30)
    {
        document.getElementById("time").style.background = "linear-gradient(to right, #003e20, #60acdc)"
    }else if(giay_hien_tai==45)
    {
        document.getElementById("time").style.background = "linear-gradient(to right, #32afad, #b3dc60)"
    }else if(giay_hien_tai==0)
    {
        document.getElementById("time").style.background = "linear-gradient(to right, #3260af, #dca060)"
    }
}

var Dem_gio = setInterval(DongHo , 1000);

const API_KEY = '1723b78928eb5a947457be2faccc5c5f';
const DEFAULT_VALUE = '__ __';
const searchInput = document.getElementById("search-input");
let cityName = document.createElement("h2")
let countryName = document.createElement("h3")
let humidity = document.createElement("h4")
let weathermain = document.createElement("h4")
let description1 = document.createElement("h4")
let windSpeed = document.createElement("h4")
let tempe = document.createElement("h1")

// WEATHER 
let weather_infor = document.getElementById("weather_infor")
let name_city = document.createElement("h2"); 
name_city.classList.add("name_city")
name_city.innerHTML = DEFAULT_VALUE
let country_city = document.createElement("h4")
country_city.classList.add("country_city")
country_city.innerHTML += "<p>_ _</p>"

let degree = document.createElement("div")
degree.classList.add("degree")
degree.innerHTML = "<h1>__ __</h1>"
degree.innerHTML += "<p>o</p>"

let infor_city = document.createElement("div")
infor_city.classList.add("infor_city")

let status_wea = document.createElement("div")
status_wea.classList.add("status")
status_wea.innerHTML += `<h2 style="color:rgba(213, 225, 81, 0.896)">Status</h3>`
status_wea.innerHTML += `<p>_ _</p>`

let description = document.createElement("div")
description.classList.add("description")
description.innerHTML += `<h2 style="color:rgba(213, 225, 81, 0.896)">Descrip</h3>`
description.innerHTML += `<p>_ _</p>`

let wind_speed = document.createElement("div")
wind_speed.classList.add("wind_speed")
wind_speed.innerHTML += `<h2 style="color:rgba(213, 225, 81, 0.896)">Wind</h3>`
let km_h = document.createElement("div")
km_h.classList.add("km_h")
km_h.innerHTML+=`<p>_ _</p>`
km_h.innerHTML+= "<p>km/h</p>"
wind_speed.appendChild(km_h)

let humi = document.createElement("div")
humi.classList.add("humi")
humi.innerHTML += `<h2 style="color:rgba(213, 225, 81, 0.896)">Humidity</h3>`
let percent = document.createElement("div")
percent.classList.add("percent")
percent.innerHTML+=`<p>_ _</p>`
percent.innerHTML+= "<p>%</p>"
humi.appendChild(percent)


infor_city.appendChild(status_wea)
infor_city.appendChild(description)
infor_city.appendChild(wind_speed)
infor_city.appendChild(humi)

weather_infor.appendChild(name_city)
weather_infor.appendChild(country_city)
weather_infor.appendChild(degree)
weather_infor.appendChild(infor_city)

// WEATHER 

searchInput.addEventListener("change", (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
    .then(res => res.json())
    .then( (data) => {
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            countryName.innerHTML = data.sys.country || DEFAULT_VALUE;
            weathermain.innerHTML = data.weather[0].main || DEFAULT_VALUE;
            description1.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = data.wind.speed || DEFAULT_VALUE; 
            tempe.innerHTML = Math.round(data.main.temp) - 273 || DEFAULT_VALUE;
        }).catch(err => err.message);
        name_city.innerHTML = "" ; name_city.appendChild(cityName);
        country_city.innerHTML = "" ; country_city.appendChild(countryName);
        degree.innerHTML = "" ; degree.appendChild(tempe) ; let donvi = document.createElement("p") ; donvi.innerHTML = "o";degree.appendChild(donvi)
        status_wea.innerHTML = `<h2 style="color:rgba(213, 225, 81, 0.896)">Status</h3>` ; status_wea.appendChild(weathermain);
        description.innerHTML = `<h2 style="color:rgba(213, 225, 81, 0.896)">Descrip</h3>`; description.appendChild(description1);
        km_h.innerHTML = ""; km_h.appendChild(windSpeed) ; let donvi1 = document.createElement("p") ; donvi1.classList.add("donvi1"); donvi1.innerHTML = "km/h"; km_h.appendChild(donvi1);
        percent.innerHTML = ""; percent.appendChild(humidity) ; let donvi2 = document.createElement("p") ; donvi2.classList.add("donvi2"); donvi2.innerHTML = "%"; percent.appendChild(donvi2);

    })

function recently()
{
    let recently_play = document.getElementById("recently_play")
    // recently_play.style.flexDirection = "co"
    let recently_songs = JSON.parse(localStorage.recently_songs)
    recently_play.innerHTML=""
    for( i of recently_songs.data)
    {
        let main = document.createElement("div")
        main.classList.add("card4")
        main.style.display = "flex"
        main.style.flexDirection = "column"
        main.style.height = "335px"
        main.style.width = "250px"
        main.style.paddingTop = "10px"
        main.style.alignItems = "center"
    
        let ima = document.createElement("img")
        ima.setAttribute("src" , i.image)
        ima.style.height = "220px"
        ima.style.width = "220px"
        ima.style.borderRadius = "70px"
        main.appendChild(ima)

        let title = document.createElement("h3")
        title.innerHTML = i.name
        main.appendChild(title)
        recently_play.appendChild(main)

        let song = document.createElement("div")
        song.classList.add("song_run")
        song.innerHTML = i.iframe
        song.style.color = "white" 
        let frame = i.iframe  
        main.addEventListener('click' , ()=>{
            document.getElementById("iframe_here").innerHTML = frame  
        })
    }
}

recently()


