import React from 'react'

function CoinLogoCard({ image, id, symbol }) {
  return (
    <div className='mt-8 bg-gray-800 p-4 rounded-lg text-center lg:mt-0'>
      <img src={image?.large} alt={id} className='mx-auto w-1/3' />
      <p className='mt-4 capitalize font-medium text-xl'>
        {id} <span className='uppercase'>({symbol})</span>
      </p>
    </div>
  )
}

export default CoinLogoCard
