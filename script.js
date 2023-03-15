const currencyFirstEl = document.getElementById('currency__first');
const currencySecondEl = document.getElementById('currency__second');
const worthFirstEl = document.getElementById('worth__first');
const worthSecondEl = document.getElementById('worth__second');
const exchangeRateEl = document.getElementById('exchange__rate');

updateRate()


function updateRate() {
  fetch(`https://v6.exchangerate-api.com/v6/91d21b9bcfb92d05abae9588/latest/${currencyFirstEl.value}`).then((res) => res.json()).then((data) => {const rate = data.conversion_rates[currencySecondEl.value];
  exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " +  currencySecondEl.value}`;
  worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)                                                  });
}

currencyFirstEl.addEventListener('change', updateRate);
currencySecondEl.addEventListener('change', updateRate);
worthFirstEl.addEventListener('input', updateRate);