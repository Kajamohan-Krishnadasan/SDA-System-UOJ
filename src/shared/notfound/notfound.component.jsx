import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigate from "../AutoNavigate/navigation";
import LoadingComponent from "../loading/loading.component";
import "./notfound.component.scss";

const NotfoundComponent = () => {
  const nav = useNavigate();
  const auth = localStorage.getItem("authenticated");
  const [isLoading, setIsLoading] = useState(false);

  const goHome = () => {
    if (auth) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        Navigate(nav);
      }, 1000);
    }
  };

  return (
    <div className="Notfound">
      {isLoading && <LoadingComponent />}
      <div className="Notfound__content">
        <div className="Notfound__content__title">
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
        <div className="Notfound__content__description">
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>

          <button className="Notfound__content__button" onClick={goHome}>
            Go To Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotfoundComponent;
