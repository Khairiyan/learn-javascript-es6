/** Format nama user menjadi "John - john@example.com - Unemployed",
 *  dan akses data user dengan teknik destrucuring assignment
 *  gunakan default value ketika atribut tidak ditemukan
 */

const format = (user) => {
  // TODO: answer here
  const [name, email, occupation = "Unemployed"] = [user.name, user.email];
  return `${name} - ${email} - ${occupation}`;
};


module.exports = format