import React from "react";
import FooterComponent from "../footer/footer.component";
import HeaderComponent from "../header/header.component";
import MainComponent from "../main/main.component";
import "./public.component.scss";

const PublicComponent = () => {
  // console.count("PublicComponent");
  return (
    <div className="public">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default PublicComponent;
