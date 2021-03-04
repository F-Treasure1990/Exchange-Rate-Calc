import { fetchRates, countryDropDown, dropDownMenuChange, selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo,countryFrom, unitNumber, unitInput1} from './Utilities.js'
const weatherAppUrl = 'https://api.exchangeratesapi.io/latest'

document.addEventListener('DOMContentLoaded', async () => {
  let Allrates = await fetchRates(weatherAppUrl)
  countryDropDown(Allrates.rates, selectCountryDropDownMenuOne)
  countryDropDown(Allrates.rates, selectCountryDropDownMenuTwo)
  countryFrom.innerText = selectCountryDropDownMenuOne.value
  unitNumber.innerText = unitInput1.value
})

dropDownMenuChange(selectCountryDropDownMenuTwo, selectCountryDropDownMenuOne)

dropDownMenuChange(selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo)








