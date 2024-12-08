const fs = require("fs");
const path = require("path");

// File path (update this to the path of your file)
const filePath = path.resolve(__dirname, "data.txt");

// Read the file
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

   
    const rows = data.split("\n").map(row => row.trimEnd());

    const column1 = [];
    const column2 = [];

    rows.forEach(row => {
        const columns = row.split("   "); 
        if (columns.length >= 2) { 
            column1.push(Number(columns[0].trim()));
            column2.push(Number(columns[1].trim()));
        }
    });

    column1.sort((a, b) => a - b)
    column2.sort((a, b) => a - b)

    let result = 0;
    column1.forEach((value, index) => {
        const compareValue = column2[index]

        if (value > compareValue){
            result += value - compareValue;
        }
        if(value < compareValue) {
            result += compareValue - value
        }
    });

    // Output the results
    console.log(result);
});