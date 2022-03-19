import React from 'react'
import { useGlobalContext } from '../context'

function ExtraRowDetails() {
  const { myData } = useGlobalContext()
  return (
    <div className='extra text-sm'>
      {myData.map((data, index) => {
        return (
          <div key={index} className='flex justify-between py-2'>
            <p>{data.price_change_percentage_1h_in_currency}%</p>
            <p>{data.price_change_percentage_24h}%</p>
            <p>{data.total_volume}</p>
            <p>{data.market_cap}</p>
            <p>{data.circulating_supply}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ExtraRowDetails
