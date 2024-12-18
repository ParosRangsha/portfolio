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
                <h3 className='text-[32px]'>Hi I'm</h3>
                <h1 className='text-[64px] font-[700] text-center'>{'>'}{typeEffect}{'<'}</h1>
                <p className='py-[10px]'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
                <div className="link flex">
                    <Link to='/' className='flex items-center py-[15px] px-[30px] bg-[#FD6E0A] gap-1'><MdDownload/><p> Download CV</p></Link>
                    <Link to='/' className='flex items-center border-[2px] border-[#FD6E0A] mx-[10px] px-[30px] py-[15px] gap-1'><MdAddCall/> <p> Contact</p></Link>
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