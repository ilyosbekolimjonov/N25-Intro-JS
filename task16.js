function task16() {
    let sum = +prompt("Xarid summasini kiriting: ")
    let discount = sum * 0.1

    if (sum > 500000)
        alert(`Chegirma: ${discount} so'm, To'lov: ${sum-discount}`)
    else
        alert(`Chegirma yo'q, To'lov: ${sum} so'm`)
}

task16()