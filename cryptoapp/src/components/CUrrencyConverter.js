import { useState } from 'react';
import ExchangeRate from "./ExchangeRate";
import axios from 'axios';

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [choosenPrimaryCurrency, setChoosenPrimaryCurrency] = useState("BTC");
  const [choosenSecondaryCurrency, setchoosenSecondaryCurrency] =useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
   
  //console.log(amount);
  
  const convert = () => {
     

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {to_currency: choosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: choosenSecondaryCurrency},
        headers: {
          'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
          'x-rapidapi-key': '2d927652d4msh0e4d92671477f29p190d09jsn7573cb1a4d74'
        }
      };

    axios.request(options).then((response) => {
        console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
        setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
      }).catch((error) => {
        console.error(error)
      })
  } 
  console.log(exchangeRate);
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
                <input type="number" name="Currency-amount-1" value=""></input>
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
        <button id="convert-button" onClick={convert}>CONVERT</button>

        <ExchangeRate />
      </div>
    </div>
  );
};
export default CurrencyConverter;
