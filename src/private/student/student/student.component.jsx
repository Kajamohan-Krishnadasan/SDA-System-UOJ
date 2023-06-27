import React, { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingComponent from "../../../shared/loading/loading.component.jsx";

import FooterComponent from "../../common/footer/footer.component";
import HeaderComponent from "../../common/header/header.component";

import "./student.component.scss";

const StudentComponent = ({ CHILD }) => {
  console.count("StudentComponent");
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
      {CHILD}
      <FooterComponent />
    </div>
  );
};

export default StudentComponent;
