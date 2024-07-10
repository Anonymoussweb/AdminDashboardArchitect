import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import {
  IoRocketOutline,
  IoSettingsOutline,
  IoCarOutline,
} from "react-icons/io5";
import Chart from "../components/Chart";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsDisplay, BsPcDisplayHorizontal } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import LineChartDots from "../components/LineChartDots";
import BarChartComp from "../components/BarChartComp";
import { CiHeart } from "react-icons/ci";

function DashboardEx({ bars }) {
  return (
    <>
      <div
        className={` ${
          bars ? "ml-[60px] w-[calc(100%-60px)]" : ""
        } w-[calc(100%-276px)] ml-[276px] mt-[60px] max-lg:w-[calc(100%-60px)] max-lg:ml-[60px] max-sm:ml-0 max-sm:w-full`}
      >
        <div className="flex justify-between bg-[#F9FAFB] items-center h-[120px] px-8 max-lg:px-4 max-md:flex-col max-md:h-fit max-md:py-4">
          <div className="flex gap-5 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-1">
            <div className="text-[#F2C5C4] text-4xl p-3 bg-white rounded-sm drop-shadow-lg max-md:w-[60px]">
              <IoCarOutline />
            </div>
            <div className="text-left max-md:text-center">
              <h3 className="text-[20px]">Basic Dashboard</h3>
              <p className="text-gray-400 text-[14px]">
                This is an example dashboard created using build-in elements and
                components.
              </p>
            </div>
          </div>
          <div className="flex gap-2 max-md:mt-4">
            <div className="bg-[#3B3E42] px-3 py-2 rounded-sm text-white cursor-pointer">
              <FaStar />
            </div>
            <div className="bg-[#45AEEA] px-3 py-2 text-white rounded-sm cursor-pointer">
              <FaBusinessTime />
            </div>
          </div>
        </div>
        {/* =========================== */}

        <div className="p-4 bg-[#F1F4F6] px-8 flex gap-8 max-lg:px-4 max-lg:gap-4 max-md:flex-col">
          <div className="w-1/2 bg-white drop-shadow-lg rounded-sm max-md:w-full">
            <div className="flex items-center gap-2 border-gray-400 border-b-[1px] px-4 pt-3 max-[460px]:items-center">
              <div className="text-[#96ECD3] text-3xl mb-3 max-[460px]:text-[16px]">
                <IoRocketOutline />
              </div>
              <p className="font-Poppins text-sm text-gray-600 max-[460px]:text-[10px] max-[460px]:mb-2">
                BANDWIDTH REPORTS
              </p>
            </div>
            <div className="bg-white flex gap-5 px-4 pt-5">
              <div className="w-1/2">
                <div className="flex gap-5 items-center max-[460px]:gap-1">
                  <h3 className="text-[25px] text-gray-600 max-[460px]:text-[12px]">
                    63%
                  </h3>{" "}
                  <p className="text-gray-400 text-[12px] max-[460px]:text-[8px]">
                    Generated Leads
                  </p>
                </div>
                <div className="w-[100%] rounded-full bg-gray-300 my-2">
                  <hr className="w-[63%] h-[10px] bg-red-600 rounded-full" />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex gap-5 items-center max-[460px]:gap-1">
                  <h3 className="text-[25px] text-gray-600 max-[460px]:text-[12px]">
                    58%
                  </h3>{" "}
                  <p className="text-gray-400 text-[12px] max-[460px]:text-[8px]">
                    Generated Leads
                  </p>
                </div>
                <div className="w-[100%] rounded-full bg-gray-300 my-2">
                  <hr className="w-[58%] h-[10px] bg-[#73A839] rounded-full" />
                </div>
              </div>
            </div>
            <div className="bg-white gap-5 flex px-4 pt-5">
              <div className="w-1/2">
                <div className="flex gap-5 items-center max-[460px]:gap-1">
                  <h3 className="text-[25px] text-gray-600 max-[460px]:text-[12px]">
                    74%
                  </h3>{" "}
                  <p className="text-gray-400 text-[12px] max-[460px]:text-[8px]">
                    Generated Leads
                  </p>
                </div>
                <div className="w-[100%] rounded-full bg-gray-300 my-2">
                  <hr className="w-[74%] h-[10px] bg-red-600 rounded-full" />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex gap-5 items-center max-[460px]:gap-1">
                  <h3 className="text-[25px] text-gray-600 max-[460px]:text-[12px]">
                    93%
                  </h3>{" "}
                  <p className="text-gray-400 text-[12px] max-[460px]:text-[8px]">
                    Generated Leads
                  </p>
                </div>
                <div className="w-[100%] rounded-full bg-gray-300 my-2">
                  <hr className="w-[93%] h-[10px] bg-[#73A839] rounded-full" />
                </div>
              </div>
            </div>
            <div className="w-full mt-4 text-[#F0B58F] rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 justify-center max-[460px]:text-[8px]">
                <FaArrowLeftLong /> <p>175.5%</p>{" "}
                <p className="text-gray-400">increased server resources</p>
              </div>
              <Chart />
            </div>
          </div>

          <div className=" w-1/2 max-md:w-full">
            <div className="flex gap-8 max-lg:gap-4">
              <div className="flex-1 bg-[#2DC8EB]  h-[200px] rounded-sm flex justify-center items-center flex-col gap-1">
                <div className=" bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#2DC8EB] text-2xl">
                  <IoSettingsOutline />
                </div>
                <h2 className="text-white text-[40px] font-bold max-[460px]:text-[16px]">
                  87.4K
                </h2>
                <p className="text-white opacity-[.7] max-[460px]:text-[8px]">
                  Reports Generated
                </p>
                <p className="text-white max-[460px]:text-[8px]">54.9%</p>
              </div>
              <div className="flex-1 bg-[#394F76] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1">
                <div className=" bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#FE9A8B] text-2xl">
                  <BsDisplay />
                </div>
                <h2 className="text-white text-[40px] font-bold max-[460px]:text-[16px]">
                  17.2K
                </h2>
                <p className="text-white opacity-[.7] max-[460px]:text-[8px]">
                  Profiles
                </p>
                <p className="text-white max-[460px]:text-[8px]">54.9%</p>
              </div>
            </div>
            <div className="flex gap-8 mt-8 max-lg:gap-4">
              <div className="flex-1 bg-[#2CB281] w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1">
                <div className=" bg-[#344648] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-2xl">
                  <PiGraduationCap />
                </div>
                <h2 className="text-white text-[40px] font-bold max-[460px]:text-[16px]">
                  43.2K
                </h2>
                <p className="text-white opacity-[.7] max-[460px]:text-[8px]">
                  Bugs Fixed
                </p>
                <p className="text-white max-[460px]:text-[8px]">54.9%</p>
              </div>
              <div className="flex-1 bg-[#FF6573] w-[200px] h-[200px] rounded-sm flex justify-center items-center flex-col gap-1">
                <div className=" bg-white p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#FE9A8B] text-2xl">
                  <IoSettingsOutline />
                </div>
                <h2 className="text-white text-[40px] font-bold max-[460px]:text-[16px]">
                  45.8K
                </h2>
                <p className="text-white opacity-[.7] max-[460px]:text-[8px]">
                  Total Views
                </p>
                <p className="text-white max-[460px]:text-[8px]">54.9%</p>
              </div>
            </div>
          </div>
        </div>
        {/* ================================== */}

        <div className="w-full bg-[#F1F4F6] flex gap-8 px-8 pt-2 max-lg:gap-4 max-lg:px-4 max-md:flex-col">
          <div className="flex w-1/2 gap-8 max-lg:gap-4 max-md:w-full">
            <div className="flex-1 bg-white w-[200px] h-[300px] rounded-sm flex justify-center items-center flex-col gap-1 relative overflow-hidden">
              <div className=" bg-[#CDD8E3] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-black text-2xl">
                <IoSettingsOutline />
              </div>
              <h2 className="text-black text-[40px] font-bold max-[460px]:text-[16px]">
                43.2K
              </h2>
              <p className="text-black opacity-[.7] max-[460px]:text-[8px]">
                Total Views
              </p>
              <p className="text-black max-[460px]:text-[8px]">54.9%</p>
              <div className="w-full absolute bottom-[-40px] left-0">
                <LineChartDots />
              </div>
            </div>
            <div className="flex-1 bg-white w-[200px] h-[300px] rounded-sm flex justify-center items-center flex-col gap-1 relative overflow-hidden">
              <div className=" bg-[#F4D2D3] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-red-600 text-2xl">
                <BsDisplay />
              </div>
              <h2 className="text-black text-[40px] font-bold max-[460px]:text-[16px]">
                5.82K
              </h2>
              <p className="text-black opacity-[.7] max-[460px]:text-[8px]">
                Reports Submitted
              </p>
              <p className="text-black max-[460px]:text-[8px]">54.9K</p>
              <div className="w-full absolute bottom-[-10px] left-0">
                <BarChartComp />
              </div>
            </div>
          </div>
          <div className="bg-white w-1/2 h-[300px] rounded-sm flex justify-center items-center flex-col gap-1 relative overflow-hidden max-md:w-full">
            <div className=" bg-[#F8DDCC] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-black text-2xl">
              <CiHeart />
            </div>
            <h2 className="text-black text-[40px] font-bold max-[460px]:text-[16px]">
              4517.82
            </h2>
            <p className="text-black opacity-[.7] max-[460px]:text-[8px]">
              Active Social Profiles
            </p>
            <p className="text-black max-[460px]:text-[8px]">54.9%</p>
            <div className="w-full absolute bottom-[-40px] left-0">
              <LineChartDots />
            </div>
          </div>
        </div>
        {/* ====================== */}
        <div className="w-full bg-[#F1F4F6] flex gap-8 px-8 pt-6 flex-wrap max-lg:gap-4 max-lg:px-4">
          <div className="flex-1 flex flex-col min-w-[200px] bg-white px-4 py-2 rounded-sm text-[#C71C22]">
            <div className="flex w-full items-center gap-3 px-4 py-2">
              <h3 className="text-[25px] text-red-800">71%</h3>{" "}
              <div className="w-[80%] h-[10px] rounded-full bg-gray-300 my-2">
                <hr className="w-[40%] h-[10px] bg-red-600 rounded-full" />
              </div>
            </div>
            <p className="text-gray-400">Income Target</p>
          </div>
          <div className="flex-1 flex flex-col min-w-[200px] bg-white px-4 py-2 rounded-sm text-[#73A839]">
            <div className="flex w-full items-center gap-3 px-4 py-2">
              <h3 className="text-[25px] font-bold">54%</h3>{" "}
              <div className="w-[80%] h-[10px] rounded-full bg-gray-300 my-2">
                <hr className="w-[40%] h-[10px] bg-[#73A839] rounded-full" />
              </div>
            </div>
            <p className="text-gray-400">Expenses Target</p>
          </div>
          <div className="flex-1 flex flex-col min-w-[200px] bg-white px-4 py-2 rounded-sm text-[#DD5600]">
            <div className="flex w-full items-center gap-3 px-4 py-2">
              <h3 className="text-[25px] font-bold ">32%</h3>{" "}
              <div className="w-[80%] h-[10px] rounded-full bg-gray-300 my-2">
                <hr className="w-[40%] h-[10px] bg-[#DD5600] rounded-full" />
              </div>
            </div>
            <p className="text-gray-400">Spendings Target</p>
          </div>
          <div className="flex-1 flex flex-col min-w-[200px] bg-white px-4 py-2 rounded-sm text-[#2FA4E7]">
            <div className="flex w-full items-center gap-3 px-4 py-2">
              <h3 className="text-[25px] font-bold">89%</h3>{" "}
              <div className="w-[80%] h-[10px] rounded-full bg-gray-300 my-2">
                <hr className="w-[40%] h-[10px] bg-[#2FA4E7] rounded-full" />
              </div>
            </div>
            <p className="text-gray-400">Totals Target</p>
          </div>
        </div>
        {/* ====================== */}

        <div className="w-full bg-[#F1F4F6] flex flex-col px-8 pt-6 max-lg:px-4">
          <div className="flex w-full justify-between items-center px-4 py-2 bg-white border-gray-400 border-b-[1px]">
            <div>
              <h2 className="font-Poppins text-sm text-gray-600 max-[627px]:text-[10px]">
                ACTIVE USERS
              </h2>
            </div>
            <div className="flex text-white cursor-pointer">
              <p className="px-4 py-1 bg-[#178ACC] max-[627px]:text-[8px] max-[627px]:py-1">
                Last Week
              </p>
              <p className="px-4 py-1 bg-[#359FDC] max-[627px]:text-[8px]">
                All Months
              </p>
            </div>
          </div>
          <div className="w-full bg-[#F1F4F6] flex flex-col table_div">
            <table className="bg-white font-PoppinsL ">
              <tr className="h-10">
                <th className="max-[627px]:text-[8px] max-[627px]:py-1">#</th>
                <th className="max-[627px]:text-[8px] max-[627px]:py-1">
                  Name
                </th>
                <th className="max-[627px]:text-[8px] max-[627px]:py-1">
                  City
                </th>
                <th className="max-[627px]:text-[8px] max-[627px]:py-1">
                  Status
                </th>
                <th className="max-[627px]:text-[8px] max-[627px]:py-1">
                  Actions
                </th>
              </tr>
              <tr className="h-20">
                <td className="max-[627px]:text-[8px] max-[627px]:py-1">
                  #345
                </td>
                <td className="w-[20%]">
                  <div className="flex justify-center gap-3 max-lg:items-center max-[382px]:flex-col">
                    <img
                      className="w-[40px] h-[40px] rounded-full object-cover max-[627px]:w-[25px] max-[627px]:h-[25px]"
                      src="./images/user.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="w-max max-[930px]:text-[10px]">
                        John Doe
                      </h2>
                      <p className="text-[12px] max-[930px]:text-[8px]">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px] max-[627px]:text-[8px] max-[627px]:py-1">
                  Madrid
                </td>
                <td className="w-[20%]">
                  <span className="bg-[#DD5600] text-white px-2 text-[12px] w-[20%] rounded-sm py-1 max-[627px]:text-[8px] max-[627px]:py-1">
                    PENDING
                  </span>
                </td>
                <td className="w-[20%]">
                  <button className="bg-[#204263] text-white px-3 py-2 rounded-sm text-[12px] max-[627px]:text-[8px] max-[627px]:py-1 ">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="h-20">
                <td className="max-[627px]:text-[8px] max-[627px]:py-1">
                  #345
                </td>
                <td className="w-[20%]">
                  <div className="flex justify-center gap-3 max-lg:items-center max-[382px]:flex-col">
                    <img
                      className="w-[40px] h-[40px] rounded-full object-cover max-[627px]:w-[25px] max-[627px]:h-[25px]"
                      src="./images/user.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="w-max max-[930px]:text-[10px]">
                        Ruben Tillman
                      </h2>
                      <p className="text-[12px] max-[930px]:text-[8px]">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px] max-[627px]:text-[8px] max-[627px]:py-1">
                  Madrid
                </td>
                <td className="w-[20%]">
                  <span className="bg-[#73A839] text-white px-2 text-[12px] w-[20%] rounded-sm py-1 max-[627px]:text-[8px] max-[627px]:py-1">
                    COMPLETED
                  </span>
                </td>
                <td className="w-[20%]">
                  <button className="bg-[#204263] text-white px-3 py-2 rounded-sm text-[12px] max-[627px]:text-[8px] max-[627px]:py-1">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="h-20">
                <td className="max-[627px]:text-[8px] max-[627px]:py-1">
                  #345
                </td>
                <td className="w-[20%]">
                  <div className="flex justify-center gap-3 max-lg:items-center max-[382px]:flex-col">
                    <img
                      className="w-[40px] h-[40px] rounded-full object-cover max-[627px]:w-[25px] max-[627px]:h-[25px]"
                      src="./images/user.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="w-max max-[930px]:text-[10px]">
                        Elliot Huber
                      </h2>
                      <p className="text-[12px] max-[930px]:text-[8px]">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px] max-[627px]:text-[8px] max-[627px]:py-1">
                  Madrid
                </td>
                <td className="w-[20%]">
                  <span className="bg-[#C71C22] text-white px-2 text-[12px] rounded-sm py-1 max-[627px]:text-[8px] max-[627px]:py-1 inp">
                    IN PROGRESS
                  </span>
                </td>
                <td className="w-[20%]">
                  <button className="bg-[#204263] text-white px-3 py-2 rounded-sm text-[12px] max-[627px]:text-[8px] max-[627px]:py-1">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="h-20">
                <td className="max-[627px]:text-[8px] max-[627px]:py-1">
                  #345
                </td>
                <td className="w-[20%]">
                  <div className="flex justify-center gap-3 max-lg:items-center max-[382px]:flex-col">
                    <img
                      className="w-[40px] h-[40px] rounded-full object-cover max-[627px]:w-[25px] max-[627px]:h-[25px]"
                      src="./images/user.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="w-max max-[930px]:text-[10px]">
                        Vinnie Wagstaff
                      </h2>
                      <p className="text-[12px] max-[930px]:text-[8px]">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px] max-[627px]:text-[8px] max-[627px]:py-1">
                  Madrid
                </td>
                <td className="w-[20%]">
                  <span className="bg-[#2FA4E7] text-white px-2 text-[12px] w-[20%] rounded-sm py-1 max-[627px]:text-[8px]">
                    ON HOLD
                  </span>
                </td>
                <td className="w-[20%]">
                  <button className="bg-[#204263] text-white px-3 py-2 rounded-sm text-[12px] max-[627px]:text-[8px] max-[627px]:py-1">
                    Details
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* ======================= */}
        <div className="w-full bg-[#F1F4F6] flex flex-col px-8 pt-6 max-lg:px-4">
          <div className="flex w-full flex-wrap gap-8 max-lg:gap-4">
            <div className="flex-1 bg-white min-w-[200px] h-[300px] rounded-sm flex justify-center items-center flex-col gap-1 relative overflow-hidden">
              <div className=" bg-[#CDD8E3] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-black text-2xl">
                <IoSettingsOutline />
              </div>
              <h2 className="text-black text-[40px] font-bold">43.2K</h2>
              <p className="text-black opacity-[.7]">Total Views</p>
              <p className="text-black">54.9%</p>
              <div className="w-full absolute bottom-[-40px] left-0">
                <LineChartDots />
              </div>
            </div>
            <div className="flex-1 bg-white min-w-[200px] h-[300px] rounded-sm flex justify-center items-center flex-col gap-1 relative overflow-hidden">
              <div className=" bg-[#E3EED7] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-[#7DAE47] text-2xl">
                <BsDisplay />
              </div>
              <h2 className="text-black text-[40px] font-bold">43.2K</h2>
              <p className="text-black opacity-[.7]">Profiles</p>
              <p className="text-black">54.9%</p>
              <div className="w-full absolute bottom-[-50px] left-0">
                <Chart />
              </div>
            </div>
            <div className="flex-1 bg-white min-w-[200px] h-[300px] rounded-sm flex justify-center items-center flex-col gap-1 relative overflow-hidden">
              <div className=" bg-[#F4D2D3] p-2 rounded-full w-[50px] h-[50px] flex justify-center items-center text-red-600 text-2xl">
                <BsPcDisplayHorizontal />
              </div>
              <h2 className="text-black text-[40px] font-bold">5.82K</h2>
              <p className="text-black opacity-[.7]">Reports Submitted</p>
              <p className="text-black">54.9K</p>
              <div className="w-full absolute bottom-[-10px] left-0">
                <BarChartComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardEx;
