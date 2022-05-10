let nameFirst = document.querySelector("#myName") 
    let userName = prompt("Lütfen adınızı girin.")
    userName.toUpperCase();
    nameFirst.innerHTML = `${userName}`

function showTime(){
    let today = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let todayName = today.getDay()
    let currentTime = document.querySelector("#myClock")
    currentTime.innerHTML = `${time} ${days[todayName]}`
    
    }
    showTime();
    






