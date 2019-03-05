//console.log("Hey there");
const iAmThirsty = (num) => {
if (num < 21) {
return 'Drink some water!';
}
else if (num >= 21 && num < 65) {
return 'Have a beer!';
}
else {
    return 'Take a nap!';
}
};
//console.log(iAmThirsty(15));
//console.log(iAmThirsty(30));
//console.log(iAmThirsty(70));
const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML += `<p>${textToPrint}</p>`;
};
printToDom('age-recommendations', iAmThirsty(17));
printToDom('age-recommendations', iAmThirsty(37));
printToDom('age-recommendations', iAmThirsty(77));
console.log(1 === '1');
console.log(1 == '1');
console.log(1 !== "2");
console.log('cats'.length);
//checks number of characters in string, including spaces
const quote = 'winter is coming';
console.log(quote.indexOf('is'));
//returns -1 when does not find the value


//tells the index of the start of the string
