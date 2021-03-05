export const [selectCountryDropDownMenuOne, selectCountryDropDownMenuTwo] = document.
  querySelectorAll('#selectCountry')



export async function fetchRates(url) {
  const response = await fetch(url)
  const rates = await response.json()
  return rates
}

export const countryDropDown = (obj, parent) => {
  let array = []
  for (const rate in obj) {
    array.push(rate)
  }
  array.sort()
  array.forEach((currency)=> {
    const option = document.createElement('option');
    option.setAttribute('value', currency)
    option.innerHTML = currency
    parent.appendChild(option)
  })
  
}




