// - I need to get the value entered for the bill amount. #bill-amount
// - multiply it for the selected tip %. .percentage-btn
// - dive it for the amount of people number entered. #people-amount
// - display it in the h1 total ammounts. #total-tip-per-person #total-tip-amount"
// - the reset buttons should set all values to 0 again. #button-reset


const input = document.querySelector('#bill-amount');
const percentageSelected = document.querySelectorAll('.percentage-btn');

const action = () => {
    input.addEventListener('input', action);

}
const action2 = () => {
    percentageSelected.addEventListener('click', action2);

}
console.log(percentageSelected.value);
console.log(input.value);