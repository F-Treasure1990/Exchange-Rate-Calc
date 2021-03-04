export const countryToo = document.querySelector('.countryToo')
export const [selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo] = document.
  querySelectorAll('#selectCountry')
export const countryFrom = document.querySelector('.countryFrom')
export const priceConverted = document.querySelector('.priceConverted')
export const unitNumber = document.querySelector('.unitNumber')
export const unitInput1 = document.querySelector('.unitInput1')
export const unitInput2 = document.querySelector('.unitInput2')

function fontBlack(array) {
  array.forEach((arr)=>
  arr.style.color = 'black')
}

fontBlack([countryToo, countryFrom])

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
  element.addEventListener('change', async () => {
    let rateObj = await fetchRates(`https://api.exchangeratesapi.io/latest?base=${element.value}`)
    countryFrom.innerHTML = selectCountryDropDownMenuOne.value;

    for (const rate of Object.entries(rateObj.rates)) {
      const [country, covRate] = rate
      if (element2.value === country){
          priceConverted.innerText = `${covRate.toFixed(4)}`
          countryToo.innerText = selectCountryDropDownMenuTwo.value
      }
    }
  })
}


