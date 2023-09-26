// Chapter (changing case) 


// Q1)

var allLower = userInput.toLowerCase();


// Q2)

x = x.toLowerCase();


// Q3)

y = y.toUpperCase();


// Q4)

var originalString = "YourStringHere";

var lowerCaseString = originalString.toLowerCase();


// Q5)

var arr = ["YourStringHere", "AnotherString"];

var i = 0;

var lowerCaseString = arr[i].toLowerCase();


// Q6)

var yourString = "YourStringHere";

var upperCaseString = yourString.toUpperCase();


alert(upperCaseString);


// Q7)

var cityName = "kaRacHi";

var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


alert(capitalizedName);



// Chapter (String)

// Q1)


var sameWords = "captain";


sameWords = sameWords.slice(1, 3);


console.log(sameWords);

// Q2)

var sameWords = "captain";


var numberOfCharacters = sameWords.length;


console.log(numberOfCharacters);


// Q3)

const animal = "elephant";

const seg = animal.slice(1, 5); 


console.log(seg);


// Q4)

const myString = "Hello, world!";

const numberOfCharacters = myString.length;


console.log("Number of characters:", numberOfCharacters);


// Q5)

const myString = "examplestring"; 

const numberOfCharacters = myString.length;


const slicedString = myString.slice(1, -3);


console.log("Number of characters:", numberOfCharacters);

console.log("Sliced string:", slicedString);


// Q6


// Q7)

var text = "To be or not to be.";

var indx = text.lastIndexOf("be");


// Q8)

const text = "Let's go for a walk and then go for lunch. Shall we go?";

const lastIndex = text.lastIndexOf("go");

const indx = lastIndex !== -1 ? lastIndex : -1;


console.log("Index of the first character of the last 'go':", indx);


// Q9)

if indexNum < len(your_string_variable):


// Q10)

const str = "abcde";

const characterAtIndex2 = str.charAt(2);


// Q11)

const text = "Your string here";

const cha = text.charAt(9); 


// Q12)

const str = "Your string here";

const x = str.charAt(str.length - 1);


// Q13)


const input = "Your string here";

const cha = input.charAt(4);


// Q14)


if (yourStringVariable.charAt(2) === 'x') {


// Q15)

const reply = "Replace no with yes in this string";

const revisedReply = reply.replace('no', 'yes');

const charArray = [];


for (let i = 0; i < reply.length; i++) {

    charArray.push(reply.charAt(i));

}


console.log(charArray);

console.log(revisedReply);


// Q16)

const str = "Replace the first 1 with one";

const newStr = str.replace('1', 'one');

console.log(newStr);


// Q17)

var y = x.replace(/a/g, "z");


// Chapter(Rounding number)


// Q1)

const roundedNumber = Math.round(yourNumber);


// Q2)

const origNum = 3.14;

const roundNum = Math.ceil(origNum);

console.log(roundNum);


// Q3)

const origNum = 3.99;

const roundNum = Math.floor(origNum);

console.log(roundNum);


// Q4)

const originalNumber = 5.8;

const roundedNumber = Math.round(originalNumber);

console.log(roundedNumber);


// Q5)

const roundedNumber = Math.floor(0.5);

console.log(roundedNumber);

// Chapter(Random number)


// Q1)

const randomNumber = Math.floor(Math.random() * 50) + 1; // Generates a random number between 1 and 50

console.log(randomNumber);


// Q2)

const randomNum = Math.random();

console.log(randomNum);


// Q3)

function rollDice() {

  const min = 1;

  const max = 6;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNum;

}


const diceResult = rollDice();

console.log('You rolled a ' + diceResult);


// Q4)

function tossCoin() {

  const randomNum = Math.random();

  const result = randomNum < 0.5 ? 'heads' : 'tails';

  return result;

}


const tossResult = tossCoin();

console.log('The result of the coin toss is: ' + tossResult);


// Chapter(converting string)


// Q1)

const str = "123";

const num = parseInt(str);


console.log(num);


// Q2)

function stringToInteger() {

  const str = "123";

  const num = parseInt(str);

  return num;

}


const integerResult = stringToInteger();

console.log(integerResult);


// Q3)

const str = "3.14";

const num = parseFloat(str);


console.log(num);


// Q4)

function canBeConvertedToInteger(str) {

  return !isNaN(parseInt(str, 10));

}


function canBeConvertedToDecimal(str) {

  return !isNaN(parseFloat(str));

}


const str1 = "123";

const str2 = "3.14";

const str3 = "abc";


console.log(canBeConvertedToInteger(str1));

console.log(canBeConvertedToDecimal(str1));


console.log(canBeConvertedToInteger(str2));

console.log(canBeConvertedToDecimal(str2));


console.log(canBeConvertedToInteger(str3));

console.log(canBeConvertedToDecimal(str3));


// Q5)

const num = 42;

const str = num.toString();

console.log(str);

Using String() constructor:

const num = 42;

const str = String(num);

console.log(str); 


// Q6)

function numberToString() {

  const num = 42;

  const str = num.toString();

  return str;

}


const stringResult = numberToString();

console.log(stringResult);


// Q7)

const str = "3.14"; 

const num = parseInt(str);

console.log(num);


// Chapter(controling the length of decimal)


// Q1)

const num = 12.3456789; // Replace with your actual number

const newNum = num.toFixed(4); // Round to 4 decimal places and convert to string


// Q2)

let yourNumber = parseFloat(yourNumber.toFixed(2));


// Q3)

if (num.toFixed(2).toString().length > 4) {


// Q4)

const originalNumber = 12.3456789; // Replace with your actual number

const roundedString = originalNumber.toFixed(2).toString(); // Round to 2 decimal places and convert to string

alert(roundedString);