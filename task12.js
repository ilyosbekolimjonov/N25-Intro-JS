function task12() {
    let age = +prompt("Yoshingizni kiriting:")
    let type = prompt("Transport turi (masalan: yengil, yuk ...): ")

    if(age <= 0)
        alert("Yoshni xato kiritdingiz!")
    else if(age < 18)
        alert("Sizga avtomobil boshqarish mumkin emas")
    else
        alert(`Siz ${type} avtomobil turini boshqarishingiz mumkin.`)
}

task12()