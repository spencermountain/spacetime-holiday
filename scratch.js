// const spacetimeHoliday = require('./builds/spacetime-holiday.js')
const spacetimeHoliday = require('./src')

let s = spacetimeHoliday('easter', 2019)
console.log(s.format('nice-year'))
// spacetimeHoliday('groundhog day').log()
