function task14() {
    let number1 = +prompt("1-son kiriting: ")
    let number2 = +prompt("2-son kiriting: ")

    if(number1 == number2)
        alert("Ikkala son teng.")
    else if(number1 > number2)
        alert(`${number1} katta ${number2} dan.`)
    else
        alert(`${number2} katta ${number1} dan.`)
}

task14()