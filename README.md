<div align="center">
  <div>
    <h2>spacetime-holiday</h2>
  </div>
  <div>
    calculate the date of various holidays
  </div>
  <a href="https://npmjs.org/package/spacetime-week">
    <img src="https://img.shields.io/npm/v/spacetime-holday.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/spacetime/builds/spacetime-holday.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/spacetime-holday/master/builds/spacetime-holday.min.js" />
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

spacetimeHoliday('groundhog day').log()

let s = spacetimeHoliday('easter', 2020)
s.format('iso-short')
// 2020-04-12

```

work-in-progress

## See also

- [spacetime-daylight](https://github.com/spencermountain/spacetime-daylight)
- [spacetime-week](https://github.com/spencermountain/spacetime-week)
- [spacetime-informal](https://github.com/spencermountain/spacetime-informal) - timezones like 'pacific time'

MIT
