function greeting() {
  var hello = "Hello";
  return hello.toUpperCase();
}

function nameUpperCase(name) {
  return name.toUpperCase();
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(greeting() + " " + nameUpperCase(mentor1));
console.log(greeting() + " " + nameUpperCase(mentor2));
console.log(greeting() + " " + nameUpperCase(mentor3));
console.log(greeting() + " " + nameUpperCase(mentor4));
console.log(greeting() + " " + nameUpperCase(mentor5));
