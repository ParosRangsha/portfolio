import React from 'react'

const About = () => {
  return (
    <div className="max-w-container mx-auto bg-[#00000007] my-[50px] py-[130px] px-[155px]">
        <h2 className='text-[35px] font-bold text-center'>About Me</h2>
        <p className='text-justify py-[15px]'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
        <div className="contact flex justify-between">
            <div className="name">
                <p className='text-center text-[#777]'>Name</p>
                <p className='text-center font-bold'>Mary Hardy</p>
            </div>
            <div className="name">
                <p className='text-center text-[#777]'>Email</p>
                <p className='text-center font-bold'>info@gmail.com</p>
            </div>
            <div className="name">
                <p className='text-center text-[#777]'>Date of birth:</p>
                <p className='text-center font-bold'>11 November 1987</p>
            </div>
            <div className="name">
                <p className='text-center text-[#777]'>From:</p>
                <p className='text-center font-bold'>Los Angeles, USA</p>
            </div>
        </div>
    </div>
  )
}

export default About