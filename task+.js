var age = Number((prompt("write your age")))

var result1 = ("your age is less than 18")
var result2 = ("your age is between 18 and 25")
var result3 = ("your age is between 26 and 40")
var result4 = ("your age is between 41 and 50")
var result5 = ("your age is gearter than 50")

var result = 0;

if (age < 18) {
    result = result1;
}
else if (age >= 18 && age <= 25) {
    result = result2;
}
else if (age >= 26 && age <= 40) {
    result = result3;
}
else if (age >= 41 && age <= 50) {
    result = result4;
}
else if (age >= 50) {
    result = result5;
}
else {
    console.log("invalid choise")
}
console.log(result);
