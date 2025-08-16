function task3(){
    let age = +prompt("Yoshingiz: ")

    if(age <= 0) 
        alert("Yosh bunday bo'lishi mumkin emas!")
    else if(age < 18) 
        alert("Siz voyaga yetmagansiz.")
    else 
        alert("Siz voyaga yetgansiz.")
}

task3()