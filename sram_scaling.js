const fs = require('fs');
const csv = require('csv-parser');

// Path to your CSV file
const csvFilePath = 'datasets/SRAM_scaling.csv';

// Function to parse the CSV file and turn it into a JSON object
function parseCSV() {
    const jsonArray = [];

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
            const parsedData = {
                name: "SRAM",
                year: parseInt(data.Year),
                cell_area: parseFloat(data['SRAM cell area (um^2)']), // (um^2)
                density: parseFloat(data['SRAM density (bit/mm^2)']), // (bit/mm^2)
                cgp: parseFloat(data.CGP),
                m1_pitch: parseFloat(data['M1 Pitch (um)']), // um 
                source: data.References,
                vendor: data.Note
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
