// import the data from data.js
const tableData = data;

// Reference the HTML table suing d3
var tbody = d3.select("tbody");

function buildtable() {
    // Clear out data from table
    tbody.html("");

    // Loop through each object in the data
    // abd append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });




    
}