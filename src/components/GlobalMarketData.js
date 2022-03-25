import React from 'react'
import { useGlobalContext } from '../context'
import millify from 'millify'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function GlobalMarketData() {
  const { globalMarketData } = useGlobalContext()

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
          <span className='font-medium'>Total Market Cap:</span> $
          {globalMarketData?.data?.total_market_cap.usd &&
            millify(globalMarketData?.data?.total_market_cap.usd, {
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
