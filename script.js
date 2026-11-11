
function createTable() {
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");


    if (rn === null || cn === null ||
        rn.trim() === "" || cn.trim() === "") {
        return;
    }

    rn = Number(rn);
    cn = Number(cn);

   
    if (!Number.isInteger(rn) || !Number.isInteger(cn)) {
        return;
    }

   
    if (rn <= 0 || cn <= 0) {
        alert("Rows and columns must be greater than 0");
        return;
    }

    let table = document.getElementById("myTable");

   
    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
