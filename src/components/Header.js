import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { useGlobalContext } from '../context'
import SearchResults from './SearchResults'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
  const {
    searchInput,
    SearchForACoin,
    searchedCoins,
    isSearching,
    showMenu,
    displayMobileMenu,
    showCurrencyList,
    setShowCurrencyList,
    currency,
    setCurrency,
  } = useGlobalContext()

  const availableCurrencies = ['usd', 'eur', 'gbp', 'ngn']

  return (
    <header className=' p-4 bg-gray-900 text-gray-100 flex flex-wrap items-center justify-between lg:px-10 lg:max-w-screen-2xl m-auto fixed left-0 right-0 z-20'>
      <Link to='/'>
        <h1 className='text-2xl font-semibold'>
          Crypto
          <span className='text-green-500 '>Stats</span>
        </h1>
      </Link>

      {showMenu && (
        <div className='text-right bg-gray-700 p-4 absolute right-4 top-14 sm:w-1/5 text-xl z-20 border-2 border-gray-100 border-opacity-20 lg:static lg:bg-transparent lg:border-0 lg:text-left lg:p-0 lg:pl-8 lg:w-1/3'>
          <Link to='/portfolio' onClick={displayMobileMenu}>
            <p className='py-2 hover:scale-110 lg:hover:bg-opacity-70 lg:bg-gray-700 lg:px-2 lg:w-min lg:rounded-lg lg:bg-opacity-30'>
              Portfolio
            </p>
          </Link>
          <hr className='lg:hidden' />
          <Link to='/' onClick={displayMobileMenu}>
            <p className='py-2 hover:scale-110 lg:hidden'>Coins</p>
          </Link>
        </div>
      )}

      <button className='lg:hidden' onClick={displayMobileMenu}>
        <MenuIcon />
      </button>

      <div className='flex items-center bg-gray-800 px-4 rounded-xl w-full mt-2 lg:w-2/5 lg:mt-0'>
        <SearchIcon className='text-green-500' />
        <input
          type='text'
          className='py-1 px-2 my-2 rounded-lg bg-gray-800 ml-2 outline-none w-full'
          placeholder='Search'
          value={searchInput}
          onChange={SearchForACoin}
        />
        {isSearching ? <SearchResults {...searchedCoins} /> : ''}
      </div>

      <div className='absolute top-4 right-20 lg:static'>
        <div className=' py-1 p-3 bg-gray-700 bg-opacity-30 rounded-lg lg:px-8 relative lg:py-3'>
          <button
            type='button'
            onClick={() => {
              setShowCurrencyList(!showCurrencyList)
            }}
          >
            {currency.toUpperCase()}
          </button>
          {showCurrencyList && (
            <div className='absolute top-10 bg-gray-800 p-2 left-0 lg:top-14 lg:right-0 border border-white border-opacity-30'>
              {availableCurrencies.map((currency, index) => {
                return (
                  <p
                    className='lg:text-center hover:scale-105 cursor-pointer'
                    key={index}
                    onClick={(e) => {
                      setCurrency(e.target.innerText.toLowerCase())
                      setShowCurrencyList(false)
                    }}
                  >
                    {currency.toUpperCase()}
                  </p>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
