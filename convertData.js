const csvFile = 'data/trail_updates.csv'
const csv = require('csvtojson')
const fs = require('fs')

csv()
    .fromFile(csvFile)
    .then(json => {
        json.map(d => {
            let newLoc = d.location.split(', ').map(l => {
                return parseFloat(l).toFixed(3)
            })
            d.location = newLoc.reverse()
            return d
        })

        fs.writeFileSync('src/trailUpdates.js',
        `export default ${JSON.stringify({updates:json})}`
        )
    })