/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

const sumTotalArray = (numbers) => {
  // TODO: answer here
  const sum = numbers.reduce((prev, current) => {
    return prev + current;
  });
  return sum;
};


module.exports = sumTotalArray;


