import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { useGlobalContext } from '../context'
import SearchResults from './SearchResults'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
  const { searchInput, SearchForACoin, searchedCoins, isSearching } =
    useGlobalContext()

  return (
    <header className=' p-4 bg-gray-900 text-gray-100 flex flex-wrap items-center justify-between lg:px-10 lg:max-w-screen-2xl m-auto fixed left-0 right-0 z-20'>
      <Link to='/'>
        <h1 className='text-2xl font-semibold'>
          Crypto
          <span className='text-green-500 '>Stats</span>
        </h1>
      </Link>

      <button className='lg:hidden'>
        <MenuIcon />
      </button>

      <div className='flex items-center bg-gray-800 px-4 rounded-xl w-full mt-2 lg:w-1/2 lg:mt-0'>
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
    </header>
  )
}

export default Header
