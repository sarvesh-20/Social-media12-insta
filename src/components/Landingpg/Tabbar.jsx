import React from 'react'
import Postcard from './Postcard'

const Tabbar = () => {
  return (
    <div>
        <div className='space-x-12 p-4 Tabbar'>
          <span className='flex-1 hover:border bottom-1 '>Timeline</span>
          <span className='flex-1 '>Notification</span>
          <span className='flex-1 '>Your Profile</span>
        </div>
        < Postcard/>
    </div>
  )
}

export default Tabbar