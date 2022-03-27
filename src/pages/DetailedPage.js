import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import CoinLogoCard from '../components/CoinLogoCard'
import PriceDataCard from '../components/PriceDataCard'
import MarketDataCard from '../components/MarketDataCard'
import DescriptionHolder from '../components/DescriptionHolder'
import CoinChart from '../components/CoinChart'
import ChartFilter from '../components/ChartFilter'
import Loading from '../components/Loading'

function DetailedPage() {
  const {
    infoPageData,
    fetchDataForInfoPage,
    chartData,
    chartTime,
    fetchDataForChart,
    loading,
  } = useGlobalContext()
  const coinName = useParams().name.toLowerCase()
  const fullCoinDataUrl = `https://api.coingecko.com/api/v3/coins/${coinName}`
  const chartApiUrl = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${chartTime}`

  useEffect(() => {
    fetchDataForInfoPage(fullCoinDataUrl)
    fetchDataForChart(chartApiUrl)
  }, [chartTime, coinName])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='h-full bg-gray-900 text-white p-4  select-none  lg:p-8 lg:max-w-screen-2xl m-auto'>
      <Link to='/'>
        <button className='bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-500 mt-16'>
          Back
        </button>
      </Link>

      <div className='my-4 lg:flex lg:justify-between lg:items-stretch lg:my-8'>
        <CoinLogoCard {...infoPageData} />

        <PriceDataCard {...infoPageData} />

        <MarketDataCard {...infoPageData} />
      </div>
      <CoinChart chartData={chartData} />

      <ChartFilter />

      <DescriptionHolder {...infoPageData} />

      {/* <CoinHomePageButton {...infoPageData} /> */}
    </div>
  )
}

export default DetailedPage
