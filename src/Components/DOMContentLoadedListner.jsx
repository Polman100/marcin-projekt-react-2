import React from 'react'
import {create} from './HelperFunctions'
// import {currencies} from './DOM'
import {qs} from './HelperFunctions'
const currencies = qs('.currencies');

const DOMContentLoadedListner = () => {
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
            console.log(currencies)
            console.log(option)
            currencies.appendChild(option);
            };

        for ( let i = 0 ; i < data[0].rates.length ; i++ ) {
            createOption(getCurrencyCode(i), getCurrencyRate(i));
        };

    })
    .catch((err) => console.error(err));
        

}

export default DOMContentLoadedListner