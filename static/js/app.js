// import the data from data.js
const tableData = data;

// Reference the HTML table suing d3
var tbody = d3.select("tbody");

function buildTable(data) {
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

function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Adding if statement to check for a filtered date
    // filter the rows to match the entered datetime value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    console.log(date)
    console.log(filteredData)
    // Rebuild the table with the filtered data
    buildTable(filteredData);

}

// Attach an event to listen for the fiorm button click
d3.select("#filter-btn").on("click", handleClick);


// Build table when page loads
buildTable(tableData);