import React from 'react'
import { useGlobalContext } from '../context'
import CoinCard from './CoinCard'
import LoadMoreButton from './LoadMoreButton'

function CoinListContainer() {
  const { myData, visibleCurrencies } = useGlobalContext()

  return (
    <div className='flex flex-col items-center'>
      <div className='coin-list-container my-2 p-4 rounded-lg flex flex-col flex-wrap sm:flex-row sm:px-0 '>
        {myData.slice(0, visibleCurrencies).map((data) => {
          return <CoinCard key={data.symbol} {...data} />
        })}
      </div>
      {visibleCurrencies < 100 ? <LoadMoreButton /> : ''}
    </div>
  )
}

export default CoinListContainer
