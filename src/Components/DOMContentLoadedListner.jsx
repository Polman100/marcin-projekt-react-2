import React from 'react'
import {create} from './HelperFunctions'
import {currencies} from './DOM'

const DOMContentLoadedListner = () => {
  return (
    document.addEventListener("DOMContentLoaded", function() {
        const url = 'https://api.nbp.pl/api/exchangerates/tables/a';
    
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0].rates);
            
            function getCurrencyCode(x) {
                return data[0].rates[x].code
            };
            function getCurrencyRate(x) {
                return data[0].rates[x].mid
            };
            
            function createOption(text, rate) {
                const option = create("option");
                option.textContent = text;
                option.value = rate;
                currencies.appendChild(option);
                };
    
            for ( let i = 0 ; i < data[0].rates.length ; i++ ) {
                createOption(getCurrencyCode(i), getCurrencyRate(i));
            };
    
        })
        .catch((err) => console.error(err));
    })    
  )
}

export default DOMContentLoadedListner