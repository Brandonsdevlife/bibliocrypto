import React from 'react'
import Coins from './resources/btc.png'
import './styles/row.css'
const Row = () => {
  return (
    <div>
      <div className='grid'>
      Row
      <img className='grid__images' src={Coins} alt="images" />
      <img className='grid__images' src={Coins} alt="images" />
      <img className='grid__images' src={Coins} alt="images" />
      <img className='grid__images' src={Coins} alt="images" />
      </div>
    </div>
    
  )
}

export default Row