import React from 'react'
import LinkIcon from '@material-ui/icons/Link'

function CoinHomePageButton({ links }) {
  return (
    <div className='mt-4'>
      <a
        href={links?.homepage[0]}
        target='_blank'
        className='bg-green-500 py-1 px-3 rounded-lg hover:bg-green-700'
      >
        <LinkIcon /> HOMEPAGE
      </a>
    </div>
  )
}

export default CoinHomePageButton
