const spacetimeHoliday = require('./src')

const s = spacetimeHoliday('christmas', 2020)
console.log(s.format('iso-short'))

// spacetimeHoliday('groundhog day').log()
