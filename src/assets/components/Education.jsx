import React from 'react'
import { Link } from 'react-router-dom'
import { MdFileDownload } from "react-icons/md";

const Education = () => {
  return (
    <div className="education max-w-container mx-auto my-[50px]" id='edu'>
        <h2 className='text-[48px] font-bold text-center py-[50px]' >A summary of My Resume</h2>
        <div className="contain flex justify-between">
            <div className="edu w-[48%]">
                <h3 className='font-bold text-[30px] py-[20px]'>My Education</h3>
                <div className="mce">
                    <h3 className='font-bold text-[25px] text-[#333]'>Master in Computer Engineering</h3>
                    <p className='text-[#777]'>Harvard University / 2015 - 2017</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold text-[25px] text-[#333]'>Master in Computer Engineering</h3>
                    <p className='text-[#777]'>Harvard University / 2015 - 2017</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold text-[25px] text-[#333]'>Master in Computer Engineering</h3>
                    <p className='text-[#777]'>Harvard University / 2015 - 2017</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
            </div>
            <div className="edu w-[48%]">
                <h3 className='font-bold text-[30px] py-[20px]'>My Experience</h3>
                <div className="mce">
                    <h3 className='font-bold text-[25px] text-[#333]'>Sr. Font End Developer</h3>
                    <p className='text-[#777]'>Apple Inc / 2020 - Current</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold text-[25px] text-[#333]'>Jr. Font End Developer</h3>
                    <p className='text-[#777]'>Dribbble Inc / 2018 - 2022</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
                <div className="mce">
                    <h3 className='font-bold text-[25px] text-[#333]'>HTML Developer</h3>
                    <p className='text-[#777]'>Adobe Inc / 2017 - 2018</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above 
                    to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                    <hr className='bg-[#ddd] h-[2px] my-[10px]'/>
                </div>
            </div>
        </div>
        <div className="download flex justify-center">
            <Link to='/' className='py-[15px] px-[30px] bg-[#FD6E0A] flex items-center text-[#fff]'> <p><MdFileDownload/> </p><p>Download CV</p></Link>
        </div>
    </div>
  )
}

export default Education