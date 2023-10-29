function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    let convertedAmount;

    const conversionRates = {
        'INR_TO_USD': 0.014,
        'INR_TO_EUR': 0.012,
        'INR_TO_GBP': 0.011,
        'USD_TO_INR': 71.39,
        'EUR_TO_INR': 88.19,
        'GBP_TO_INR': 98.43,
        'USD_TO_EUR': 0.85,
        'USD_TO_GBP': 0.75,
        'EUR_TO_USD': 1.18,
        'EUR_TO_GBP': 0.89,
        'GBP_TO_USD': 1.34,
        'GBP_TO_EUR': 1.12
    };

    const key = `${from}_TO_${to}`;
    const reverseKey = `${to}_TO_${from}`;

    if (conversionRates[key]) {
        convertedAmount = amount * conversionRates[key];
    } else if (conversionRates[reverseKey]) {
        convertedAmount = amount / conversionRates[reverseKey];
    } else {
        convertedAmount = 'Conversion not supported';
    }

    document.getElementById('result').innerText = convertedAmount.toFixed(2) + ' ' + to;
}