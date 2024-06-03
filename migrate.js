// migrate.js
const fs = require('fs')
const MigrateDashboard = require('./index')

// Get the JSON file name from the command-line arguments
const fileName = process.argv[2]

if (!fileName) {
    console.error('Please provide a JSON file name as a command-line argument.')
    process.exit(1)
}

// Read the JSON file
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err)
        return
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data)

    // Pass the JSON data through the migrate function
    const migratedData = MigrateDashboard.migrate(jsonData)

    // Log the migrated data
    console.log(JSON.stringify(migratedData))
})
