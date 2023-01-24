{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.65;
        const rateUSD = 4.38;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
        };
    };

    const resultText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const submit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultText(amount, currency, result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", submit);
    };

    init ();
};