import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { FaRegFileExcel } from "react-icons/fa6";
import { FaRegFileWord } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Do = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
  return (
    <div className="max-w-container mx-auto lg:my-[50px] my-[0px] lg:py-[50px] py-[0px] px-[50px]">
        <h2 className='text-[35px] font-bold text-center'>What I do</h2>
        <p className='text-justify py-[30px] lg:px-[150px] px-[10px]'>I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
        <div className="done bg-[#00000030] p-[30px]">
            

            <Slider {...settings}>
                <div className="item bg-[#fff] lg:p-[30px] p-[5px] w-[23%] mx-[5px]">
                    <p className='text-[30px] text-center flex justify-center items-center'><IoLogoJavascript/></p>
                    <p className='font-bold lg:text-[22px] text-[16px]  text-center py-[10px]'>Vanilla JavaScript</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="item bg-[#fff] lg:p-[30px] p-[5px] w-[24%] mx-[5px]">
                    <p className='text-[30px] text-center flex justify-center items-center'><FaReact/></p>
                    <p className='font-bold lg:text-[22px] text-[16px] text-center py-[10px]'>React.js</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="item bg-[#fff] lg:p-[30px] p-[5px] w-[24%] mx-[5px]">
                    <p className='text-[30px] text-center flex justify-center items-center'><FaNodeJs/></p>
                    <p className='font-bold g:text-[22px] text-[16px] text-center py-[10px]'>Node.js</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="item bg-[#fff] lg:p-[30px] p-[5px] w-[24%] mx-[5px]">
                    <p className='text-[30px] text-center flex justify-center items-center'><TbBrandMongodb/></p>
                    <p className='font-bold lg:text-[22px] text-[16px] text-center py-[10px]'>MongoDB</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="item bg-[#fff] lg:p-[30px] p-[5px] w-[24%] mx-[5px]">
                    <p className='text-[30px] text-center flex justify-center items-center'><FaRegFileExcel/></p>
                    <p className='font-bold lg:text-[22px] text-[16px] text-center py-[10px]'>Microsoft Excel</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className="item bg-[#fff] lg:p-[30px] p-[5px] w-[24%] mx-[5px]">
                    <p className='text-[30px] text-center flex justify-center items-center'><FaRegFileWord/></p>
                    <p className='font-bold lg:text-[22px] text-[16px] text-center py-[10px]'>Microsoft Word</p>
                    <p className='text-justify'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                </div>
            </Slider>


        </div>
    </div>
  )
}

export default Do