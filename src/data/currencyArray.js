

const url = 'https://api.nbp.pl/api/exchangerates/tables/a';


var currencyArray;
fetch(url)
    .then((response) => response.json())
    .then((data) => currencyArray = data[0].rates) 
    .then(() => console.log(currencyArray))
    .catch((err) => console.error(err));


// var currencyArray = ["testowy obiekt"];

// function createCurrencyArrayFn (x) {
//     const url = 'https://api.nbp.pl/api/exchangerates/tables/a';
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => x = data[0].rates) 
//     .then(() => console.log(x))
//     .catch((err) => console.error(err));
// };

// createCurrencyArrayFn (currencyArray);

// const url = 'https://api.nbp.pl/api/exchangerates/tables/a';
// fetch(url)
// .then((response) => response.json())
// .then((data) => currencyArray = data[0].rates) 
// .catch((err) => console.error(err));

console.log(currencyArray)

export default currencyArray
