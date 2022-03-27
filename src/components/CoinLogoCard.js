import React from 'react'
import CoinHomePageButton from './CoinHomePageButton'

function CoinLogoCard({ image, id, symbol, links }) {
  return (
    <div className='mt-8 bg-gray-800 p-4 rounded-lg text-center lg:mt-0'>
      <img src={image?.large} alt={id} className='mx-auto w-1/3' />
      <p className='mt-4 capitalize font-medium text-xl'>
        {id} <span className='uppercase'>({symbol})</span>
      </p>
      <CoinHomePageButton links={links} />
    </div>
  )
}

export default CoinLogoCard
