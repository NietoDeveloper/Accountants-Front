import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (

        <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 '>
             <video src={assets.videoBG1} autoPlay loop muted />
            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <section className='TitleHome'>
                    <h1>Mauricio Nieto</h1>
                    <h3>Professional Management Taxes</h3>
                </section>
                <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light'>
                    <img className='w-28' src={assets.LogoC1} alt="" />
                </div>
                <a href='#speciality' className='flex items-center gap-2 px-8 py-3 rounded-full text-[#595959] text-white m-auto md:m-0 transition-all duration-300'>
                    Contact
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.ImgFrontRemoveBG} alt="" />
            </div>

        </div>

    )
}

export default Header