import React from 'react'
import CustomButton from './common/CustomButton'
import { ALPHABET_LIST } from '../utils/helper'
import woodImg from '../assets/images/png/wood-img.png'
import girlImg from '../assets/images/png/girl-img.png'

const Hard = () => {
    return (
        <>
            <div className="flex justify-center items-center py-24.5 px-3">
                <div className="max-w-[1140px] mx-auto">
                    <div className="w-full overflow-x-auto">
                        <div className="flex gap-[5px] whitespace-nowrap">
                            <CustomButton btnText={"All"} />
                            <CustomButton btnText={"Pop"} />
                            <CustomButton btnText={"Rock"} />
                            <CustomButton btnText={"More"} />
                            {ALPHABET_LIST.map((item, index) => (
                                <p key={index} className="shrink-0 hover:bg-black hover:text-white rounded-full size-[29px] flex items-center justify-center cursor-pointer transition-all duration-200 ease-linear">{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className="w-full bg-img rounded-[22px] py-9 px-3 md:px-6 lg:pt-9 lg:pb-[43px] lg:pl-[48px] lg:pr-[43px] mt-[43px] relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[#14191C] opacity-100 z-0 rounded-[22px]"></div>
                        <div className="md:flex md:justify-between gap-4 max-md:pb-20 relative z-10">
                            <h1 className='ff-montserrat max-md:text-center font-bold text-4xl md:text-5xl leading-[100%] uppercase text-[#FAFAFF]'>
                                hit me hard and soft
                            </h1>
                            <img className='max-md:pt-5 max-md:mx-auto pointer-events-none' src={woodImg} alt="wood-img" />
                        </div>
                        <div className="flex gap-3 md:gap-6.5 items-center absolute max-md:left-10 -bottom-6 md:-bottom-12 lg:-bottom-16  z-10">
                            <img className='size-[130px] md:size-[170px] pointer-events-none lg:size-[206px]' src={girlImg} alt="girl-img" />
                            <div>
                                <h3 className='ff-poppins font-semibold text-2xl lg:text-[32px] leading-normal lg:leading-[42px] text-white pb-[5px]'>Billie Eilish</h3>
                                <p className='font-medium text-sm sm:text-base leading-[100%] text-[#CECECE] ff-montserrat'>Released May 17, 2024</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Hard