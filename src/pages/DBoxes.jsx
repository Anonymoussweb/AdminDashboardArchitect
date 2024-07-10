import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { BsDisplay } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { CiStar } from "react-icons/ci";










function DBoxes({bars}) {
    return (
        <>
            <div className={` ${bars?"w-[calc(100%-60px)] ml-[60px]":""} bg-[#F1F4F6] w-[calc(100%-276px)] ml-[276px] mt-[60px] max-lg:ml-[60px] max-lg:w-[calc(100%-60px)] max-sm:ml-0 max-sm:w-full`}>
                <div className='flex justify-between bg-[#F9FAFB] items-center px-8 py-4 max-lg:px-4 max-sm:flex-col'>
                    <div className='flex gap-5 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-2'>
                        <div className='text-[#F2C5C4] text-4xl p-3 bg-white rounded-sm drop-shadow-lg max-md:w-[60px]'><CiStar />
                        </div>
                        <div className='text-left max-sm:text-center'>
                            <h3 className='text-[20px]'>Chart Boxes</h3>
                            <p className='text-gray-400 text-[14px]'>These boxes can be used to show numbers and data in a breautiful user friendly way.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 max-sm:mt-2'>

                        <div className='bg-[#3B3E42] px-3 py-2 rounded-sm text-white cursor-pointer'>
                            <FaStar />

                        </div>
                        <div className='bg-[#45AEEA] px-3 py-2 text-white rounded-sm cursor-pointer'>
                            <FaBusinessTime />

                        </div>
                    </div>
                </div>



                {/* ======================= */}
                <div className=' w-full px-8 max-lg:px-4'>
                    <div className='flex gap-8 flex-wrap max-lg:gap-4'>
                        <div className='flex-1 bg-[#2DC8EB] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#2DC8EB] text-2xl'>
                                <IoSettingsOutline />
                            </div>
                            <h2 className='text-white text-[40px] font-bold'>87,4</h2>
                            <p className='text-white opacity-[.7]' >Reports Generated
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                        <div className='flex-1 bg-[#394F76] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#FE9A8B] text-2xl'>
                                <BsDisplay />

                            </div>
                            <h2 className='text-white text-[40px] font-bold'>17.2K</h2>
                            <p className='text-white opacity-[.7]' >Profiles
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                        <div className='flex-1 bg-[#2CB281] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-[#344648] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-2xl'>
                                <PiGraduationCap />

                            </div>
                            <h2 className='text-white text-[40px] font-bold'>43.2K</h2>
                            <p className='text-white opacity-[.7]' >Bugs Fixed
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                    </div>
                    {/* ========================= */}
                    <div className='flex gap-8 mt-8 flex-wrap max-lg:gap-4'>
                        <div className='flex-1 bg-[#2CB281] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-[#344648] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-2xl'>
                                <PiGraduationCap />

                            </div>
                            <h2 className='text-white text-[40px] font-bold'>43.2K</h2>
                            <p className='text-white opacity-[.7]' >Bugs Fixed
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                        <div className='flex-1 bg-[#FF6573] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#FE9A8B] text-2xl'>
                                <IoSettingsOutline />

                            </div>
                            <h2 className='text-white text-[40px] font-bold'>45.8K</h2>
                            <p className='text-white opacity-[.7]' >Total Views
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                        <div className='flex-1 bg-[#2CB281] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-[#344648] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-2xl'>
                                <PiGraduationCap />

                            </div>
                            <h2 className='text-white text-[40px] font-bold'>43.2K</h2>
                            <p className='text-white opacity-[.7]' >Bugs Fixed
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                    </div>
                    {/* ============================= */}
                    <div className='flex gap-8 mt-8 flex-wrap max-lg:gap-4'>
                        <div className='flex-1 bg-[#2DC8EB] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#2DC8EB] text-2xl'>
                                <IoSettingsOutline />
                            </div>
                            <h2 className='text-white text-[40px] font-bold'>87,4</h2>
                            <p className='text-white opacity-[.7]' >Reports Generated
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                        <div className='flex-1 bg-[#394F76] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#FE9A8B] text-2xl'>
                                <BsDisplay />

                            </div>
                            <h2 className='text-white text-[40px] font-bold'>17.2K</h2>
                            <p className='text-white opacity-[.7]' >Profiles
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                        <div className='flex-1 bg-[#2CB281] min-w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1'>
                            <div className=' bg-[#344648] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-2xl'>
                                <PiGraduationCap />

                            </div>
                            <h2 className='text-white text-[40px] font-bold'>43.2K</h2>
                            <p className='text-white opacity-[.7]' >Bugs Fixed
                            </p>
                            <p className='text-white'>54.9%</p>
                        </div>
                    </div>

                </div>









            </div>







        </>
    )
}

export default DBoxes