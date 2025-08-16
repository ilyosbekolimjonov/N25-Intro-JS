function task9(){
    let temperature = +prompt("Havo namiligini kiriting (%): ")

    if(temperature < 0 || temperature > 100) 
        alert("Namlik noto'g'ri kiritildi!")
    else if(temperature > 59)
        alert("Havo nam")
    else if(temperature > 29)
        alert("Havo qulay")
    else
        alert("Havo juda quruq!")
}

task9()