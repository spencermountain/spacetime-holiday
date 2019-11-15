// const spacetimeHoliday = require('./builds/spacetime-holiday.js')
const spacetimeHoliday = require('./src')

let s = spacetimeHoliday('ramadan', 2019)
console.log(s.format('nice-year'))
