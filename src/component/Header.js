import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState, useContext } from "react";
import { cryptoContext } from "../cryptoContext";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { currency, setCurrency } = useContext(cryptoContext);

  const handleDropDown = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="bg-headerBg h-[60px] flex justify-between items-center">
      <div className="mx-[3%]">
        <p className="text-logo font-montserrat font-bold text-[20px]">
          Crypto Hunt
        </p>
      </div>
      <div className="mx-[3%] flex gap-x-[20px] ">
        <div className="w-[80px] relative " onClick={handleDropDown}>
          <div className="flex items-center justify-between px-[10px] py-[5px] rounded-[5px] text-white w-[100%] cursor-pointer border-[1px] border-gray hover:border-white">
            <p>{currency}</p>
            {open ? (
              <AiFillCaretUp color="#ffffff" />
            ) : (
              <AiFillCaretDown color="#ffffff" />
            )}
          </div>
          <div
            className={`bg-dropDown absolute w-[100%] top-[37px] ${
              open ? "block" : "hidden"
            } rounded-[5px] text-white`}
          >
            <ul className="flex flex-col gap-y-[10px] ">
              <li
                className="hover:bg-gray w-[100%] px-[10px] py-[5px] cursor-pointer"
                onClick={(e) => {
                  setCurrency(e.target.innerText);
                }}
              >
                USD
              </li>
              <li
                className="hover:bg-gray w-[100%] px-[10px] py-[5px] cursor-pointer"
                onClick={(e) => {
                  setCurrency(e.target.innerText);
                }}
              >
                INR
              </li>
            </ul>
          </div>
        </div>

        <button className="text-headerBg bg-yellow px-[10px] py-[5px] rounded-[5px] cursor-pointer">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Header;
