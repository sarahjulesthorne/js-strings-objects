console.log("Hey there");
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
console.log(iAmThirsty(15));
console.log(iAmThirsty(30));
console.log(iAmThirsty(70));
const printToDom = (textToPrint) => {
const selectedDiv = document.getElementById('age-recommendations');
selectedDiv.innerHTML += `<p>${textToPrint}</p>`;
};
printToDom(iAmThirsty(17));
printToDom(iAmThirsty(37));
printToDom(iAmThirsty(77));


