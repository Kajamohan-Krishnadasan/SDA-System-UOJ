import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigate from "../../shared/AutoNavigate/navigation";
import LoadingComponent from "../../shared/loading/loading.component";
import FooterComponent from "../footer/footer.component";
import HeaderComponent from "../header/header.component";
import MainComponent from "../main/main.component";
import "./public.component.scss";

const PublicComponent = () => {
  const nav = useNavigate();
  const auth = localStorage.getItem("authenticated");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (auth) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        Navigate(nav);
      }, 1000);
    }
  }, [nav, auth]);

  return (
    <div className="public">
      {isLoading && <LoadingComponent />}
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default PublicComponent;
