import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { cryptoContext } from "./cryptoContext";
import { useState, useEffect } from "react";

function App() {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);

  return (
    <cryptoContext.Provider value={{ currency, setCurrency, symbol }}>
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
