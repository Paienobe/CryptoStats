import React, { useRef, useState } from 'react'
import { useGlobalContext } from '../context'
import SearchResults from './SearchResults'

const PortfolioItemModal = () => {
  const {
    setShowSelectionModal,
    SearchForACoin,
    searchedCoins,
    searchInput,
    setSearchInput,
    isSearching,
    setIsSearching,
    fetchDataForPortfolioPage,
    setPortfolioItems,
    portfolioItems,
    selectedCoin,
  } = useGlobalContext()
  const [coinName, setCoinName] = useState('')
  const dateRef = useRef(null)
  const amountPurchasedRef = useRef(null)
  return (
    <div className='bg-gray-700 p-4 absolute left-4 right-4 top-4 bottom-4 rounded-lg z-20 flex flex-col items-center justify-center select-none lg:mx-auto lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 lg:w-full lg:pt-0'>
      <div className='relative w-full mb-4 flex items-center justify-between'>
        <h1 className='text-center font-semibold text-2xl lg:flex-1'>
          Select Coins
        </h1>
        <button
          className='text-green-500 text-3xl font-medium hover:scale-125 hover:text-red-500 active:scale-75 lg:absolute lg:right-96 lg:text-5xl'
          onClick={() => {
            setSearchInput('')
            setShowSelectionModal(false)
            setIsSearching(false)
          }}
        >
          x
        </button>
      </div>

      <div>
        <form
          className='relative'
          onSubmit={(e) => {
            e.preventDefault()
            fetchDataForPortfolioPage(
              `https://api.coingecko.com/api/v3/coins/${searchInput}`,
              dateRef.current.value,
              amountPurchasedRef.current.value
            )
            setSearchInput('')
            setShowSelectionModal(false)
          }}
        >
          <input
            type='text'
            className='w-full my-2 p-2 bg-gray-800 rounded-xl outline-none placeholder-white'
            placeholder='Coin Name...'
            value={searchInput}
            onChange={SearchForACoin}
            required
          />
          {isSearching && (
            <div className='absolute max-h-32 overflow-y-scroll bg-gray-800 bg-opacity-80 border-2 border-gray-100 right-0 p-2 w-3/5 text-sm'>
              {searchedCoins?.coins?.map((coin, index) => (
                <p
                  key={index}
                  className=' border border-transparent border-b-white py-2 cursor-pointer hover:text-gray-400'
                  onClick={() => {
                    setSearchInput(coin?.id)
                    setIsSearching(false)
                  }}
                >
                  {coin?.id}
                </p>
              ))}
            </div>
          )}

          <input
            type='number'
            className='w-full my-2 p-2 bg-gray-800 rounded-xl outline-none placeholder-white'
            placeholder='Amount Owned...'
            ref={amountPurchasedRef}
            required
          />
          <input
            type='date'
            className='w-full my-2 p-2 bg-gray-800 rounded-xl outline-none placeholder-white'
            ref={dateRef}
            required
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

          <div className='flex flex-col lg:flex-row'>
            <button
              type='button'
              className='bg-gray-100 w-full text-red-400 py-2 font-bold rounded-lg hover:bg-red-400 hover:text-red-100 active:scale-75 lg:m-2'
              onClick={() => {
                setSearchInput('')
                setShowSelectionModal(false)
                setIsSearching(false)
              }}
            >
              Close
            </button>
            <button
              type='submit'
              className='bg-green-500 w-full text-green-100 py-2 font-bold rounded-lg mt-2 lg:m-2 hover:bg-green-700 active:scale-75'
            >
              Save & Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PortfolioItemModal
