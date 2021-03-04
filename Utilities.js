export const countryToo = document.querySelector('.countryToo')
export const [selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo] = document.
  querySelectorAll('#selectCountry')
export const countryFrom = document.querySelector('.countryFrom')
export const priceConverted = document.querySelector('.priceConverted')


export async function fetchRates(url) {
  const response = await fetch(url)
  const rates = await response.json()
  return rates
}

export const countryDropDown = (obj, parent) => {
  for (const rate in obj) {
    const option = document.createElement('option');
    option.setAttribute('value', `${rate}`)
    option.innerHTML = `${rate}`
    parent.appendChild(option)
  }
}

export const dropDownMenuChange = (element, element2) => {
  (element, element2).addEventListener('change', async () => {
    let rateObj = await fetchRates(`https://api.exchangeratesapi.io/latest?base=${element.value}`)
    countryFrom.innerHTML = selectCountryDropDownMenuOne.value;

    for (const rate of Object.entries(rateObj.rates)) {
      const [country, covRate] = rate
      if ((element === selectCountryDropDownMenuOne ? selectCountryDropDownMenuTwo : selectCountryDropDownMenuOne).value === country) {
        priceConverted.innerText = `= ${covRate.toFixed(4)}`
        countryToo.innerText = selectCountryDropDownMenuTwo.value
      }
    }
  })
}

// export const CalculateRate = () => {

// }