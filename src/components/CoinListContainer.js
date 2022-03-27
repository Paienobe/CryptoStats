import React from 'react'
import { useGlobalContext } from '../context'
import CoinCard from './CoinCard'
import LoadMoreButton from './LoadMoreButton'

function CoinListContainer() {
  const { myData, visibleCurrencies } = useGlobalContext()

  return (
    <div className='flex flex-col items-center bg-gray-700 bg-opacity-60 rounded-3xl mt-6'>
      <p className='pt-4 text-lg lg:text-2xl lg:font-medium'>
        Top Coins By Market Cap
      </p>
      <div className='coin-list-container my-2 py-0 p-4 rounded-lg flex flex-col flex-wrap sm:flex-row sm:px-0 '>
        {myData.slice(0, visibleCurrencies).map((data) => {
          return <CoinCard key={data.symbol} {...data} />
        })}
      </div>
      {visibleCurrencies < 100 ? <LoadMoreButton /> : ''}
    </div>
  )
}

export default CoinListContainer
