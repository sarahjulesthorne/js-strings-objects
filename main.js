/*This project is a compilation of various exercises in strings and objects.
The project uses (now commented out) console.logs and (still visible) print-to-dom functions to test the various methods/properties of strings and objects.*/
//console.log("Hey there");
//function below uses conditionals to test the value of a number and return various strings depending on the number's value.
const iAmThirsty = (num) => {
  if (num < 21) {
    return 'Drink some water!';
  } else if (num >= 21 && num < 65) {
    return 'Have a beer!';
  } else {
    return 'Take a nap!';
  }
};
//console.log(iAmThirsty(15));
//console.log(iAmThirsty(30));
//console.log(iAmThirsty(70));
//Print function below prints strings to the DOM by selecting a div and setting its inner HTML to the assigned variable.
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += `<p>${textToPrint}</p>`;
};
printToDom('age-recommendations', iAmThirsty(17));
printToDom('age-recommendations', iAmThirsty(37));
printToDom('age-recommendations', iAmThirsty(77));
// console.log(1 === '1');
// console.log(1 == '1');
// console.log(1 !== "2");
// console.log('cats'.length);
//checks number of characters in string, including spaces
const quote = 'winter is coming';
// console.log(quote.indexOf('is'));
//returns -1 when does not find the value


//tells the index of the start of the string
//Object below is an example object.
const bucketOfCats = {
  cat1: 'fluffy',
  cat2: 5,
  cat3: cat = () => {
    return 'cat';
  },
  cat4: {
    water: 'nope',
    sunlight: 'yes'
  }
}
// console.log(bucketOfCats.cat2);
// console.log(bucketOfCats['cat2']);
// console.log(bucketOfCats.cat4.water);
//object below features various types of JS elements that can be in an object.
let hitchhikers_guide = {
  characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
  catchphrase: "Don't Panic",
  random_facts: {
    copies_sold: 14000000,
    formats: ["radio", "TV", "film", "graphic novel"],
    ultimate_answer: {
      meaning_of_life: 42
    }
  }
};
//    console.log(hitchhikers_guide.
// random_facts.ultimate_answer.meaning_of_life);
//Another example object
let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}
//   console.log(`Our company's lawyer is ${employee.name}.`);
//   console.log(`Jeff was hired on ${employee['hire_date']}.`);

employee['vacation-days'] = 20;
//   console.log(employee['vacation-days']);
let eom = "employee_of_the_month";
employee['eom'] = false;
//   console.log(employee['eom']);
printToDom('objects', `Our company's lawyer is ${employee.name}.`);
printToDom('objects', `Jeff was hired on ${employee['hire_date']}.`);
printToDom('objects', employee['vacation-days']);
printToDom('objects', employee['eom']);