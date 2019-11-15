const test = require('tape')
const spacetimeHoliday = require('./_lib')

test('fixed-holidays', t => {
  let arr = [
    ['christmas', '2019-12-25'],
    ['christmas day', '2019-12-25'],
    [' CHRISTMAS  ', '2019-12-25'],
    ['boxing day', '2019-12-26'],
    ['christmas eve', '2019-12-24']
  ]
  arr.forEach(a => {
    let s = spacetimeHoliday(a[0], 2019)
    t.equal(s.format('iso-short'), a[1], a[0])
  })
  t.end()
})
