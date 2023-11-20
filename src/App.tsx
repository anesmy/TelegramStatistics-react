import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/loginPage/Login";
import TelegramStatistics from "./components/TgStatisticsPage/TelegramStatistics";

const App: React.FC = () => {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tg-stats" element={<TelegramStatistics />} />
      </Routes>
    </div>
  );
};

export default App;
