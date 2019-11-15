const spacetime = require('spacetime')
const fixed = require('./data/fixed-holidays')

// holidays that are the same date every year
const fixedDates = function(str, normal, year) {
  if (fixed.hasOwnProperty(str) || fixed.hasOwnProperty(normal)) {
    let arr = fixed[str] || fixed[normal] || []
    let s = spacetime.now()
    s = s.year(year)
    s = s.startOf('year')
    s = s.month(arr[0])
    s = s.date(arr[1])
    if (s.isValid()) {
      return s
    }
  }
  return null
}
module.exports = fixedDates
