const fixed = require('./data/fixed')
const spacetime = require('spacetime')
const nowYear = spacetime.now().year()

const spacetimeHoliday = function(str, year) {
  year = year || nowYear
  str = str || ''
  str = str.trim().toLowerCase()

  let normal = str.replace(/ day$/, '')

  // try easier, unmoving holidays
  if (fixed.hasOwnProperty(str) || fixed.hasOwnProperty(normal)) {
    let arr = fixed[str] || fixed[normal] || []
    let s = spacetime.now()
    s = s.year(year)
    s = s.startOf('year')
    s = s.month(arr[0])
    s = s.date(arr[1])
    return s
  }

  return null
}
module.exports = spacetimeHoliday
