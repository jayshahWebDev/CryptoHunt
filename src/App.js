import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
