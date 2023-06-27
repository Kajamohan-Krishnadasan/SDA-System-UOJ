import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import "./main.component.scss";

const MainComponent = () => {
  return (
    <main>
      <div className="main">
        <div className="main__container">
          <div className="main__title">
            <div className="main__greeting">
              <h1>Dashboard</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
