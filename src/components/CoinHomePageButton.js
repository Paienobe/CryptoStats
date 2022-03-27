import React from 'react'
import LinkIcon from '@material-ui/icons/Link'

function CoinHomePageButton({ links }) {
  return (
    <div className='mt-4 hover:scale-105'>
      <a
        href={links?.homepage[0]}
        target='_blank'
        className='bg-gray-700 py-1 px-3 rounded-lg  text-sm'
      >
        <LinkIcon />{' '}
        {links?.homepage[0].includes('https://')
          ? links?.homepage[0].split('https://')
          : links?.homepage[0].split('http://')}
      </a>
    </div>
  )
}

export default CoinHomePageButton
