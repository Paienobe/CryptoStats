import React from 'react'
import { useGlobalContext } from '../context'

function PortfolioPage() {
  const { portfolioItems } = useGlobalContext()
  return (
    <div className='h-screen pt-32 text-gray-100 p-4 flex flex-col items-center'>
      <button className='p-2 bg-green-500 rounded-xl my-4 hover:bg-green-700 active:scale-50'>
        Add Assets
      </button>

      <div className=''>
        {portfolioItems.length < 1 ? (
          <p className='text-center text-2xl'>No items in portfolio</p>
        ) : (
          portfolioItems.map((item, index) => {
            return <p>{index}</p>
          })
        )}
      </div>
    </div>
  )
}

export default PortfolioPage
