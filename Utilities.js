export const [selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo] = document.
  querySelectorAll('#selectCountry')
export const unitInput = document.querySelector('.unitInput1')
export const unitOutput = document.querySelector('.unitInput2')


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





