//yep,
const jan = 0
const feb = 1
const march = 2
const april = 3
const may = 4
const june = 5
const july = 6
// const august = 7
const sep = 8
const oct = 9
const nov = 10
const dec = 11

const mon = 'monday'
const tues = 'tuesday'
const wed = 'wednesday'
const thurs = 'thursday'
const fri = 'friday'
const sat = 'saturday'
const sun = 'sunday'

// hardcoded dates for astronomical holidays
//   ----please change, every few years(!)---
let dates = {
  'mardi gras': [feb], //[47 days before easter],

  // Jewish
  'tu bishvat': [jan, 31],
  'tu bshevat': [jan, 31],
  purim: [march, 1],
  passover: [march, 31], // Ranged holiday [april, 7],
  'yom hashoah': [april, 11],
  'lag baomer': [may, 3],
  shavuot: [may, 20],
  'tisha bav': [july, 22],
  'rosh hashana': [sep, 10],
  'yom kippur': [sep, 19],
  sukkot: [sep, 24], // Ranged holiday [sep, 30],
  'shmini atzeret': [oct, 1],
  'simchat torah': [oct, 2],
  chanukah: [dec, 3], // Ranged holiday [dec, 30],
  hanukkah: [dec, 3], // Ranged holiday [dec, 30],

  // Muslim
  'isra and miraj': [april, 13],
  'lailat al-qadr': [june, 10],
  'eid al-fitr': [june, 15],
  'id al-Fitr': [june, 15],
  'eid ul-Fitr': [june, 15],
  ramadan: [may, 16], // Ranged holiday [, ],
  'eid al-adha': [sep, 22],
  muharram: [sep, 12],
  'the prophets birthday': [nov, 21],

  // Pagan / metal
  ostara: [march, 20],
  'march equinox': [march, 20],
  'vernal equinox': [march, 20],
  litha: [june, 21],
  'june solistice': [june, 21],
  'summer solistice': [june, 21],
  mabon: [sep, 23],
  'september equinox': [sep, 23],
  'autumnal equinox': [sep, 23],
  yule: [dec, 21],
  'december solstice': [dec, 21],
  'winter solstice': [dec, 21],

  // Additional important holidays
  'chinese new year': [feb, 16],
  diwali: [nov, 7]
}
module.exports = dates
