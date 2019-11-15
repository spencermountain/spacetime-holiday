const spacetime = require('spacetime')
const fixedDates = require('./01-fixedDates')
const nthWeekday = require('./02-nthWeekday')
const easterDates = require('./03-easterDates')
const astroDates = require('./04-astronomical')
const nowYear = spacetime.now().year()

const spacetimeHoliday = function(str, year) {
  year = year || nowYear
  str = str || ''
  str = String(str)
  str = str.trim().toLowerCase()
  str = str.replace(/'s/, 's') // 'mother's day'

  let normal = str.replace(/ day$/, '')
  normal = normal.replace(/^orthodox /, '') //orthodox good friday

  // try easier, unmoving holidays
  let s = fixedDates(str, normal, year)
  if (s !== null) {
    return s
  }
  // try 'nth monday' holidays
  s = nthWeekday(str, normal, year)
  if (s !== null) {
    return s
  }
  // easter-based holidays
  s = easterDates(str, normal, year)
  if (s !== null) {
    return s
  }
  // solar-based holidays
  s = astroDates(str, normal, year)
  if (s !== null) {
    return s
  }

  return null
}
module.exports = spacetimeHoliday
