function task10() {
    let speedNet = +prompt("Internet tezligini kiriting (Mbps): ")

    if(speedNet < 0) 
        alert("Tezlik noto'g'ri kiritildi!")
    else if(speedNet > 99)
        alert("Internet juda tez")
    else if(speedNet > 49)
        alert("Internet o'rtacha")
    else
        alert("Internet sekin")
}

task10()