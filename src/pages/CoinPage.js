import { useContext } from "react";
import AuthModel from "../component/AuthModel";
import Chart from "../component/coinPage/Chart";
import Sidebar from "../component/coinPage/Sidebar";
import Header from "../component/Header";
import { cryptoContext } from "../cryptoContext";

const CoinPage = () => {
  const { openAuthModel } = useContext(cryptoContext);

  return (
    <div className={`bg-darkBlack min-h-[100vh]`}>
      <Header />
      <div className="flex flex-col mx-[4%] laptop:flex-row laptop:gap-x-[25px]">
        <Sidebar />
        <Chart />
        {openAuthModel ? <AuthModel /> : ""}
      </div>
    </div>
  );
};

export default CoinPage;
