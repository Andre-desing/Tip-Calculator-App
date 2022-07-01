/**
 * Getting the bill and person values from the form.
 *  @class Values
 *  @type {Object}
 *  @property {number} billValue
 *  @property {number} peopleValue
 */
const getBillAndPersonValues = () => {
    const billValue = document.querySelector('#bill-amount')
    const peopleValue = document.querySelector('#people-amount')
    if (billValue && peopleValue) {
        return {
            billValue: parseInt(billValue.value),
            peopleValue: parseInt(peopleValue.value)
        }
    }
}

/**
 *  Calculates the tip amount and total person amount based on params.
 *  @param {number} selectedTip
 */
const calculateTipAmount = (selectedTip) => {
    const { billValue, peopleValue } = getBillAndPersonValues()
    const tipAmountValue = (billValue * selectedTip) / peopleValue
    const personValue = (billValue * selectedTip)
    const tipAmountElement = document.querySelector('.total-tip-per-person')
    const totalPersonElement = document.querySelector('.total-tip-amount')
    if (tipAmountElement && totalPersonElement) {
        tipAmountElement.textContent = `$${tipAmountValue.toString()}`
        totalPersonElement.textContent = `$${personValue.toString()}`
    }
}

/**
 *  Adds an event listener to get the tip's value, then it calls calculateTipAmount function.
 */
const getTipButtonsValue = () => {
    const buttons = document.querySelectorAll('.percentage-btn')
    if (buttons) {
        buttons.forEach(el => {
            el.addEventListener('click', (tipValue) => {
                if (tipValue) {
                    calculateTipAmount(parseFloat(tipValue.target.value))
                }
            })
        })
    }
}

getTipButtonsValue()
