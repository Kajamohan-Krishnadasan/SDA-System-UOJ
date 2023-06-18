import React from "react";
import "./footer.component.scss";

const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__copyright">
        © Copyright {year} University of Jaffna.
      </div>
    </footer>
  );
};

export default FooterComponent;
