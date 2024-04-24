const fs = require('fs');
const csv = require('csv-parser');

// Path to your CSV file
const nandData = 'datasets/NAND.csv';

// Function to parse the CSV file and turn it into a JSON object
function parseCSV() {
    const jsonArray = [];

    fs.createReadStream(nandData)
        .pipe(csv())
        .on('data', (data) => {
            // Process each row of the CSV file
            const parsedData = {
                name: "NAND",
                year: parseInt(data.Year),
                capacity: parseFloat(data['Capacity (bits)']),
                chip_area: parseFloat(data['Chip Area (mm^2)']),
                density: parseFloat(data['Density (Mbit/mm^2)']),
                bits_per_cell: parseFloat(data['Bits/cell']),
                source: data.Source
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

//insert it into MongoDB
