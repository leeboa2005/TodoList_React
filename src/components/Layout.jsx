import React from "react";
import "../assets/style/layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
