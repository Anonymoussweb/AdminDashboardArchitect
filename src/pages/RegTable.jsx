import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { CiHardDrive } from "react-icons/ci";


function RegTable({bars}) {
    return (
        <>
            <div className={` ${bars?"ml-[60px] w-[calc(100%-60px)] ":""} bg-[#F1F4F6] w-[calc(100%-276px)] ml-[276px] mt-[60px] max-lg:ml-[60px] max-lg:w-[calc(100%-60px)] max-sm:ml-0 max-sm:w-full max-[700px]:text-[10px]`}>

                <div className='flex justify-between bg-[#F9FAFB] items-center h-[120px] px-8 max-sm:px-4 max-sm:flex-col max-sm:h-fit max-sm:py-4'>
                    <div className='flex gap-5 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-2'>
                        <div className='text-[#F2C5C4] text-4xl p-3 bg-white rounded-sm drop-shadow-lg max-sm:w-[60px]'><CiHardDrive />
                        </div>
                        <div className='text-left max-sm:text-center'>
                            <h3 className='text-[20px]'>Regular Tables</h3>
                            <p className='text-gray-400 text-[14px]'>This is an example dashboard created using build-in elements and components.</p>
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
                {/* ==================== */}
                <div className=' flex gap-6 px-8 pt-8 max-sm:px-4 max-sm:gap-3 flex-wrap'>
                    <div className='bg-white flex-1 regTable_div px-5 shadow-lg min-w-[270px]'>
                        <h2 className='font-Poppins text-gray-500 text-sm max-[350px]:text-[10px]'>SIMPLE TABLE</h2>
                        <table width="100%" >
                            <tr>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>#</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>First Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Last Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Username</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </table>
                    </div>
                    <div className='bg-white flex-1 regTable_div px-5 shadow-lg min-w-[270px]'>
                        <h2 className='font-Poppins text-gray-500 text-sm max-[350px]:text-[8px]'>SIMPLE TABLE</h2>
                        <table width="100%" >
                            <tr>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>#</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>First Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Last Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Username</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </table>
                    </div>
                </div>
                  {/* ==================== */}
                  <div className=' flex gap-6 px-8 py-8 max-sm:px-4 max-md:gap-3 flex-wrap'>
                    <div className='bg-white flex-1 regTable_div px-5 shadow-lg min-w-[270px]'>
                        <h2 className='font-Poppins text-gray-500 text-sm max-[350px]:text-[8px]'>SIMPLE TABLE</h2>
                        <table width="100%" >
                            <tr>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>#</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>First Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Last Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Username</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </table>
                    </div>
                    <div className='bg-white flex-1 regTable_div px-5 shadow-lg min-w-[270px]'>
                        <h2 className='font-Poppins text-gray-500 text-sm max-[350px]:text-[10px]'>SIMPLE TABLE</h2>
                        <table width="100%" >
                            <tr>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>#</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>First Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Last Name</th>
                                <th className='text-left font-Poppins text-gray-500 text-[12px] max-[350px]:text-[8px]'>Username</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </table>
                    </div>
                </div>





            </div>
        </>
    )
}

export default RegTable