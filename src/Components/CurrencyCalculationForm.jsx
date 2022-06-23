import React, { useState, useEffect } from 'react'
const url = "https://api.nbp.pl/api/exchangerates/tables/a";

const CurrencyCalculationForm = () => {

  const [currency, setCurrency] = useState(null);
  
  const [userInput, setUserInput] = useState(0)

  const [currencySelected, setCurrencySelected] = useState("")

  const [outcome, setOutcome] = useState(0)

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => { 
      setCurrency(data[0].rates)
    }) 
    .catch((err) => console.error(err));
    
  }, []);

  function computeOutcome(e) {
    e.preventDefault()
    if (userInput && currencySelected) {
      setOutcome( userInput * currencySelected)
    }
    else {return}
  }

return (
  <form className="converter-form" onSubmit={computeOutcome}>
  <input type="number" className="input-field" name="input" onChange={(e) => setUserInput(e.target.value)} />
  <select name="currencyCode" className="currencies" value={currencySelected} onChange={(e) => setCurrencySelected(e.target.value)}>
    <option value=""></option>
    {currency?.map(({code, mid}) => {
      return (
        <option key={code} value={mid}> {code} </option>
      ) })}
  </select>
  <input type="submit" value="Przelicz" className="button" />
  <span className="text">TO</span>
  <span className="result">{outcome} PLN</span>          
  </form>
)
}

export default CurrencyCalculationForm

