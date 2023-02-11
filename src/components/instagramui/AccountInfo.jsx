import React from 'react'

const AccountInfo = () => {
  return (
    <div className='mt-6 py-[10px] border-t-[0.5px] border-b-[0.5px] border-[rgba(200,200,200,0.1)]'>
        <div className='flex justify-between items-center px-[54px] text-sm '>
        <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold'>1023</div>
            <div className="text-gray-400">posts</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold'>36.3k</div>
            <div className="text-gray-400">followers</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold'>787</div>
            <div className="text-gray-400">following</div>
        </div>
        </div>
    </div>
  )
}

export default AccountInfo