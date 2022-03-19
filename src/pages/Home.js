import React from 'react'
import GlobalMarketData from '../components/GlobalMarketData'
import CoinListContainer from '../components/CoinListContainer'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

function Home() {
  const { loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  return (
    <div className='bg-gray-900 h-screen overflow-y-scroll  text-white p-4 select-none lg:p-8 lg:max-w-screen-2xl m-auto'>
      <GlobalMarketData />
      <CoinListContainer />
    </div>
  )
}

export default Home
