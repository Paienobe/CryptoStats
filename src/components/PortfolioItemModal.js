import React from 'react'

const PortfolioItemModal = () => {
  return (
    <div className='bg-gray-700  p-4 rounded-xl absolute left-4 right-4  z-20'>
      <h1 className='text-center font-medium text-2xl'>Select Coins</h1>
      <div>
        <form>
          <input
            type='text'
            className='w-full my-2 p-2 bg-gray-800 rounded-xl outline-none'
            placeholder='Coin Name...'
          />
          <input
            type='number'
            className='w-full my-2 p-2 bg-gray-800 rounded-xl outline-none'
            placeholder='Amount Owned...'
          />
          <input
            type='date'
            className='w-full my-2 p-2 bg-gray-800 rounded-xl outline-none'
          />

          <div className='bg-gray-800 rounded-xl  w-2/3 mx-auto'>
            <ol className='list-decimal list-inside px-4 py-1 text-sm'>
              <li className='my-2'>
                Type coin name, then select from dropdown
              </li>
              <li className='my-2'>Type amount owned (default: 0)</li>
              <li className='my-2'>Type date purchased (default: today)</li>
            </ol>
          </div>

          <p className='text-center text-sm my-2'>
            **If you submit a coin already in your inventory it will overwrite
            previous data.
          </p>

          <button
            type='button'
            className='bg-gray-100 w-full text-red-400 py-2 font-bold rounded-lg hover:bg-red-400 hover:text-red-100 active:scale-75'
          >
            Close
          </button>
          <button
            type='submit'
            className='bg-green-500 w-full text-green-100 py-2 font-bold rounded-lg mt-2 hover:bg-green-600 active:scale-75'
          >
            Save & Close
          </button>
        </form>
      </div>
    </div>
  )
}

export default PortfolioItemModal
