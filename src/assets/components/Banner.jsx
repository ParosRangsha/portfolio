import React from 'react'
import { Link } from 'react-router-dom'
import { MdDownload } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import elipse from '../../img/elipse.png'
import man from '../../img/man.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter';


const Banner = () => {
    const [typeEffect] = useTypewriter({
        words: ['MARY HARDY'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 200
    })
  return (
    <div className="banner bg-cover"  style={{backgroundImage: `url(${elipse})`}}>
        <div className="contain flex items-center max-w-container mx-auto">
            <div className="w-1/2 h-full">
                <h3 className='text-[32px] lg:px-0 px-[10px]'>Hi I'm</h3>
                <h1 className='lg:text-[64px] text-[26px] lg:px-0 px-[10px] font-[700] text-center'>{'>'}{typeEffect}{'<'}</h1>
                <p className='py-[10px] lg:px-0 px-[10px]'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                <div className="link flex">
                    <Link to='/' className='mx-[5px] lg:mx-0 text-[12px] lg:text-[16px] flex items-center lg:py-[15px] py-[5px] lg:px-[30px] px-[10px] bg-[#FD6E0A] gap-1'><MdDownload/><p> Download CV</p></Link>
                    <Link to='/' className='mx-[5px] text-[12px] lg:text-[16px] flex items-center border-[2px] border-[#FD6E0A] lg:mx-[10px] lg:py-[15px] py-[5px] lg:px-[30px] px-[10px] gap-1'><MdAddCall/> <p> Contact</p></Link>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <img src={man} alt="man" className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Banner