import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { cryptoContext } from "./cryptoContext";
import { useState, useEffect } from "react";
import { CoinListData } from "./config/api";
import axios from "axios";

function App() {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coinList, setCoinList] = useState([]);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState(null);
  const [openAuthModel, setOpenAuthModel] = useState(false);

  const fetchCoinList = async () => {
    let coinData = await axios.get(CoinListData(currency, page));
    setCoinList(coinData.data);
  };

  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);

  return (
    <cryptoContext.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        coinList,
        setCoinList,
        fetchCoinList,
        page,
        setPage,
        openAuthModel,
        setOpenAuthModel,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </cryptoContext.Provider>
  );
}

export default App;
