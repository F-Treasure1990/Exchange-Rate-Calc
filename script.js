import { fetchRates, countryDropDown, selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo } from './Utilities.js'
const weatherAppUrl = 'https://api.exchangeratesapi.io/latest'
const unitInput = document.querySelector('.unitInput1')
const swapBtn = document.querySelector('.btn')

document.addEventListener('DOMContentLoaded', async () => {
  const exchangeRateCalc = document.querySelector('.exchangeRateCalc')
  let Allrates = await fetchRates(weatherAppUrl)
  countryDropDown(Allrates.rates, selectCountryDropDownMenuOne)
  countryDropDown(Allrates.rates, selectCountryDropDownMenuTwo)
  selectCountryDropDownMenuTwo.value = 'BGN'
  exchangeRateCalc.innerText = 'Select Your Currencies'
  
})


selectCountryDropDownMenuOne.addEventListener('change', () => calc())
selectCountryDropDownMenuTwo.addEventListener('change', () => calc())
unitInput.addEventListener('change', () => calc())


async function calc() {
  const exchangeRateCalc = document.querySelector('.exchangeRateCalc')
 
  const unitOutput = document.querySelector('.unitInput2')
  const currency_one = selectCountryDropDownMenuOne.value;
  const currency_two = selectCountryDropDownMenuTwo.value;

  let rates = await fetchRates(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
  let rate = rates.rates[currency_two]
  exchangeRateCalc.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

  unitOutput.value = (unitInput.value * rate).toFixed(3)
}


swapBtn.addEventListener('click', () => {
  const temp = selectCountryDropDownMenuOne.value;
  selectCountryDropDownMenuOne.value = selectCountryDropDownMenuTwo.value
  selectCountryDropDownMenuTwo.value = temp;
  calc()
})



