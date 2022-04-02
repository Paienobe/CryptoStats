import React from 'react'
import { useGlobalContext } from '../context'
import PortfolioItemModal from '../components/PortfolioItemModal'
import PortfolioItem from '../components/PortfolioItem'

function PortfolioPage() {
  const { portfolioItems, showSelectionModal, setShowSelectionModal } =
    useGlobalContext()
  return (
    <div className='h-screen pt-32 text-gray-100 p-4 flex flex-col items-center relative w-full'>
      <button
        className='p-2 bg-green-500 rounded-xl my-4 lg:w-1/6 lg:py-4 lg:text-xl hover:bg-green-700 active:scale-50'
        onClick={() => {
          setShowSelectionModal(true)
        }}
      >
        Add Assets
      </button>

      <div>
        <h1 className='text-center text-2xl text-yellow-400 '>
          Your Statistics
        </h1>

        <div className='mt-8'>
          {portfolioItems.length < 1 ? (
            <p className='text-center text-2xl'>No items in portfolio</p>
          ) : (
            portfolioItems.map((item) => {
              return <PortfolioItem key={item?.chosenCoin?.id} {...item} />
            })
          )}
        </div>
      </div>

      {showSelectionModal && <PortfolioItemModal />}
    </div>
  )
}

export default PortfolioPage
