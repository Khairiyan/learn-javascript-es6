/**
 * Tampilkan tipe data dari setiap elemen array
 * Input: ["A", 3, [2]]
 * Outout: ["string", "number", "object"]
 *
 * Hint:
 * - Untuk pengecekan tipe data kalian dapat menggunakan typeof
 * - Pastikan menggunakan for-of untuk perulangan
 */

const convertElementToType = (array) => {
  // TODO: answer here
  let output = [];
  let i = 0;
  for (let arr of array) {
    output[i] = typeof arr;
    i++;
  }
  return output;
};

module.exports = convertElementToType;


