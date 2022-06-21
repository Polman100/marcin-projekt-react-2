import React from 'react'

const Form = () => {
  return (
    <form className="converter-form">
    <input type="number" className="input-field" name="input" />
    <select name="currencyCode" className="currencies">
    </select>
    <input type="submit" value="Przelicz" className="button" />
    <span className="text">TO</span>
    <span className="result"></span>          
    </form>
  )
}

export default Form