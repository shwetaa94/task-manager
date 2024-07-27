"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration successful");
    router.push("/"); // Navigate to the home page after registration
  };

  return (
    <div
    className={`w-[648px] rounded-2xl [background:linear-gradient(180deg,_#f7f7f7,_#f0f0f0)] box-border flex flex-col items-center justify-start py-[58px] px-[59px] gap-[32px] max-w-full text-center text-29xl text-darkslategray font-barlow border-[1px] border-solid border-lightgray mq675:gap-[16px] mq675:py-[38px] mq675:px-[29px] mq675:box-border`}
    >
      <h1 className="m-0 self-stretch relative text-inherit font-semibold mq450:text-2xl mq750:text-3xl">
        <span>Register to </span>
        <span className="text-slateblue">Workflo</span>
        <span>!</span>
      </h1>
      <div className="self-stretch flex flex-col items-center justify-start mq675:gap-6">
        <form
          className="m-0 self-stretch flex flex-col items-start justify-start gap-6"
          onSubmit={handleRegister}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <input
              className="w-full border-none outline-none bg-whitesmoke h-14 rounded-lg flex items-center justify-start py-4 px-3 box-border font-inter text-xl text-darkgray min-w-[250px] cursor-pointer"
              placeholder="Your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-full border-none outline-none bg-whitesmoke h-14 rounded-lg flex items-center justify-start py-4 px-3 box-border font-inter text-xl text-darkgray min-w-[250px] cursor-pointer"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full border-none outline-none bg-whitesmoke h-14 rounded-lg flex items-center justify-start py-4 px-3 box-border font-inter text-xl text-darkgray min-w-[250px]"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="cursor-pointer py-3 px-5 bg-transparent self-stretch shadow-inset flex items-center justify-center rounded-lg bg-gradient-to-b from-purple-500 to-blue-900 border border-blueviolet hover:bg-gainsboro hover:border-mediumslateblue"
            type="submit"
          >
            <div className="relative text-xl font-inter text-white text-left inline-block min-w-[71px] whitespace-nowrap mq450:text-base">
              Register
            </div>
          </button>
        </form>
      </div>
      <div className="flex flex-row items-start justify-center gap-1 text-xl text-dimgray font-inter mq450:flex-wrap">
        <div
          className="relative mq450:text-base cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Already have an account?
        </div>
        <div
          className="relative inline-block min-w-[63px] whitespace-nowrap cursor-pointer text-darkslateblue mq450:text-base"
          onClick={() => router.push("/login")}
        >
          <span>Log in</span>
          <span className="text-dimgray">.</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
