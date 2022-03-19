import React from 'react'

function DescriptionHolder({ description }) {
  const descriptionText = description?.en

  return (
    <div className='mt-8'>
      <p className='font-medium text-xl'>DESCRIPTION:</p>
      <p
        className='description-text text-justify'
        dangerouslySetInnerHTML={{ __html: descriptionText }}
      />
    </div>
  )
}

export default DescriptionHolder
