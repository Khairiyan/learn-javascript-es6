/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

 const countRepetition = (numbers) => {
  // TODO: answer here
  let repetition = numbers.reduce((numCount, currentNum) => {
    numCount[currentNum] = numCount[currentNum] ? numCount[currentNum] + 1 : 1;
    return numCount;
  }, {});
  return repetition;
};

module.exports = countRepetition;
