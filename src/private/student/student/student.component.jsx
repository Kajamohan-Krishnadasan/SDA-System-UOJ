import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import FooterComponent from "../../common/footer/footer.component";
import HeaderComponent from "../../common/header/header.component";
import MainComponent from "../main/main.component";

import "./student.component.scss";

const StudentComponent = () => {
  const [authenticated, setauthenticated] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const loggedInUser = localStorage.getItem("authenticated");
      const loggedUserRole = localStorage.getItem("user-role");

      if (loggedInUser === "true" && loggedUserRole === "student") {
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

export default StudentComponent;
