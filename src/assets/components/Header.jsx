import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header bg-[#00000010]">
      <div className="flex max-w-container mx-auto items-center py-[10px]">
        <div className="logo w-2/6">
          <h1 className='text-[32px] text-[#55f] font-[700]'>MARY</h1>
        </div>
        <div className="menu w-4/6 flex justify-end">
          <ul className='flex'>
            <li><Link to='/' className='py-[15px] inline-block px-[30px] font-[700] rounded-[5px] hover:text-[#fff] hover:bg-[#FD6E0A] transition duration-500 mx-[3px]'>Portfolio</Link></li>
            <li><Link to='/' className='py-[15px] inline-block px-[30px] font-[700] rounded-[5px] hover:text-[#fff] hover:bg-[#FD6E0A] transition duration-500 mx-[3px]'>Blog</Link></li>
            <li><Link to='/' className='py-[15px] inline-block px-[30px] font-[700] rounded-[5px] hover:text-[#fff] hover:bg-[#FD6E0A] transition duration-500 mx-[3px]'>Hire Me</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header