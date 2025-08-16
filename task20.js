function task20() {
    let num1 = +prompt("1-son: ")
    let num2 = +prompt("2-son: ")
    let num3 = +prompt("3-son: ")

    let max = num1

    if(num1 < num2 && num3 < num2) max = num2
    else if(max < num3) max = num3
    

    alert(`Eng katta son: ${max}`)
}

task20()