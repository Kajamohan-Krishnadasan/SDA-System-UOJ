import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FooterComponent from "../../common/footer/footer.component";
import HeaderComponent from "../../common/header/header.component";
import MainComponent from "../main/main.component";

import "./student.component.scss";

const StudentComponent = () => {
  const nav = useNavigate();

  useEffect(() => {
    function checkAuth() {
      const loggedInUser = localStorage.getItem("authenticated");
      const loggedUserRole = localStorage.getItem("user-role");

      if (loggedInUser !== "true" || loggedUserRole !== "student") {
        nav("/sda-uoj-system");
      }
    }

    checkAuth();
  }, [nav]);

  return (
    <div className="Student">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default StudentComponent;
