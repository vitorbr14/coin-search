import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Coin from '../src/routes/Coin'


function App() {

  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false'
   console.log('esta é a variável coins' + coins)
  useEffect(()=>{
    axios.get(url).then((response)=> {
      setCoins(response.data)
      console.log(response.data)
    }).catch((err)=> {
      console.log(err)
    })
  }, [])
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Coins coins={coins} />} />
      <Route path='/coin' element={<Coin />}>
        <Route path=":coinId" element={<Coin />}/>

      </Route>
    </Routes>
    
    </>
  );
}

export default App;
