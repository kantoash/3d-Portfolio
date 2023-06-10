import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
const HeaderCTA = () => {
  return (
    <div>
      <button className='ml-[180px] flex items-center gap-2 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black py-4 px-8 rounded-2xl text-xl'>
        <span>Get In Touch</span>
          <BsChevronRight/>
      </button>
    </div>
  )
}

export default HeaderCTA