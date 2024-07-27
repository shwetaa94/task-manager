import type { NextPage } from "next";
import { FiPlus } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineSort } from "react-icons/md";

export type CardType = {
  className?: string;
  toDo?: string;
  title?: string;
  description?: string;
  status?: string;
  date?: string;
  hrAgo?: string;
};

const Card: NextPage<CardType> = ({
  className = "",
  toDo,
  title,
  description,
  status,
  date,
  hrAgo,
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[193px] max-w-[257px] text-left text-xl text-dimgray-200 font-inter">
      <div className="self-stretch rounded-lg bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start p-3 gap-[16px] text-base text-dimgray-100 border-[1px] border-solid border-gainsboro-200">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative font-medium">{title}</div>
              <div className="self-stretch relative text-sm text-gray-300">
                {description}
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-salmon flex flex-row items-center justify-center py-1.5 px-2 text-xs text-white">
            <div className="relative inline-block min-w-[39px]">{status}</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
            <LuClock3 className="h-6 w-6 relative overflow-hidden shrink-0" />
            <div className="relative font-semibold inline-block min-w-[83px]">
              {date}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[178px] pl-0 gap-[20px] text-sm text-gray-300">
          <div className="relative font-medium inline-block min-w-[53px] whitespace-nowrap">
            {hrAgo}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Card;
