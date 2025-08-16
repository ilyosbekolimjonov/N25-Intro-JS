 function task15() {
    let text = prompt("Matn kiriting: ")

    if (text === null || text === ""){
        alert("Matn kiritmadingiz.");
        return;
    }
    
    alert(`Matn uzunligi: ${text.length} ta belgi`)
}

task15()