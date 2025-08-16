function task17() {
    let num1 = +prompt("1-son: ")
    let num2 = +prompt("2-son: ")
    let num3 = +prompt("3-son: ")

    alert(`O'rtacha: ${(num1 + num2 + num3) / 3}`)
}


// kiritilgan sonlar ichidan o'rtachasini topish
// function task17() {
//     let num1 = +prompt("1-son: ")
//     let num2 = +prompt("2-son: ")
//     let num3 = +prompt("3-son: ")

//     let min = num1
//     let max = num1

//     if(num2 < num1 && num2 < num3)
//         min = num2
//         if(num1 < num3)
//             max = num3
//     else if(num3 < min)
//         min = num3
//         if(max < num2)
//             max = num2
    
//     alert(`O'rtacha: ${(num1 + num2 + num3) - max - min}`)
// }


task17()