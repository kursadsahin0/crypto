import React, { useState, useEffect } from "react";
import axios from "axios";


function Table() {
    const [coinData, setCoinData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoinData(result.data);
      };
      fetchData();
    }, []);
  return (
    <>
    <div className="App">
   <h1 className="title">Crypto Currency Prices</h1>
   <table>
     <thead className="thead">
       <tr>
         <th>Rank</th>
         <th>Image</th>
         <th>Name</th>
         <th>Symbol</th>
         <th>Price</th>
         <th>24h Change</th>
         <th>Market Cap</th>
       </tr>
     </thead>
     <tbody>
       {coinData.map((coin) => (
         <tr key={coin.id}>
           <td>{coin.market_cap_rank}</td>
           <td>
             <img src={coin.image} alt={coin.name} width="25" height="25" />
           </td>
           <td>{coin.name}</td>
           <td>{coin.symbol.toUpperCase()}</td>
           <td>${coin.current_price.toLocaleString()}</td>
           <td className={coin.price_change_percentage_24h >= 0 ? "green" : "red"}>
             {coin.price_change_percentage_24h.toFixed(2)}%
           </td>
           <td>${coin.market_cap.toLocaleString()}</td>
         </tr>
       ))}
     </tbody>
   </table>
 </div>

 
 </>
  )
}

export default Table

