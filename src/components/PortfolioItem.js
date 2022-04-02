import React from 'react'
import { useGlobalContext } from '../context'

const PortfolioItem = ({ chosenCoin, date, quantity }) => {
  // const { id, image, current_price, price_change_24h, symbol } = chosenCoin
  return (
    <div className='mt-4 mb-8 bg-gray-800 p-4 rounded-xl lg:flex lg:items-center lg:w-full'>
      <div className='bg-gray-700 rounded-lg py-2 lg:w-1/6 h-full lg:mr-8 lg:py-4'>
        <img
          src={chosenCoin?.image.large}
          alt={chosenCoin?.id}
          className='w-1/3 mx-auto'
        />
        <p className='text-center capitalize mt-2 text-lg'>
          {chosenCoin?.id} ({chosenCoin?.symbol.toUpperCase()})
        </p>
      </div>

      <div>
        <div className='my-2'>
          <p className='text-yellow-400 text-xl font-medium'>Market Price</p>
          <div className='lg:flex font-medium'>
            <p className='lg:mr-4'>
              Current Price:{' '}
              <span className='text-green-500 font-normal'>
                $
                {chosenCoin?.market_data?.current_price?.usd
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </p>
            <p className='lg:mr-4'>
              Price Change 24h:{' '}
              <span
                className={`${
                  chosenCoin?.market_data?.price_change_percentage_24h
                    ?.toString()
                    ?.includes('-')
                    ? 'text-red-500'
                    : 'text-green-500'
                } font-normal`}
              >
                {chosenCoin?.market_data?.price_change_percentage_24h
                  ?.toFixed(2)
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                %
              </span>
            </p>
          </div>
        </div>

        <div className='my-2'>
          <p className='text-yellow-400 text-xl font-medium'>Your Coin</p>
          <div className='lg:flex font-medium'>
            <p className='lg:mr-4'>
              Purchased Amount:{' '}
              <span className='text-green-500 font-normal'>
                {quantity?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </p>
            <p className='lg:mr-4'>
              Amount Value:{' '}
              <span className='text-green-500 font-normal'>
                $
                {(chosenCoin?.market_data?.current_price?.usd * quantity)
                  .toFixed(2)
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </p>
            <p className='lg:mr-4'>
              Purchase Date:{' '}
              <span className='text-green-500 font-normal'>{date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
