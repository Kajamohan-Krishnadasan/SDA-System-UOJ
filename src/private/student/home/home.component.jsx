import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./home.component.scss";
import FooterComponent from "../../common/footer/footer.component";
import HeaderComponent from "../../common/header/header.component";

const HomeComponent = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/sda-uoj-system" />;
  } else {
    return (
      <div>
        <HeaderComponent />
        <FooterComponent />
      </div>
    );
  }
};

export default HomeComponent;
