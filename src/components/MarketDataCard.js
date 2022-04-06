import React from 'react'
import LabelIcon from '@material-ui/icons/Label'
import { useGlobalContext } from '../context'

function MarketDataCard({ market_data }) {
  const { currency, currencySymbol } = useGlobalContext()

  console.log(market_data)

  const marketCapInDifferentCurrencies = () => {
    if (currency === 'usd') {
      return market_data?.market_cap?.usd
    } else if (currency === 'eur') {
      return market_data?.market_cap?.eur
    } else if (currency === 'gbp') {
      return market_data?.market_cap?.gbp
    } else if (currency === 'ngn') {
      return market_data?.market_cap?.ngn
    }
  }

  const dilutedValuationInDifferentCurrencies = () => {
    if (currency === 'usd') {
      return market_data?.fully_diluted_valuation?.usd
    } else if (currency === 'eur') {
      return market_data?.fully_diluted_valuation?.eur
    } else if (currency === 'gbp') {
      return market_data?.fully_diluted_valuation?.gbp
    } else if (currency === 'ngn') {
      return market_data?.fully_diluted_valuation?.ngn
    }
  }

  const totalVolumeInDifferentCurrencies = () => {
    if (currency === 'usd') {
      return market_data?.total_volume?.usd
    } else if (currency === 'eur') {
      return market_data?.total_volume?.eur
    } else if (currency === 'gbp') {
      return market_data?.total_volume?.gbp
    } else if (currency === 'ngn') {
      return market_data?.total_volume?.ngn
    }
  }

  return (
    <div className='bg-gray-800 p-4 rounded-lg my-6 lg:my-0 flex flex-col justify-center'>
      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Market Cap: {currencySymbol}
          {marketCapInDifferentCurrencies()
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Fully Diluted Valuation: {currencySymbol}
          {dilutedValuationInDifferentCurrencies()
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Trading Vol: {currencySymbol}
          {totalVolumeInDifferentCurrencies()
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Circulating Supply:{' '}
          {market_data?.circulating_supply
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Total Supply:{' '}
          {market_data?.total_supply
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>
    </div>
  )
}

export default MarketDataCard
