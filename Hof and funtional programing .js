// Q -1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.



const inpuut = "Hello, World!"
let func = function reverse() {
    const rev = inpuut.split('').reverse().join('')
    console.log(rev)
}
setTimeout(func,2000)



// Q -2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.



const delayInsecond = 3
let remainingTime = delayInsecond

let countDown = setInterval(() =>{
    console.log(`Generating Random number in  ${remainingTime} Seconds...`)
    remainingTime--;

    if(remainingTime === 0){
        clearInterval(countDown)
        let ran = Math.floor(Math.random() * 100)
        console.log(`Random number is ${ran}`)
    }
},1000)



// Q -3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.



const storeInventory = {
    item1: 10, // USD
    item2: 20, // USD
    item3: 15, // USD
  };
  
  const exchangeRate = 80;
  const convertedInventory = {};
  
  for (const item in storeInventory) {
    convertedInventory[item] = storeInventory[item] * exchangeRate;
  }
  
  console.log(convertedInventory);
  


// Q -4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.



const book = [
    { title: 'Book 1', author: 'author 1', year: 2008 },
    { title: 'Book 2', author: 'author 2', year: 2012 },
    { title: 'Book 3', author: 'author 3', year: 2015 },
  ];
  
const filtebook = book.filter(book => book.year>=2010).map(book =>{
    book.author = book.author.toUpperCase()
    return book
})

console.log(filtebook)



// Q -5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.



const urlRegex = /^(http:\/\/|https:\/\/)[\w\d!#$%&'*+\-/=?^_`{|}~.]+[a-zA-Z]+$/;
const input = 'https://www.example.com';

if (urlRegex.test(input)) {
  console.log('Input is a valid URL.');
} else {
  console.log('Input is not a valid URL.');
}



//Q -6. LinkedIn Profile URL Validator.
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.



const linkedinRegex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
const profileUrls = [
  'https://www.linkedin.com/in/valid-profile',
  'https://www.linkedin.com/in/invalid_profile!',
  'https://www.linkedin.com/in/profile-with-a-very-long-name-that-exceeds-30-characters',
];

profileUrls.forEach(url => {
  if (linkedinRegex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
});





