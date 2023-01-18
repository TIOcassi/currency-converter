let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.65;
let rateUSD = 4.38;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});