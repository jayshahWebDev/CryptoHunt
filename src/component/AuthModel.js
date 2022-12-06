import { useContext, useState } from "react";
import { cryptoContext } from "../cryptoContext";
import { RxCross1 } from "react-icons/rx";
import { toastMessage } from "../helper/toast";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../pages/FireBase";

const AuthModel = () => {
  const { openAuthModel, setOpenAuthModel } = useContext(cryptoContext);
  const [tabIndex, setTabIndex] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const removeModel = () => {
    setOpenAuthModel(false);
  };

  const setIndex = (index) => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTabIndex(index);
  };
  const handleSubmit = async () => {
    try {
      if (tabIndex === 2) {
        if (password != confirmPassword) {
          return toastMessage("error", "Passwords does not match");
        }

        let signUpUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        toastMessage("success", "Welcome to CryptoHunt");
      } else {
        let signInUser = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        toastMessage("success", "Welcome to CryptoHunt");
      }
    } catch (error) {
      console.log("handleSubmit AuthModelComponent Error::", error.message);
      toastMessage("error", error.message);
    } finally {
      setOpenAuthModel(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-[5px] ">
          <span>Password</span>
          <input
            className="p-[5px] bg-modelColor border-[1px] border-gray rounded-[10px] focus:border-white outline-none"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-yellow py-[10px] rounded-[10px] text-black"
          onClick={handleSubmit}
        >
          {tabIndex === 1 ? "SIGN IN" : "SIGN UP"}
        </button>
      </div>
    </div>
  );
};

export default AuthModel;
