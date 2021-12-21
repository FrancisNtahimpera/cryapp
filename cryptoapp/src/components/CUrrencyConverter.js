import { useState } from 'react';
import ExchangeRate from "./ExchangeRate";


const CurrencyConverter = () => {

    
        const currencies = [ 'BTC' , 'ETH' , 'USD' , 'XRP' , 'LTC' , 'ADA'  ]
    const [choosenPrimaryCurrency , setChoosenPrimaryCurrency] = useState('BTC')
    const [choosenSecondaryCurrency , setchoosenSecondaryCurrency] = useState('BTC')


    





  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency </td>
              <td>
                <input type="number" name="Currency-amount-1" value=""></input>
              </td>
              <td>
                <select
                  value={choosenPrimaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChoosenPrimaryCurrency(e.target.value) }
                >
                  {currencies.map((currency , _index ) =>(<option key={_index}>{currency}</option>) )}
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
                  onChange={(e) => setchoosenSecondaryCurrency(e.target.value) }
                >
                  {currencies.map((currency , _index ) =>(<option key={_index}>{currency}</option>) )}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <ExchangeRate />
      </div>
    </div>
  );
};
export default CurrencyConverter;
