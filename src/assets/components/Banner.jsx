import React from 'react'
import { Link } from 'react-router-dom'
import { MdDownload } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import elipse from '../../img/elipse.png'
import man from '../../img/man.png'


const Banner = () => {
  return (
    <div className="banner bg-cover"  style={{backgroundImage: `url(${elipse})`}}>
        <div className="contain flex items-center max-w-container mx-auto">
            <div className="w-1/2 h-full">
                <h3 className='text-[45px] font-[600]'>Hi, I am</h3>
                <h2 className='lg:text-[85px] text-[40px] font-[700]'>Mary Hardy</h2>
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