/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
  return `rgb(${color
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
      return '#' + r + r + g + g + b + b;
    })
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(', ')})`;
}

// function hexToRgb2(color) {
//   let normalize;
//
//   if (color.length === 4) {
//     normalize = [...color.substring(1)].reduce((acc, cur) => {
//       return [...acc, `${cur}` + `${cur}`];
//     }, []);
//   } else {
//   }
//
//   console.log(normalize);
// }

console.log(hexToRgb('#808000')); // [0, 51, 255]
console.log(hexToRgb('#03f')); // [0, 51, 255]
