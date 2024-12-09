const fs = require("fs")
const path = require("path")

const filePath = path.resolve(__dirname, "data.txt");

fs.readFile(filePath, "utf8", (err, data) => {
    if(err) {
        console.error("Error reading file:", err);
        return;
    }

    const reports = data.split("\n").map(row => row.trimEnd());

function isReportSafe(report) {
    report.
}

    reports.forEach((report, index) => {
        console.log(report);
    
        
    })
})