// const spacetimeHoliday = require('./src')

// const spacetime = require('spacetime')
const spacetimeHoliday = require('./builds/spacetime-holiday.js')

const s = spacetimeHoliday('christmas', 2020)
console.log(s.format('iso-short'))

// spacetimeHoliday('groundhog day').log()
