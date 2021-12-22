import CurrencyConverter from "./CUrrencyConverter"

const ExchangeRate  = ({exchangeRate}) => {
    return (
      <div className="exchange-rate">
        <h3>Exchange RAte</h3>
        <h4>{"voici le taux de change " + exchangeRate}</h4>
      </div>
    )
  }
  export default ExchangeRate
  
  