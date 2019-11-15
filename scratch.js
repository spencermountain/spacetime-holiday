// const spacetimeHoliday = require('./builds/spacetime-holiday.js')
const spacetimeHoliday = require('./src')

let s = spacetimeHoliday('easter sunday', 2020)
console.log(s.format('nice-year'))
// spacetimeHoliday('groundhog day').log()
