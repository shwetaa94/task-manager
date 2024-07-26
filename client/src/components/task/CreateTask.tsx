import type { NextPage } from "next";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { IoMdAdd, IoMdStarOutline } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdPriorityHigh } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TfiShine } from "react-icons/tfi";

const CreateTask = () => {
  return (
      <div className="w-[60%] bg-white overflow-hidden flex flex-col items-start justify-start pt-4 px-6 pb-[513px] box-border gap-[32px] leading-[normal] tracking-[normal] text-left text-base text-silver-200 font-inter mq450:gap-[16px] ">
        <section className="self-stretch flex flex-col items-start justify-start gap-[27px] text-left text-[48px] text-lightgray font-barlow">
          <header className="self-stretch flex flex-row items-center justify-between gap-[20px] text-left text-base text-gray font-inter">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="flex gap-6">
                <RxCross2 className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]" />
                <BsArrowsAngleExpand className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[24px]" />
              </div>
            </div>
            <div className="w-[230px] flex flex-row items-center justify-start gap-[16px]">
              <div className="rounded bg-whitesmoke overflow-hidden flex flex-row items-center justify-start p-2 gap-[14px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[44px]">
                  Share
                </a>
                <IoShareSocialOutline className="h-6 w-6 relative overflow-hidden shrink-0" />
              </div>
              <div className="flex-1 rounded bg-whitesmoke overflow-hidden flex flex-row items-center justify-start p-2 gap-[14px]">
                <input
                  className="w-[calc(100%_-_64px)] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] flex-1 relative text-gray text-left inline-block min-w-[37px] p-0"
                  placeholder="Favorite"
                  type="text"
                />
                <IoMdStarOutline className="h-6 w-6 relative overflow-hidden shrink-0" />
              </div>
            </div>
          </header>
          <div className="self-stretch flex flex-col items-start justify-start gap-[38px] mq625:gap-[19px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq625:gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
                Title
              </h1>
              <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[329px] pl-0 gap-[20px] text-base text-dimgray font-inter mq450:pr-5 mq450:box-border mq625:flex-wrap mq625:pr-[164px] mq625:box-border">
                <div className="flex flex-col items-start justify-start gap-[32px] min-w-[136px] mq625:flex-1">
                  <div className="flex flex-row items-center justify-start gap-[24px]">
                    <TfiShine className="h-6 w-6 relative overflow-hidden shrink-0" />
                    <div className="relative inline-block min-w-[49px]">
                      Status
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[22px]">
                    <MdPriorityHigh className="h-6 w-6 relative overflow-hidden shrink-0" />

                    <div className="relative inline-block min-w-[54px]">
                      Priority
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0 gap-[25px]">
                    <CiCalendarDate className="h-6 w-6 relative overflow-hidden shrink-0" />
                    <div className="relative inline-block min-w-[67px]">
                      Deadline
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[25px]">
                    <GoPencil className="h-6 w-6 relative overflow-hidden shrink-0" />
                    <div className="relative inline-block min-w-[87px]">
                      Description
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[32px] min-w-[97px] text-silver-100 mq625:flex-1">
                  <div className="relative leading-[24px] inline-block min-w-[97px]">
                    Not selected
                  </div>
                  <div className="relative leading-[24px] inline-block min-w-[97px]">
                    Not selected
                  </div>
                  <div className="relative leading-[24px] inline-block min-w-[97px]">
                    Not selected
                  </div>
                  <div className="relative leading-[24px] inline-block min-w-[97px]">
                    Not selected
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[23px]">
              <IoMdAdd className="h-6 w-6 relative overflow-hidden shrink-0" />

              <div className="relative text-base font-inter text-black text-left">
                Add custom property
              </div>
            </button>
          </div>
        </section>
        <div className="self-stretch h-px relative bg-gainsboro overflow-hidden shrink-0" />
        <div className="self-stretch relative">
          Start writing, or drag your own files here.
        </div>
      </div>
  );
};
export default CreateTask;
