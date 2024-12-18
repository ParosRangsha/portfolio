import React from 'react'
import { Link } from 'react-router-dom'
import { MdFileDownload } from "react-icons/md";

const Education = () => {
  return (
    <div className="education max-w-container mx-auto my-[50px]" id='edu'>
        <h2 className='lg:text-[48px] text-[28px] font-bold text-center lg:py-[50px] py-[15px]' >A summary of My Resume</h2>
        <div className="contain flex justify-between">
            <div className="edu w-[48%]">
                <h3 className='font-bold lg:text-[30px] text-[20px] py-[20px] lg:px-0 px-[10px]'>My Education</h3>
                <div className="mce">
                    <h3 className='font-bold lg:text-[25px] text-[14px] text-[#333] lg:px-0 px-[10px]'>Master in Computer Engineering</h3>
                    <p className='text-[#777] lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>Harvard University / 2015 - 2017</p>
                    <p className='text-justify lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold lg:text-[25px] text-[14px] text-[#333] lg:px-0 px-[10px]'>Master in Computer Engineering</h3>
                    <p className='text-[#777] lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>Harvard University / 2015 - 2017</p>
                    <p className='text-justify lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold lg:text-[25px] text-[14px] text-[#333] lg:px-0 px-[10px]'>Master in Computer Engineering</h3>
                    <p className='text-[#777] lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>Harvard University / 2015 - 2017</p>
                    <p className='text-justify lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                
            </div>
            <div className="edu w-[48%]">
                <h3 className='font-bold lg:text-[30px] text-[20px] py-[20px] lg:px-0 px-[10px]'>My Experience</h3>
                <div className="mce">
                    <h3 className='font-bold lg:text-[25px] text-[14px] text-[#333] lg:px-0 px-[10px]'>Sr. Font End Developer</h3>
                    <p className='text-[#777] lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>Apple Inc / 2020 - Current</p>
                    <p className='text-justify lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold lg:text-[25px] text-[14px] text-[#333] lg:px-0 px-[10px]'>Jr. Font End Developer</h3>
                    <p className='text-[#777] lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>Dribbble Inc / 2018 - 2022</p>
                    <p className='text-justify lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold lg:text-[25px] text-[14px] text-[#333] lg:px-0 px-[10px]'>HTML Developer</h3>
                    <p className='text-[#777] lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>Adobe Inc / 2017 - 2018</p>
                    <p className='text-justify lg:px-0 px-[10px] lg:text-[16px] text-[12px]'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
            </div>
        </div>
        <div className="download flex justify-center">
            <Link to='/' className='lg:py-[15px] py-[5px] lg:px-[30px] px-[15px] bg-[#FD6E0A] flex items-center text-[#fff]'> <p><MdFileDownload/> </p><p>Download CV</p></Link>
        </div>
    </div>
  )
}

export default Education