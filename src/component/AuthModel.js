import { useContext, useState } from "react";
import { cryptoContext } from "../cryptoContext";
import { RxCross1 } from "react-icons/rx";

const AuthModel = () => {
  const { openAuthModel, setOpenAuthModel } = useContext(cryptoContext);
  const [tabIndex, setTabIndex] = useState(1);

  const removeModel = () => {
    setOpenAuthModel(false);
  };

  const setIndex = (index) => {
    setTabIndex(index);
  };
  return (
    <div className="w-[300px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] px-[20px] py-[15px] bg-modelColor">
      <div className="flex justify-end">
        <RxCross1
          className="cursor-pointer"
          color="#ffffff"
          onClick={removeModel}
        />
      </div>
      <div className="flex justify-around text-white font-montserrat font-medium">
        <div
          className={`${
            tabIndex === 1 ? "border-b-[2px]" : ""
          } cursor-pointer border-yellow`}
          onClick={() => {
            setIndex(1);
          }}
        >
          SIGN IN
        </div>
        <div
          className={`${
            tabIndex === 2 ? "border-b-[2px]" : ""
          } cursor-pointer border-yellow`}
          onClick={() => {
            setIndex(2);
          }}
        >
          SIGN UP
        </div>
      </div>
      <div className="mt-[20px] font-montserrat font-medium text-white flex flex-col gap-y-[20px]">
        <div className="flex flex-col gap-y-[5px] ">
          <span>Email</span>
          <input
            className="p-[5px] bg-modelColor border-[1px] border-gray rounded-[10px] focus:border-white outline-none"
            placeholder="Enter Email"
          />
        </div>

        <div className="flex flex-col gap-y-[5px] ">
          <span>Password</span>
          <input
            className="p-[5px] bg-modelColor border-[1px] border-gray rounded-[10px] focus:border-white outline-none"
            placeholder="Enter Password"
          />
        </div>

        <div
          className={`flex flex-col gap-y-[5px] ${
            tabIndex === 1 ? "hidden" : "block"
          }`}
        >
          <span>Confirm Password</span>
          <input
            className="p-[5px] bg-modelColor border-[1px] border-gray rounded-[10px] focus:border-white outline-none"
            placeholder="Enter Confirm Password"
          />
        </div>

        <button className="bg-yellow py-[10px] rounded-[10px] text-black">
          {tabIndex === 1 ? "SIGN IN" : "SIGN UP"}
        </button>
      </div>
    </div>
  );
};

export default AuthModel;
