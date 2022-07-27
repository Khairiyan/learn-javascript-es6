/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  // TODO: answer here
  return array.map((arr) => ({
    [arr]: arr.toUpperCase(),
  }));
};

module.exports = lowerToUpperMap;
