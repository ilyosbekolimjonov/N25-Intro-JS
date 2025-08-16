function task5(){
    let ball = +prompt("Ball kiriting: ")

    if(ball < 0 || ball > 100) 
        alert("Ball noto'g'ri kiritildi!")
    else if(ball > 89)
        alert("A")
    else if(ball > 79)
        alert("B")
    else if(ball > 69)
        alert("C")
    else if(ball > 59)
        alert("D")
    else
        alert("F")
}

task5()