var numberOfStudents = 15;
var numberOfMentors = 8;
var precisePercentageStudents =
  (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
var percentageStudents = Math.round(precisePercentageStudents);

var precisePercentageMentors =
  (numberOfMentors / (numberOfMentors + numberOfStudents)) * 100;
var precisePercentageMentors = Math.round(precisePercentageMentors);

console.log(
  "percentage students: " + Math.round(precisePercentageStudents) + "%"
);
console.log(
  "percentage mentors: " + Math.round(precisePercentageMentors) + "%"
);
