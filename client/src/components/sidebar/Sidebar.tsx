import type { NextPage } from "next";
import { AiOutlineTeam } from "react-icons/ai";
import { FaPlusCircle, FaRegUser } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import { MdFileDownload } from "react-icons/md";
import { PiFastForward } from "react-icons/pi";
import { RiLoaderFill } from "react-icons/ri";
import { TbClipboardData } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="w-full bg-white  h-screen  flex flex-col items-start justify-between pt-6 px-[15px] pb-8  leading-[normal] tracking-[normal] text-left text-xl text-dimgray  border-r-4 font-inter">
      <section className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-xl pr-4 text-gray-200 font-inter">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[8px]">
              <FaRegUser className="h-[21px] w-[21px] relative rounded-lg overflow-hidden shrink-0 object-cover" />
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[118px]">
                Joe Gardner
              </a>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-[16px] text-gray-100">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <LuBellDot className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
              <RiLoaderFill className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
              <PiFastForward className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
            </div>
            <div
              className="rounded bg-whitesmoke-100 overflow-hidden flex flex-row items-center justify-start py-[10.5px] px-2 cursor-pointer"
              //   onClick= {()=>{}}
            >
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px]">
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-gray-100">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch rounded bg-whitesmoke-100 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-[150px] pl-[7px] gap-[14px] top-[0] z-[99] sticky border-[1px] border-solid border-gainsboro-200">
                <HiOutlineHome className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <input
                  className="w-[calc(100%_-_181px)] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 flex-1 relative text-gray-100 text-left inline-block min-w-[34px] p-0"
                  placeholder="Home"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-[140px] pl-2 gap-[14px]">
                <TbClipboardData className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <div className="relative inline-block min-w-[67px]">Boards</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-32 pl-2 gap-[14px]">
                <IoSettingsOutline className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[79px]">
                  Settings
                </a>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-[145px] pl-2 gap-[13px]">
                <AiOutlineTeam className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <div className="relative inline-block min-w-[63px]">Teams</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-1 pr-[121px] pl-2 gap-[13px]">
                <VscGraphLine className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px]">
                  Analytics
                </a>
              </div>
            </div>
            <button className="cursor-pointer py-3 px-[31px] bg-[transparent] shadow-[0px_12px_16px_rgba(186,_186,_186,_0.2)_inset,_0px_1px_8px_rgba(0,_0,_0,_0.25)] rounded-lg [background:linear-gradient(180deg,_#4c38c2,_#2f2188)] flex flex-row items-center justify-center gap-[8px] whitespace-nowrap border-[1px] border-solid border-blueviolet">
              <div className="relative text-xl font-medium font-inter text-white text-left">
                Create new task
              </div>
              <FaPlusCircle className="h-6 w-6 text-white relative overflow-hidden shrink-0 min-h-[24px]" />
            </button>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0">
        <div className="self-stretch rounded-lg bg-whitesmoke-200 flex flex-row items-center justify-start p-2 gap-[8px]">
          <MdFileDownload className="h-10 w-10 relative overflow-hidden shrink-0" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch relative font-medium">
              Download the app
            </div>
            <div className="self-stretch relative text-[14px]">{`Get the full experience `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
