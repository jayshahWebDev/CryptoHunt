import Chart from "../component/coinPage/Chart";
import Sidebar from "../component/coinPage/Sidebar";
import Header from "../component/Header";

const CoinPage = () => {
  return (
    <div className="bg-darkBlack min-h-[100vh] ">
      <Header />
      <div className="flex flex-col mx-[4%] laptop:flex-row laptop:gap-x-[25px]">
        <Sidebar />
        <Chart />
      </div>
    </div>
  );
};

export default CoinPage;
