//1
let totalMarks = prompt("Enter Marks");

if (totalMarks >= 80 && totalMarks <= 100) {
  console.log("Grade is A");
} else if (totalMarks >= 70 && totalMarks < 80) {
  console.log("Grade is B");
} else if (totalMarks >= 60 && totalMarks < 70) {
  console.log("Grade is c");
} else if (totalMarks >= 50 && totalMarks < 60) {
  console.log("Grade is D");
} else if (totalMarks < 50) {
  console.log("Grade is F");
}

//2
let month = prompt("Enter Month:");

if (month == "September" || month == "October" || month == "November") {
  console.log("Autumn Season");
} else if (month == "December" || month == "January" || month == "February") {
  console.log("Winter Season");
} else if (month == "March" || month == "April" || month == "May") {
  console.log("Spring Season");
} else if (month == "June" || month == "July" || month == "August") {
  console.log("Monsoon Season");
}

//3
let day = prompt("What is The Today?");

if (day == "saturday") {
  console.log("Saturday is weekend");
} else if (day == "saturDay") {
  console.log("Saturday is weekend");
} else if (day == "friday") {
  console.log("Friday is weekend");
} else if (day == "friDay") {
  console.log("Friday is weekday");
}

//Level_3

monthInput = prompt("No. of days in a month?");
month = monthInput.tolowercase();

switch (month) {
  case "January":
    console.log("january has 31 days");
    break;
    break;
  case "February":
    console.log("february has 28 days");
}

//2
month=prompt('Number of days in a month?')

if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
)
  console.log("Number of days is 31");
else if (
  month == 2 &&
  (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
) {
  console.log("Number of days is 29");
} else if (month == 2) {
  console.log("Number of days is 28");
} else console.log("Number of days is 30");
