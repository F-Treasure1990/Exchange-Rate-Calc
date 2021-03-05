import { fetchRates, countryDropDown, selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo } from './Utilities.js'
const weatherAppUrl = 'https://api.exchangeratesapi.io/latest'
 const unitInput = document.querySelector('.unitInput1')

document.addEventListener('DOMContentLoaded', async () => {
  let Allrates = await fetchRates(weatherAppUrl)
  countryDropDown(Allrates.rates, selectCountryDropDownMenuOne)
  countryDropDown(Allrates.rates, selectCountryDropDownMenuTwo)
  calc()
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





