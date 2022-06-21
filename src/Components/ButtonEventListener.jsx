import React from 'react'

const ButtonEventListener = () => {
  return (
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const selectedCurrencyValue = select.options[select.selectedIndex].value

        console.log(select.options[select.selectedIndex].value);
        
        const calculationResult = input.value * selectedCurrencyValue;
    
        console.log(calculationResult);
    
        spanResult.innerText = preventNaN(roundToHundredth(calculationResult)+ " PLN");
        
        console.log(roundToHundredth(calculationResult));
    
    })
  )
}

export default ButtonEventListener