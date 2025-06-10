const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultText = document.getElementById("resultText");
const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");

// 🧠 Using Your API Key
const API_KEY = "ea56c1189e8baa0526a681ec";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

// 📥 Fetch list of currencies and populate dropdowns
async function loadCurrencies() {
  const res = await fetch(`${BASE_URL}/codes`);
  const data = await res.json();
  const options = data.supported_codes;

  options.forEach(([code, name]) => {
    const opt1 = new Option(`${code} - ${name}`, code);
    const opt2 = new Option(`${code} - ${name}`, code);
    fromCurrency.add(opt1.cloneNode(true));
    toCurrency.add(opt2.cloneNode(true));
  });

  fromCurrency.value = "USD";
  toCurrency.value = "EUR";
}

loadCurrencies();

// 🔁 Switch currencies
switchBtn.addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convertCurrency();
});

// 🔁 Convert currency using Pair endpoint
convertBtn.addEventListener("click", convertCurrency);

async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);

  if (!amount || amount <= 0) {
    resultText.textContent = "Please enter a valid amount.";
    return;
  }

  resultText.textContent = "Loading...";

  try {
    const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    const data = await res.json();

    if (data.result === "success") {
      resultText.textContent = `${amount} ${from} = ${data.conversion_result.toFixed(2)} ${to}`;
    } else {
      resultText.textContent = "Conversion failed.";
    }
  } catch (err) {
    resultText.textContent = "Error fetching exchange data.";
    console.error(err);
  }
}
