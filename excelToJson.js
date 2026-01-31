const xlsx = require('xlsx');
const fs = require('fs');

// Load Excel file
const workbook = xlsx.readFile('ITPM_Assignment 01 Test cases.xlsx');

// Get first sheet
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert to JSON
const jsonData = xlsx.utils.sheet_to_json(sheet);

// Save JSON
fs.writeFileSync('data/testCases.json', JSON.stringify(jsonData, null, 2));

console.log('✅ Excel converted to JSON successfully');