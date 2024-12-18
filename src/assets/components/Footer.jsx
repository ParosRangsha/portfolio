import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer bg-[#00000015]">
      <div className="contain max-w-container mx-auto py-[100px] flex justify-between">
        <div className="connect w-[48%]">
          <h2 className='text-[35px] font-bold py-[15px]'>Let's Connect</h2>
          <p className='text-justify'>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
          <div className="link w-1/4 flex justify-between text-[#FD6E0A]">
            <FaFacebookF/> <FaTwitter/> <FaInstagram/>
          </div>
        </div>
        <div className="message w-[48%]">
          <h2 className='text-[35px] font-bold py-[15px]'>Let’s Message me</h2>
          <input type="text" className='py-[10px] px-[15px] w-full my-[5px]' placeholder='Your name'/>
          <input type="text" className='py-[10px] px-[15px] w-full my-[5px]' placeholder='Your email'/>
          <textarea name="message" id="message" placeholder='Message' className='px-[15px] w-full my-[5px] h-[120px]'></textarea>
          <Link to='/' className='py-[15px] px-[30px] bg-[#FD6E0A] my-[5px] inline-block rounded-[5px]'>Submit</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer