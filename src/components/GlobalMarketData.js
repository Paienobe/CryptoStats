import React from 'react'
import { useGlobalContext } from '../context'
import millify from 'millify'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function GlobalMarketData() {
  const { globalMarketData, currency, currencySymbol } = useGlobalContext()

  const globalMarketCapObject = {
    usd: globalMarketData?.data?.total_market_cap.usd,
    eur: globalMarketData?.data?.total_market_cap.eur,
    gbp: globalMarketData?.data?.total_market_cap.gbp,
    ngn: globalMarketData?.data?.total_market_cap.ngn,
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
    <div className='mt-24 p-2 mx-auto text-xs flex items-center justify-center lg:w-2/3'>
      <div className='flex flex-row items-center w-full justify-center'>
        <p className='mr-4'>
          <span className='font-medium'>Coins:</span>{' '}
          {globalMarketData?.data?.active_cryptocurrencies
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>

        <p>
          <span className='font-medium'>Total Market Cap:</span>{' '}
          {currencySymbol}
          {globalMarketData?.data?.total_market_cap.usd &&
            millify(pickCurrency(globalMarketCapObject), {
              precision: 2,
            })}
          <span
            className={`${
              globalMarketData?.data?.market_cap_change_percentage_24h_usd?.toString()[0] ===
              '-'
                ? 'text-red-500'
                : 'text-green-500'
            } text-xs ml-1`}
          >
            {globalMarketData?.data?.market_cap_change_percentage_24h_usd
              ?.toFixed(2)
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            %
          </span>
        </p>
      </div>
    </div>
  )
}

export default GlobalMarketData
