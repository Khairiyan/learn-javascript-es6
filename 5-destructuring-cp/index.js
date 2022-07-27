// format nama user menjadi "John - john@example.com", dan akses nama user dengan teknik destrucuring assignment.

const format = (user) => {
  // TODO: answer here
  const [first, second] = [user.name, user.email];
  return [first] + " - " + [second];
};

console.log(format({ name: "John", email: "john@example.com" }))

module.exports = format