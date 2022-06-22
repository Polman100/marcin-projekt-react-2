// helper function
const qs = (s) => document.querySelector(s);
const create = (s) => document.createElement(s);
const appendToElement = (x, s) =>  x.appendChild(s);

// DOM

const button = qs('.button');
const currencies = qs('.currencies');
const input = qs('.input-field');
const select = qs('.currencies');
const spanResult = qs('.result')

// functions

function roundToHundredth (x) {
    return Number(Math.round (x + 'e+2') + 'e-2')
};

function preventNaN (x) {
    if (x === "NaN PLN")
        {return "Wartość zbyt duża"}
    else
        {return x}
};

// events

document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://api.nbp.pl/api/exchangerates/tables/a';

    fetchData = fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].rates);
        // console.log(data[0].rates[0].code);

        const currecncyCode = data[0].rates[0].code;
        
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
});


button.addEventListener("click", (e) => {
    e.preventDefault();
    // const {input} = e.currentTarget.elements;
    // const {currencyCode} = e.currentTarget.elements;
    // const result = input.value * x
    const selectedCurrencyValue = select.options[select.selectedIndex].value
    // console.log(input.value);
    console.log(select.options[select.selectedIndex].value);
    
    const calculationResult = input.value * selectedCurrencyValue;

    console.log(calculationResult);

    spanResult.innerText = preventNaN(roundToHundredth(calculationResult)+ " PLN");
    
    console.log(roundToHundredth(calculationResult));

    // function calculateCurrency() {
    //     // input * currencyCode
    // };


})

// select.addEventListener("click", (e) => {
//     console.log(e.value);
//     })