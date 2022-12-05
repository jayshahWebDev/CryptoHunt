import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../config/api";
import { cryptoContext } from "../../cryptoContext";
import { numberWithCommas } from "../../util";
import CoinList from "../CoinList";

const Sidebar = () => {
  const { id } = useParams();
  const [coinDetail, setCoinDetail] = useState("");

  const { currency, symbol } = useContext(cryptoContext);

  const fetchCoinDetail = async () => {
    try {
      console.log("inside fetchcoindetail");
      let coin = await axios.get(SingleCoin(id));
      console.log("coin::", coin.data);
      setCoinDetail(coin.data);
    } catch (error) {
      console.log("fetchCoinDetail Error::", error.message);
    }
  };

  useEffect(() => {
    fetchCoinDetail();
  }, []);

  return (
    <div>
      {coinDetail && (
        <div>
          <div className="flex flex-col justify-center items-center mt-[2%]">
            <img src={coinDetail.image.large} className="h-[170px]" />
            <p className="font-montserrat font-semibold text-[45px] text-white">
              {coinDetail.name}
            </p>
          </div>
          <div className="flex flex-col gap-y-[15px] font-montserrat text-white text-justify">
            <h3 className="text-[17px]">
              {coinDetail.description.en.split(". ")[0]}.
            </h3>

            <p className="text-[27px]">
              <span className="font-semibold">Rank : </span>
              {coinDetail.market_cap_rank}
            </p>
            <p className="text-[27px]">
              <span className="font-semibold">Current Price : </span>
              {symbol+" "}
              {numberWithCommas(
                coinDetail.market_data.current_price[currency.toLowerCase()]
              )}
            </p>
            <p className="text-[27px]">
              <span className="font-semibold">Market Cap : </span>
              {symbol+" "}
              {numberWithCommas(
                coinDetail.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
