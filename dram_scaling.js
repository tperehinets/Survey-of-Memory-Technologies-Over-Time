const fs = require('fs');
const csv = require('csv-parser');

// Path to your CSV file
const nandData = 'datasets/DRAM_scaling.csv';

// Function to parse the CSV file and turn it into a JSON object
function parseCSV() {
    const jsonArray = [];

    fs.createReadStream(nandData)
        .pipe(csv())
        .on('data', (data) => {
            // Process each row of the CSV file
            const parsedData = {
                name: "DRAM",
                capacity: parseInt(data.Year),
                capacity: parseFloat(data['Capacity (bits)']),
                chip_area: parseFloat(data['Chip Area (mm^2)']),
                density: parseFloat(data['Density (Mb/mm^2)']),
                source: data.References
            };
            jsonArray.push(parsedData);
        })
        .on('end', () => {
            // Once all data is read, log the JSON object
            console.log(jsonArray);
        });
}

// Call the function to parse the CSV file
parseCSV();
















