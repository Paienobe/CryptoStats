import React from 'react'
import LabelIcon from '@material-ui/icons/Label'
import { useGlobalContext } from '../context'

function MarketDataCard({ market_data }) {
  const { currency, currencySymbol } = useGlobalContext()

  const marketCapObject = {
    usd: market_data?.market_cap?.usd,
    eur: market_data?.market_cap?.eur,
    gbp: market_data?.market_cap?.gbp,
    ngn: market_data?.market_cap?.ngn,
  }

  const dilutedValuationObject = {
    usd: market_data?.fully_diluted_valuation?.usd,
    eur: market_data?.fully_diluted_valuation?.eur,
    gbp: market_data?.fully_diluted_valuation?.gbp,
    ngn: market_data?.fully_diluted_valuation?.ngn,
  }

  const totalVolumeObject = {
    usd: market_data?.total_volume?.usd,
    eur: market_data?.total_volume?.eur,
    gbp: market_data?.total_volume?.gbp,
    ngn: market_data?.total_volume?.ngn,
  }

  const pickCurrency = (chosenObject) => {
    if (currency === 'usd') {
      return chosenObject.usd
    } else if (currency === 'eur') {
      return chosenObject.eur
    } else if (currency === 'gbp') {
      return chosenObject.gbp
    } else if (currency === 'ngn') {
      return chosenObject.ngn
    }
  }

  return (
    <div className='bg-gray-800 p-4 rounded-lg my-6 lg:my-0 flex flex-col justify-center'>
      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Market Cap: {currencySymbol}
          {pickCurrency(marketCapObject)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Fully Diluted Valuation: {currencySymbol}
          {pickCurrency(dilutedValuationObject)
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
      </div>

      <div className='flex items-center'>
        <LabelIcon className='text-green-500 mr-2' />
        <p>
          Trading Vol: {currencySymbol}
          {pickCurrency(totalVolumeObject)
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
