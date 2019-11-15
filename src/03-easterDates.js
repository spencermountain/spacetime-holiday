const easters = require('./data/easter-dates')
const holidays = require('./data/easter-holidays')
const spacetime = require('spacetime')

//calculate any holidays based on easter
const easterDates = function(str, normal, year) {
  if (holidays.hasOwnProperty(str) || holidays.hasOwnProperty(normal)) {
    let days = holidays[str] || holidays[normal] || []

    let date = easters[String(year)]
    if (!date) {
      return null //no easter for this year
    }
    let e = spacetime(date)
    e = e.year(year)

    let s = e.add(days, 'day')
    if (s.isValid()) {
      return s
    }
  }
  return null
}
module.exports = easterDates
