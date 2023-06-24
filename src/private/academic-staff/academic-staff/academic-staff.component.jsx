import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import FooterComponent from "../../common/footer/footer.component";
import HeaderComponent from "../../common/header/header.component";
import MainComponent from "../main/main.component";

import "./academic-staff.component.scss";

const AcademicStaffComponent = () => {
  const [authenticated, setauthenticated] = useState(null);
  console.count("AcademicStaffComponent");

  useEffect(() => {
    async function checkAuth() {
      const loggedInUser = localStorage.getItem("authenticated");
      const loggedUserRole = localStorage.getItem("user-role");

      console.log("loggedInUser: ", loggedInUser);
      console.log("loggedUserRole: ", loggedUserRole);

      if (loggedInUser === "true" && loggedUserRole === "staff") {
        await setauthenticated(true);
      }
    }

    checkAuth();
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/sda-uoj-system" />;
  } else {
    return (
      <div className="Student">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    );
  }
};

export default AcademicStaffComponent;
