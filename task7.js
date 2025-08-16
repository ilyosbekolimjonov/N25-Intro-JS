function task7(){
    let side = +prompt("Kub tomonini kiriting: ")
    
    if(side < 0)
        alert("Tomon 0 dan kichik bo'lishi mumkin emas!")
    else
        alert(`Hajmi: ${side ** 3} sm\u00B3`)
}

task7()