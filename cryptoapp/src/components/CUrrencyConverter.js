import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH" , "BIF" , "EUR" , "USD", "XRP", "LTC", "ADA" , "BNB","CAKE", "COMP","DOGE","DOT","EGLD"];
  const [choosenPrimaryCurrency, setChoosenPrimaryCurrency] = useState("BTC");
  const [choosenSecondaryCurrency, setchoosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  console.log("montant demander "+amount);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        to_currency: choosenSecondaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: choosenPrimaryCurrency
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "03d336ba4bmsh1027175a3e143ddp1cb70ejsna307e70c5cb7",
      }
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
           response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount)
      }).catch((error) => {
        console.error(error)
      })
  };
  console.log('taux de change '+ exchangeRate);
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency </td>
              <td>
                <input
                  type="number"
                  name="Currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={choosenPrimaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChoosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency </td>
              <td>
                <input
                  type="number"
                  name="Currency-amount-2"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={choosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setchoosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>
          CONVERT
        </button>

      
      </div>
           
           <div className="exchange-rate">
        <h3>Exchange RAte</h3>
        <h4>{"voici le taux de change  " + exchangeRate}</h4>
      </div>
    </div>
  )
}
export default CurrencyConverter;
