import React from 'react'
import { Link } from 'react-router-dom'
import { IoDiamondOutline } from "react-icons/io5";
import { BsRocket, BsUsbDrive } from "react-icons/bs";
import { FaCarRear } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { TbGraph } from "react-icons/tb";
import { IoEyedropOutline } from "react-icons/io5";







function Sidebar({ togg, bars }) {
  return (
    <>
      <div className={`${bars ? "w-[60px]" : "w-[277px]"} h-screen bg-[url(./images/sidebarbg.jpg)] bg-no-repeat bg-center bg-cover fixed top-[60px] z-10 max-lg:w-[60px] group hover:w-[277px] duration-150 max-sm:${togg ? "w-[277px]" : "left-[-500px]"}`}>
        <div className={`${bars ? "w-[60px]" : "w-[277px]"} h-screen  bg-gradient-to-r from-[#1d2434] to-[#2e4157e1] text-[#A1A6AD] pl-5 pt-3 max-lg:w-[60px] group hover:w-[277px] duration-150 max-sm:left-[-500px]`}>


          <h2 className={`font-Poppins text-[12px] max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>PRO VERSION</h2>
          <ul>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><IoDiamondOutline /></div><p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Upgrade to PRO</p> </Link></li>
          </ul>
          <h2 className={`font-Poppins text-[12px] max-lg:hidden mt-5 group-hover:block ${bars ? "hidden" : ""}`}>MENU</h2>
          <ul>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><BsRocket /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Dashboard Example</p></Link></li>
          </ul>
          <h2 className={`font-Poppins text-[12px] max-lg:hidden mt-5 group-hover:block ${bars ? "hidden" : ""}`}>UI COMPONENTS</h2>
          <ul>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><BsRocket /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Elements</p></Link></li>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><FaCarRear /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Components</p></Link></li>
            <li className='mt-4'> <Link to="/regTable" className='flex items-center gap-3'> <div className='text-2xl'><LuClipboardList /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Regular Tables</p></Link></li>
          </ul>
          <h2 className={`font-Poppins text-[12px] max-lg:hidden mt-5 group-hover:block ${bars ? "hidden" : ""}`}>WIDGETS</h2>
          <ul>
            <li className='mt-4'> <Link to="/DashboardBoxes" className='flex items-center gap-3'> <div className='text-2xl'><TbGraph />
            </div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Dashboard Boxes</p></Link></li>
          </ul>
          <h2 className={`font-Poppins text-[12px] max-lg:hidden mt-5 group-hover:block ${bars ? "hidden" : ""}`}>FORMS</h2>
          <ul>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><TbGraph /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Controls</p></Link></li>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><IoEyedropOutline /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Layouts</p></Link></li>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><BsUsbDrive /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>Validation</p></Link></li>
          </ul>
          <h2 className={`font-Poppins text-[12px] max-lg:hidden mt-5 group-hover:block ${bars ? "hidden" : ""}`}>CHARTS</h2>
          <ul>
            <li className='mt-4'> <Link to="/" className='flex items-center gap-3'> <div className='text-2xl'><TbGraph /></div> <p className={`max-lg:hidden group-hover:block ${bars ? "hidden" : ""}`}>ChartJS</p></Link></li>
          </ul>




        </div>






      </div>
    </>
  )
}

export default Sidebar