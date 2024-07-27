"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { IoMdAdd, IoMdStarOutline } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdPriorityHigh } from "react-icons/md";
import { RiLoaderFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not selected");
  const [priority, setPriority] = useState("Not selected");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    const router = useRouter();
    e.preventDefault();
    console.log(title, description, status, priority, deadline);

    try {
      const response = await fetch("http://localhost:8000/api/v1/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          status,
          priority,
          deadline,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login (e.g., redirect to home)
        router.push("/");
      } else {
        setError(data.message || "task creation failed");
      }
    } catch (error) {
      setError("An unexpected error occurred while creating task");
    }
  };

  return (
    <div className="w-screen flex flex-col items-start justify-start mx-6 pb-[513px] box-border gap-[32px] leading-[normal] tracking-[normal] text-left text-base text-silver-200 font-inter mq450:gap-[16px] overflow-hidden">
      <section className="w-[920px] self-stretch flex flex-col items-start justify-start gap-[27px] text-left text-[48px] text-lightgray font-barlow">
        <header className="w-full flex flex-row items-center justify-between text-left text-base text-gray font-inter">
          <div className="flex flex-row items-center justify-start gap-[16px] w-full">
            <div className="flex gap-6">
              <RxCross2 className="h-6 w-6 relative min-h-[24px]" />
              <BsArrowsAngleExpand className="h-5 w-5 relative min-h-[24px]" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="rounded bg-whitesmoke flex flex-row items-center justify-start p-2 gap-[14px]">
              <div className="text-decoration-none relative text-inherit inline-block min-w-[44px]">
                Share
              </div>
              <IoShareSocialOutline className="h-6 w-6 relative" />
            </div>
            <div className="rounded  flex flex-row items-center justify-start p-2 gap-[14px]">
              <a className="text-decoration-none relative text-inherit inline-block min-w-[44px]">
                Favourite
              </a>
              <IoMdStarOutline className="h-6 w-6 relative" />
            </div>
          </div>
        </header>
        <form
          onSubmit={handleSubmit}
          className="self-stretch w-[60%] flex flex-col items-center justify-start gap-[38px] mq625:gap-[19px]"
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq625:gap-[16px]">
            <input
              className={`w-full border-none outline-none bg-whitesmoke h-14 rounded-lg flex items-center justify-start py-4 px-3 box-border font-inter text-xl ${
                title ? "text-black" : "text-darkgray"
              } mt-2`}
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <div className="w-full flex flex-col items-center justify-between gap-[20px] text-base text-dimgray font-inter">
              <div className="w-full flex flex-col items-center justify-between gap-[24px] flex-1">
                <div className="w-full flex flex-row items-center justify-between gap-[24px] flex-1">
                  <RiLoaderFill className="h-6 w-6 relative" />
                  <select
                    className={`w-60 border-none outline-none bg-whitesmoke h-14 rounded-lg font-inter text-xl ${
                      status !== "Not selected" ? "text-black" : "text-darkgray"
                    }`}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="Not selected">Not selected</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="w-full flex flex-row items-center justify-between gap-[24px] flex-1">
                  <MdPriorityHigh className="h-6 w-6 relative shrink-0" />
                  <select
                    className={`w-60 border-none outline-none bg-whitesmoke h-14 rounded-lg font-inter text-xl ${
                      priority !== "Not selected"
                        ? "text-black"
                        : "text-darkgray"
                    }`}
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="Not selected">Not selected</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
                <div className="w-full flex flex-row items-center justify-between gap-[24px] flex-1">
                  <CiCalendarDate className="h-6 w-6 relative" />
                  <input
                    className={`w-60 border-none outline-none bg-whitesmoke h-14 rounded-lg font-inter text-xl text-darkgray ${
                      deadline ? "text-black" : "text-darkgray"
                    }`}
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </div>
                <div className="w-full flex flex-row items-center justify-between gap-[24px] flex-1">
                  <GoPencil className="h-6 w-6 relative" />
                  <textarea
                    className={`w-60 min-h-20 border-none outline-none bg-whitesmoke rounded-lg font-inter text-xl ${
                      description ? "text-black" : "text-darkgray"
                    }`}
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button className="w-full cursor-pointer [border:none] p-0 bg-transparent flex flex-row items-center justify-between gap-[23px]">
                  <IoMdAdd className="h-6 w-6 relative" />
                  <div className="w-60 border-none outline-none bg-whitesmoke rounded-lg font-inter text-xl text-darkgray">
                    Add custom property
                  </div>
                </button>
                <button
                  className="cursor-pointer py-3 px-5 bg-transparent self-stretch shadow-inset flex items-center justify-center rounded-lg bg-gradient-to-b from-purple-500 to-blue-900 border border-blueviolet hover:bg-gainsboro hover:border-mediumslateblue"
                  type="submit"
                >
                  <div className="relative text-xl font-inter text-white text-left inline-block min-w-[71px] whitespace-nowrap mq450:text-base">
                    Create Task
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <hr className="w-full text-darkgray" />
      <div className="self-stretch relative bg-gainsboro" />
      <div className="self-stretch relative">
        Start writing, or drag your own files here.
      </div>
    </div>
  );
};

export default CreateTask;
