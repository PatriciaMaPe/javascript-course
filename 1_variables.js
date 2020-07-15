var name;
name = 'Patri';
var age = 26;

// var name = 'Patri', age = 26;

console.log('Hi ' + name + ' - ' + age);

//Javascript is a weak typed language
age = '26' // -> change the number type to a text
console.log('Hi ' + name + ' - ' + age);

// String functions
var uppercaseName = name.toUpperCase(); // PATRI
var lowercaseName = name.toLowerCase(); // patri

var firstCharacterName = name.charAt(0); // P
var characterNumberName = name.length; // 5

var nameAge = name + ' - ' + age; // Patri - 26
var nameAndAge = `${name.toUpperCase()} - ${age}`; // PATRI - 26

var strChar = name.charAt(1) + name.charAt(2); // at
var str = name.substr(1, 2); // at

// Number variables
var productPrice = 200.3;

var productPriceQuantity = productPrice * 3; // 600.9000000000001 -> JS bad precision
//To solve this problem: multiply by 100 to operate with an integer, the divide by 100 to recuperate the decimal number
var totalProductPrice = productPrice * 100 * 3 / 100; // 600.9
// If unknowing the number of decimals, use library Math
var total = Math.round(productPrice * 100 * 3) / 100 // 600.9

var totalStr = total.toFixed(3); // "600.900" -> String
var total2 = parseFloat(totalStr) // 600.9 -> float