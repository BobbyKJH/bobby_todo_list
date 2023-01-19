import React from "react";

import { Route, Routes } from "react-router-dom";

import DayPage from "./page/DayPage";
import MonthPage from "./page/MonthPage";
import YearPage from "./page/YearPage";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<DayPage />} />
        <Route path="/month" element={<MonthPage />} />
        <Route path="/year" element={<YearPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
