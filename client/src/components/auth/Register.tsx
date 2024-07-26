import type { NextPage } from "next";

export type RegisterType = {
  className?: string;
};

const Register: NextPage<RegisterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[648px] rounded-2xl [background:linear-gradient(180deg,_#f7f7f7,_#f0f0f0)] box-border flex flex-col items-center justify-start py-[58px] px-[59px] gap-[32px] max-w-full text-center text-29xl text-darkslategray font-barlow border-[1px] border-solid border-lightgray mq675:gap-[16px] mq675:py-[38px] mq675:px-[29px] mq675:box-border ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-10xl mq750:text-19xl">
        <span>{`Welcome to `}</span>
        <span className="text-slateblue">Workflo</span>
        <span>!</span>
      </h1>
      <div className="self-stretch flex flex-col items-center justify-start mq675:gap-[21px]">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[22px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <input
              className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-14 rounded-lg flex flex-row items-center justify-start py-4 px-3 box-border font-inter text-xl text-darkgray min-w-[250px] cursor-pointer"
              placeholder="Full name"
              type="text"
            />
            <input
              className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-14 rounded-lg flex flex-row items-center justify-start py-4 px-3 box-border font-inter text-xl text-darkgray min-w-[250px]"
              placeholder="Your email"
              type="text"
            />
            <div className="self-stretch rounded-lg bg-whitesmoke flex flex-row items-center justify-between py-4 px-3 gap-[20px]">
              <input
                className="w-[93px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 relative text-darkgray text-left inline-block p-0 mq450:text-base"
                placeholder="Password"
                type="text"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/input-container.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer py-3 px-5 bg-[transparent] self-stretch shadow-[0px_12px_16px_rgba(186,_186,_186,_0.2)_inset,_0px_4px_16px_rgba(0,_0,_0,_0.1)] rounded-lg [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(180deg,_#4c38c2,_#2f2188)] flex flex-row items-center justify-center border-[1px] border-solid border-blueviolet hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumslateblue">
            <div className="relative text-xl font-inter text-white text-left inline-block min-w-[71px] whitespace-nowrap mq450:text-base">
              Sign up
            </div>
          </button>
        </form>
      </div>
      <div className="flex flex-row items-start justify-center gap-[4px] text-xl text-dimgray font-inter mq450:flex-wrap">
        <div className="relative mq450:text-base">Already have an account?</div>
        <div
          className="relative inline-block min-w-[63px] whitespace-nowrap cursor-pointer text-darkslateblue mq450:text-base"
        >
          <span>Log in</span>
          <span className="text-dimgray">.</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
