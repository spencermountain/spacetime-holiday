<div align="center">
  <div>
    <h2>spacetime-holiday</h2>
  </div>
  <div>
    calculate the calendar-date of holidays
  </div>
  <a href="https://npmjs.org/package/spacetime-holiday">
    <img src="https://img.shields.io/npm/v/spacetime-holday.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/spacetime/builds/spacetime-holiday.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/spacetime-holday/master/builds/spacetime-holiday.min.js" />
  </a>
  <div>
    <sup>
      By <a href="https://github.com/spencermountain">Spencer Kelly</a>
    </sup>
  </div>
  <hr/>
</div>

Some holidays are the same day every year, some holidays change astronomically, some by calendar rules like 'third thursday in June'.

This library tries its best to reconcile them.

if it finds a date, it returns a [spacetime](https://github.com/spencermountain/spacetime) object.

`npm i spacetime-holiday`

```js
const spacetimeHoliday = require('spacetime-holiday')

let s = spacetimeHoliday('easter monday', 2020)
s.format('iso-short')
// 2020-04-12

spacetimeHoliday('groundhog day').format('day') // defaults to next instance
// 'Saturday'

spacetimeHoliday('fall equinox', 2030).format('nice-year')
// 'Sept 22nd, 2030'
```

work-in-progress!

- american/western holidays 👍

- Easter-based christian holidays 👍

- Astronomical holidays 👍

- Muslim holidays (predicted) 😞

- Jewish-calendar holidays (not implemented) 😞

- Chinese-calendar holidays (not implemented) 😞

## See also

- [spacetime-daylight](https://github.com/spencermountain/spacetime-daylight)
- [spacetime-week](https://github.com/spencermountain/spacetime-week)
- [spacetime-informal](https://github.com/spencermountain/spacetime-informal) - timezones like 'pacific time'

MIT
