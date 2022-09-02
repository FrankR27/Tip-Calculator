const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberOfPerson = Number(numberOfPeopleDiv.innerText);

// united states currency format
const formatUnitedStates = (number) => {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1,";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
};

//  Calculate the total bill per person
const calculateBill = () => {
  const bill = Number(billInput.value);
  const tipPercentage = Number(tipInput.value) / 100;
  const tipAmount = bill * tipPercentage;
  const total = bill + tipAmount;
  const perPersonTotal = total / numberOfPerson;
  perPersonTotalDiv.innerText = `$${formatUnitedStates(
    perPersonTotal.toFixed(2)
  )}`;
};

//  Splits the bill between more people
const increasePeople = () => {
  numberOfPerson += 1;
  numberOfPeopleDiv.innerText = numberOfPerson;
  calculateBill();
};

//  Splits the bill between fewer people
const decreasePeople = () => {
  if (numberOfPerson <= 1) {
    return;
  }
  numberOfPerson -= 1;
  numberOfPeopleDiv.innerText = numberOfPerson;
  calculateBill();
};
