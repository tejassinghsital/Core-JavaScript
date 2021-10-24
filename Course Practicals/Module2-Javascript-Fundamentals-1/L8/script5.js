let year = 1991;// Use of let to create a variable. we use let when we need to update it's value further in our program
console.log(year);
year = 2001;
console.log(year);

const birthYear = 2001;//Use of const to create variable.we use const when we don't have to change value further in our program.
console.log(birthYear);

var yearVal = 2001;//it is an old way of creating the variable. It is not used now adays.
console.log(yearVal);

let val;// We can create an undefined variable with let but not with const like const val;

//It's not a best practice to use variables without declaring with let, const or var.It works but not correct. See notes for reason.

const firstName = "Tejas";
console.log(firstName);
lastName = "Singh";
console.log(lastName);