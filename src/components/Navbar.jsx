import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { VscSearch } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";






function Navbar({setTogg, setBars}) {
    return (
        <>
            <div className='w-full h-[60px] flex items-center bg-gradient-to-r from-[#F9748F] to-[#FE9A8B] font-PoppinsL tracking-wider fixed top-0 z-10'>
                <div className='flex justify-between items-center w-[277px] h-[60px] bg-[#F88CA2] px-6 shrink-0 cLogo_div max-lg:w-[100px]'>
                    <div>
                        <img className='cursor-pointer' src="./images/logo.png" alt="" />
                    </div>
                    <div className='max-lg:hidden' onClick={()=>setBars(prev=>!prev)}>
                        <HiOutlineBars3 className='text-white text-3xl cursor-pointer' />
                    </div>
                </div>
                <div className='flex w-full justify-between items-center px-5'>
                    <div className='text-white text-xl bg-[#E06980] rounded-full p-3 cursor-pointer max-sm:hidden'>
                        <VscSearch />
                    </div>
                    <div className='text-white text-xl hidden bg-[#E06980] rounded-full p-1 cursor-pointer max-sm:block'onClick={()=>setTogg(prev=>!prev)}>
                    <HiOutlineBars3 />
                    </div>
                    <div className='flex items-center gap-5 text-white max-[460px]:ml-auto max-[460px]:gap-2'>
                        <img className='w-[40px] h-[40px] rounded-full object-cover max-[460px]:w-[25px] max-[460px]:h-[25px]' src="./images/user.jpg" alt="" />
                        <div>
                            <h3 className='text-md max-[460px]:text-[12px]'>Ali Mclourd</h3>
                            <p className='text-[10px] max-[460px]:text-[8px]'>VP People Manager</p>
                        </div>
                        <div className='text-white bg-[#359FDC] py-2 px-3 rounded-sm text-md cursor-pointer max-[460px]:hidden'>
                        <SlCalender />

                        </div>
                    </div>


                </div>

            </div>




        </>
    )
}

export default Navbar