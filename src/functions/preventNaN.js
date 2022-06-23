
function preventNaN (x) {
    if (x === "NaN PLN")
        {return "Wartość zbyt długa"}
    else
        {return x}
  };

  export {preventNaN}