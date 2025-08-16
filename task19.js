function task19() {
    let value = prompt("Biror qiymat kiriting: ")

    if (value === null) {
        alert("Hech narsa kiritilmadi yoki bekor qildingiz.");
        return;
    }

    if(isNaN(value))
        alert("Kiritilgan qiymat matn.")
    else
        alert("Kiritilgan qiymat son.")
}

task19()