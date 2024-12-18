import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header bg-[#ddd] sticky w-full top-0 left-0 z-[999]">
      <div className="flex max-w-container mx-auto items-center py-[10px]">
        <div className="logo w-2/6">
          <h1 className='lg:text-[32px] text-[22px] lg:px-0 px-[10px] text-[#55f] font-[700]'>MARY</h1>
        </div>
        <div className="menu w-4/6 flex justify-end">
          <ul className='flex'>
            <li><Link to='/' className='lg:py-[15px] py-[5px] lg:px-[30px] px-[15px] inline-block font-[700] rounded-[5px] hover:text-[#fff] hover:bg-[#FD6E0A] transition duration-500 mx-[3px]'>Portfolio</Link></li>
            <li><Link to='/' className='lg:py-[15px] py-[5px] lg:px-[30px] px-[15px] inline-block font-[700] rounded-[5px] hover:text-[#fff] hover:bg-[#FD6E0A] transition duration-500 mx-[3px]'>Blog</Link></li>
            <li><Link to='/' className='lg:py-[15px] py-[5px] lg:px-[30px] px-[15px] inline-block font-[700] rounded-[5px] hover:text-[#fff] hover:bg-[#FD6E0A] transition duration-500 mx-[3px]'>Hire Me</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header