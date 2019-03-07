function percentage(a, b) {
  return Math.round((a / (a + b)) * 100);
}
function createMessage(a, b, people) {
  var message = "Percentage " + people + ":" + percentage(a, b) + "%";
  return message;
}
console.log(createMessage(15, 8, "students "));
console.log(createMessage(8, 15, "mentors "));
