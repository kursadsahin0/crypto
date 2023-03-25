import React, {useEffect, useState} from 'react';
import CurrencyOptions from './CurrencyOptions';
import '../styles/Currency.css';

function Converter() {
    const [currencyOptions , setCurrencyOptions] = useState([])
  const [fromAmount , setFromAmount] = useState(0)
  const [toAmount , setToAmount] = useState(0)
  const [fromCurrency , setFromCurrency] = useState('')
  const [toCurrency , setToCurrency] = useState('')
  const [currencyNames , setCurrencyNames] = useState({})
  useEffect(() =>{
      fetch(`https://api.frankfurter.app/currencies`).then(res => res.json()).then(data => {
        setCurrencyOptions(Object.keys(data))
        setFromCurrency(Object.keys(data)[0])
        setToCurrency(Object.keys(data)[0])
        setCurrencyNames(data)
      })
  },[])
  useEffect(() => {
    if(parseInt(fromAmount) === 0){
      setToAmount(0)
    } else if(fromAmount === ''){
      setToAmount('')
    } else if(fromCurrency === toCurrency){
      setToAmount(fromAmount)
    } else {
      fetch(`https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`).then(res => res.json()).then(data => setToAmount(Object.values(data.rates)[0]))
    }
  },[fromCurrency , toCurrency , fromAmount , toAmount])
  return (
    <div >
       <h1 style={{textAlign:"center"}} className='text'>Currency Converter</h1>
      <div className = "container">
        <form>
        <div className = "item1">
          <div className = "opt-1">
            <h2 className='text'>From Currency : </h2>
            <CurrencyOptions prop = "From currency" fromCurrency = {fromCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setFromCurrency(e.target.value)}/>
          </div>
          <div className = "opt-2">
            <h2 className='text'>To Currency : </h2>
            <CurrencyOptions prop = "To currency" toCurrency = {toCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setToCurrency(e.target.value)}/>
          </div>
        </div>
        <div className = "item2">
          <h2 className='text'>Enter Amount in {currencyNames[`${fromCurrency}`]} : </h2>
          <input type = "number" autoComplete = "off" value = {fromAmount} className = "input" onChange = {e => setFromAmount(e.target.value)}/>   
          <h2 className='text'>Output in {currencyNames[`${toCurrency}`]} : </h2>
          <input className = "output" disabled value = {toAmount} type="text"/>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Converter
