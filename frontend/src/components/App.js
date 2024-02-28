import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  const btn = (e) => {
    const eventSvg = e.target;
    const button = document.querySelector(".header__button");
    const btn = button.querySelectorAll(".header__btn");
    const result = Array.from(btn);
    result.forEach((item) => {
      item.classList.remove("header__btn_active");
    });
    eventSvg.classList.add("header__btn_active");
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header btn={btn} />
              <Main />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
