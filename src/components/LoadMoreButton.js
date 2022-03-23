import React from 'react'
import { useGlobalContext } from '../context'

function LoadMoreButton() {
  const { showMoreCoins } = useGlobalContext()
  return (
    <button
      className='bg-gray-800 py-2 px-4 rounded-xl hover:scale-125'
      onClick={showMoreCoins}
    >
      Show More
    </button>
  )
}

export default LoadMoreButton
