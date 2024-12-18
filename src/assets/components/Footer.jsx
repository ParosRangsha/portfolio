import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer bg-[#00000015]">
      <div className="contain max-w-container mx-auto lg:py-[100px] py-[20px] flex justify-between">
        <div className="connect w-[48%]">
          <h2 className='lg:text-[35px] text-[22px] font-bold py-[15px] lg:px-0 px-[10px]'>Let's Connect</h2>
          <p className='text-justify lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
          <div className="link lg:w-1/4 w-1/2 flex justify-between text-[#FD6E0A] px-[10px] lg:px-0">
            <FaFacebookF/> <FaTwitter/> <FaInstagram/>
          </div>
        </div>
        <div className="message w-[48%]">
          <h2 className='lg:text-[35px] text-[22px] font-bold py-[15px]'>Let’s Message me</h2>
          <input type="text" className='lg:py-[10px] py-[5px] lg:px-[15px] px-[8px] lg:text-[16px] text-[12px] w-full my-[5px]' placeholder='Your name'/>
          <input type="text" className='lg:py-[10px] py-[5px] lg:px-[15px] px-[8px] lg:text-[16px] text-[12px] w-full my-[5px]' placeholder='Your email'/>
          <textarea name="message" id="message" placeholder='Message' className='lg:px-[15px] px-[8px] w-full my-[5px] lg:h-[120px] h-[70px]'></textarea>
          <Link to='/' className='lg:py-[15px] py-[15px] px-[30px] bg-[#FD6E0A] my-[5px] inline-block rounded-[5px]'>Submit</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer