function task6(){
    let side = +prompt("Kvadrat tomonini kiriting: ")
    
    if(side < 0)
        alert("Tomon 0 dan kichik bo'lishi mumkin emas!")
    else
        alert(`Perimetri: ${4 * side} sm, Yuzi: ${side * 2} sm\u00B2`)
}

task6()