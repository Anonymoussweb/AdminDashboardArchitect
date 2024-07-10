import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardEx from "./pages/DashboardEx";
import Footer from "./components/Footer";
import RegTable from "./pages/RegTable";
import DBoxes from "./pages/DBoxes";
import { useState } from "react";

function App() {
  const [togg, setTogg] = useState(false);
  const [bars, setBars] = useState(false);

  return (
    <div className="relative">
      <BrowserRouter>
        <Navbar setTogg={setTogg} setBars={setBars} />
        <Sidebar togg={togg} bars={bars} />
        <Routes>
          <Route path="/" element={<DashboardEx bars={bars} />} />
          <Route path="/regTable" element={<RegTable bars={bars} />} />
          <Route path="/DashboardBoxes" element={<DBoxes bars={bars} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
