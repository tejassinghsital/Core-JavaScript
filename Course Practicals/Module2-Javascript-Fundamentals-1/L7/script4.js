//Datatypes in Javascript
//typeof is an operator thta can use to check the typpe of variable that what datatype it comes under.

let age = 20;//Number datatype
console.log(age);
console.log(typeof age);
let decimalNum = 34562.76743;//Also comes under Number datatype
console.log(age);
console.log(typeof age);

let firstName = "Tejas";//String Datatype
console.log(firstName);
console.log(typeof firstName);
let lastName = 'Singh';//It doesn' matter to use ""or'' with String and characters.
console.log(lastName);
console.log(typeof lastName);
let charValue = 'a';//Also string and character comprises under String datatype.
console.log(charValue);
console.log(typeof charValue);
let charValue2 = "b";
console.log(charValue2);
console.log(typeof charValue2);

let booleanValue = true;//Boolean Datatype
console.log(booleanValue);
console.log(typeof booleanValue);
//Above three are mostly used and main datatypes of javascript. there are other datatypes too.

let undefinedValue;// Undefined Datatype. The variable that are declared but not defines falls under undefiend Datatype.
console.log(undefinedValue);
console.log(typeof undefinedValue);
undefinedValue = 5;//We can also assign undefined datatype some value and then it not longer be undefined and gets converted to other datatypes from main three depend upon the type of value.
console.log(undefinedValue);
console.log(typeof undefinedValue);

let nullValue = null;//Null datatype
console.log(nullValue);
console.log(typeof nullValue);// It shows the datatype of nullValue is object but its a bug and it's a fault of javascript but they don't corrected it because of legacy reasons.

//Both Null and Undefined symbolises empty value then whats the difference between them? We see the difference between them in later sections.

let bigNumVal1 = BigInt("123465523451245621456234564235632456344235642165");//Big Int Datatype. It store larger integre values introduced in ES11 or ES2020.
console.log(bigNumVal1);
console.log(typeof bigNumVal1);
let bigHexVal = BigInt("0x1ffffffeeeeeeeeef")//Here we don't use ; but still its working fine, so in javascript you can write a statement with or without ;. It doesn't matter unlike java where a statementw ithout ; is an expression and gives error.
console.log(bigHexVal);
console.log(typeof bigHexVal);
let bigBinVal = BigInt("0b1010101001010101001111111111111111");
console.log(bigBinVal);
console.log(typeof bigBinVal);

//Symbol Datatype. In course it's not explained yet and I am not able to undersatnd it with articles so waiting for course instructor to explain them.And if he's not then i'll try to learn it from Geeks for Geeks and update here too.


let val = 20;//Dynamic typing example. Here we changed val variable value from number to string. It's done becaue in javascript we don't need to write variable datatype before it.
console.log(val);
console.log(typeof val);
val = "Tejas";
console.log(val);
console.log(typeof val);