"use client"
import type { NextPage } from "next";
import TaskHeader from "./Header";
import Card from "./Card";
import { CiCalendar, CiFilter } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/v1/task", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        const result = await response.json();

        if (response.ok) {
          setData(result.data);
        } else {
          setError(result.message || "Failed to fetch data");
        }
      } catch (error) {
        setError("An unexpected error occurred");
      }
    };

    fetchData();
  }, [router]);

  if (error) {
    return <div className="error">{error}</div>;
  }


  return (
    <div className="w-full h-screen pl-4 flex flex-col bg-whitesmoke-100 items-start justify-start gap-[16px] leading-[normal] tracking-[normal]">
      <header className="w-full h-auto self-stretch flex flex-col items-end justify-start gap-[16px]  text-left text-[48px] text-gray-500 font-barlow">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] whitespace-nowrap">
            Good morning, Joe!
          </a>
          <div className="flex flex-row items-center justify-start gap-[8px] text-base font-inter">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[125px] whitespace-nowrap">{`Help & feedback`}</a>
            <GoQuestion className="h-6 w-6 relative " />
          </div>
        </div>
        <div className="w-full self-stretch flex flex-row items-center justify-start gap-[8px]">
          <TaskHeader
            image="image1"
            title="Introducing tags"
            description="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
          />
          <TaskHeader
            image="image2"
            title="Share Notes Instantly"
            description="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
          />
          <TaskHeader
            image="image3"
            title="Access Anywhere"
            description="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
          />
        </div>
        <div className="w-full self-stretch flex flex-row items-center justify-between gap-[20px] text-base text-gray-300 font-inter">
          <div className="w-[196px] rounded-lg bg-white box-border  flex flex-row items-center justify-between py-1.5 px-2 border-[1px] border-solid border-whitesmoke-300">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px]">
              Search
            </a>
            <IoIosSearch className="h-6 w-6 relative " />
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] max-w-full">
            <div className="flex flex-row items-center justify-start gap-[16px] max-w-full">
              <div className="rounded  flex flex-row items-center justify-start p-2 gap-[14px]">
                <div className="relative inline-block min-w-[38px]">
                  Calendar
                </div>
                <CiCalendar className="h-6 w-6 relative " />
              </div>
              <div className="rounded  flex flex-row items-center justify-start p-2 gap-[14px]">
                <div className="relative inline-block min-w-[38px]">
                  Automation
                </div>
                <BsStars className="h-6 w-6 relative " />
              </div>
              <div className="rounded  flex flex-row items-center justify-start p-2 gap-[14px]">
                <div className="relative inline-block min-w-[38px]">Filter</div>
                <CiFilter className="h-6 w-6 relative " />
              </div>
              <div className="rounded  flex flex-row items-center justify-start p-2 gap-[14px]">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[44px]">
                  Share
                </a>
                <IoShareSocialOutline className="h-6 w-6 relative " />
              </div>
            </div>
            <button className="cursor-pointer py-1.5 px-[7px] bg-[transparent] shadow-[0px_12px_16px_rgba(186,_186,_186,_0.2)_inset,_0px_1px_8px_rgba(0,_0,_0,_0.25)] rounded-lg [background:linear-gradient(180deg,_#4c38c2,_#2f2188)] flex flex-row items-center justify-center gap-[8px] whitespace-nowrap border-[1px] border-solid border-blueviolet hover:bg-mediumslateblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumslateblue-100">
              <div className="relative text-base font-medium font-inter text-white text-left inline-block min-w-[88px]">
                Create new
              </div>
              <FaPlusCircle className="h-6 w-6 text-white relative " />
            </button>
          </div>
        </div>
      </header>
      {/* all taszks are here */}
      <section className="w-full  h-auto self-stretch rounded-lg flex flex-row flex-wrap items-start justify-center py-4  px-4 gap-[12px] text-left text-xl text-dimgray-200 font-inter">
        <div className="w-full bg-white p-4 h-auto self-stretch flex flex-row items-start justify-between ">
          {/* todo */}
          <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[194px] max-w-[257px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="w-[126px] relative inline-block mq450:text-base">
                Todo
              </div>
              <MdOutlineSort className="h-6 w-6 relative  min-h-[24px]" />
            </div>

            <Card
              toDo="To do"
              title="Implement User Authentication"
              description="Develop and integrate user authentication using email and password."
              status="Urgent"
              date="2024-08-15"
              hrAgo="1 hr ago"
            />
            <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch rounded-lg [background:linear-gradient(180deg,_#3a3a3a,_#202020)]  flex flex-row items-center justify-between whitespace-nowrap gap-[20px]">
              <div className="relative text-base font-inter text-gainsboro-100 text-left inline-block min-w-[67px]">
                Add new
              </div>
              <FiPlus className="h-6 w-6 text-white relative " />
            </button>
          </div>
          {/* in porgress */}
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[194px] max-w-[257px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="w-[126px] relative inline-block mq450:text-base">
                In progress
              </div>
              <MdOutlineSort className="h-6 w-6 relative  min-h-[24px]" />
            </div>

            <Card
              toDo="in progress"
              title="Design Home Page UI"
              description="Develop and integrate user authentication using email and password."
              status="Medium"
              date="2024-08-15"
              hrAgo="1 hr ago"
            />
            <Card
              toDo="in progress"
              title="Conduct User Feedback Survey"
              description="Collect and analyze user feedback to improve app features."
              status="Low"
              date="2024-08-05"
              hrAgo="3 hr ago"
            />
            <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch rounded-lg [background:linear-gradient(180deg,_#3a3a3a,_#202020)]  flex flex-row items-center justify-between whitespace-nowrap gap-[20px]">
              <div className="relative text-base font-inter text-gainsboro-100 text-left inline-block min-w-[67px]">
                Add new
              </div>
              <FiPlus className="h-6 w-6 text-white relative " />
            </button>
          </div>
          {/* uder review */}
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[194px] max-w-[257px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="w-[126px] relative inline-block mq450:text-base">
                Under Review
              </div>
              <MdOutlineSort className="h-6 w-6 relative  min-h-[24px]" />
            </div>

            <Card
              toDo="Under review"
              title="Integrate Cloud Storage"
              description="Enable cloud storage for note backup and synchronization."
              status="Urgent"
              date="2024-08-20"
              hrAgo="2 days  ago"
            />
            <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch rounded-lg [background:linear-gradient(180deg,_#3a3a3a,_#202020)]  flex flex-row items-center justify-between whitespace-nowrap gap-[20px]">
              <div className="relative text-base font-inter text-gainsboro-100 text-left inline-block min-w-[67px]">
                Add new
              </div>
              <FiPlus className="h-6 w-6 text-white relative " />
            </button>
          </div>
          {/* finish */}
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[194px] max-w-[257px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="w-[126px] relative inline-block mq450:text-base">
                Under Review
              </div>
              <MdOutlineSort className="h-6 w-6 relative  min-h-[24px]" />
            </div>

            <Card
              toDo="Finished"
              title="Test Cross-browser Compatibility"
              description="Ensure the app works seamlessly across different web browsers."
              status="Medium"
              date="2024-07-30"
              hrAgo="4 days ago"
            />
            <button className="cursor-pointer [border:none] p-2 bg-[transparent] self-stretch rounded-lg [background:linear-gradient(180deg,_#3a3a3a,_#202020)]  flex flex-row items-center justify-between whitespace-nowrap gap-[20px]">
              <div className="relative text-base font-inter text-gainsboro-100 text-left inline-block min-w-[67px]">
                Add new
              </div>
              <FiPlus className="h-6 w-6 text-white relative " />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
