import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import { MdDelete, MdOutlineSort } from "react-icons/md";
import { BACKEND_URL } from "../variable";

export type CardType = {
  id?: string;
  status?: string;
  title?: string;
  description?: string;
  priority?: string;
  date?: string;
  createdAt: Date;
  updatedAt: Date;
  onDelete?: (id: string) => void;
};
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';



const Card: NextPage<CardType> = ({
  id,
  status,
  title,
  description,
  priority,
  date,
  createdAt,
  updatedAt,
  onDelete,
}) => {
  const router = useRouter();

  const deleteTask = async (id: string) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful deletion (e.g., show a success message or refresh the list)
        onDelete?.(id); // Call onDelete callback
        console.log("Task deleted successfully");
        return true;
      } else {
        // Handle errors (e.g., show an error message)
        console.error(data.message || "Failed to delete task");
        return false;
      }
    } catch (error) {
      console.error("An unexpected error occurred while deleting the task");
      return false;
    }
  };

  const getTimeDifference = (createdAt: Date, updatedAt?: Date): string => {
    const now = new Date();
    const referenceDate = updatedAt ? new Date(updatedAt) : new Date(createdAt);
  
    const years = differenceInYears(now, referenceDate);
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  
    const months = differenceInMonths(now, referenceDate);
    if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
  
    const days = differenceInDays(now, referenceDate);
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  
    const hours = differenceInHours(now, referenceDate);
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
  
    const minutes = differenceInMinutes(now, referenceDate);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  };
  return (
    <div className="flex flex-col items-start justify-start gap-[16px] min-w-[193px] max-w-[257px] text-left text-xl text-dimgray-200 font-inter">
      <div className="self-stretch rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-start p-3 gap-[16px] text-base text-dimgray-100 border-[1px] border-solid border-gainsboro-200">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="w-full flex justify-end gap-4">
              <span
                onClick={() => {
                  router.push(
                    `/create?id=${id}&status=${status}&title=${title}&description=${description}&priority=${priority}&date=${date}`
                  );
                }}
                className="cursor-pointer"
              >
                <HiOutlinePencil className="text-xl" />
              </span>
              <span
                onClick={() => deleteTask(id || "")}
                className="cursor-pointer"
              >
                <MdDelete className="text-xl" />
              </span>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative text-xl">{title}</div>
              <div className="self-stretch relative text-sm text-gray-700">
                {description}
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-salmon flex flex-row items-center justify-center py-1.5 px-2 text-xs text-white">
            {status === "In Progress" ? (
              <div className="relative inline-block min-w-[39px] p-2 rounded-lg bg-orange-500 text-white">
                {status}
              </div>
            ) : (
              <div className="relative inline-block min-w-[39px] p-2 rounded-lg bg-red-600 text-white">
                {status}
              </div>
            )}
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
            <LuClock3 className="h-6 w-6 relative overflow-hidden shrink-0" />
            <div className="relative font-semibold inline-block min-w-[83px]">
              {date}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[178px] pl-0 gap-[20px] text-sm text-gray-600">
          <div className="relative font-medium inline-block min-w-[53px] whitespace-nowrap">
            {getTimeDifference(createdAt,
  updatedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
