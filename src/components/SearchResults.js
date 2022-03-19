import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

function SearchResults({ coins }) {
  const { setIsSearching, setSearchInput } = useGlobalContext()
  return (
    <div className='font-xs absolute top-20 right-5 z-10 bg-gray-700 h-auto max-h-60 w-2/3 overflow-y-scroll p-2 rounded-lg sm:w-1/2 lg:w-1/3 lg:right-10'>
      {coins?.map((coin) => {
        return (
          <Link
            to={`/coin/${coin?.id}`}
            key={coin?.id}
            onClick={() => {
              setIsSearching(false)
              setSearchInput('')
            }}
          >
            <div className='flex flex-row-reverse justify-between items-center my-2 border border-transparent border-b-gray-100 border-opacity-50 py-2'>
              <p>{coin?.name}</p>
              <img src={coin?.thumb} alt={coin?.id} />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default SearchResults
