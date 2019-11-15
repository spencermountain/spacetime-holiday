// const spacetimeHoliday = require('./builds/spacetime-holiday.js')
const spacetimeHoliday = require('./src')

// let s = spacetimeHoliday('fall equinox', 2030)
// console.log(s.format('nice-year'))
// spacetimeHoliday('groundhog day').log()

console.log(spacetimeHoliday('groundhog day').format('day'))

// console.log(spacetimeHoliday('fall equinox', 2030).format('nice-year'))
