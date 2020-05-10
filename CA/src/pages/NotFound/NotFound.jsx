import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/pictures/image-404.png";

const NotFound = () => {
  const location = useLocation();
  return (
    <>
      <img src={logo} alt="imageNotFound"></img>
      <p>
        <b>404.</b> <p>That’s an error.</p>
      </p>
      <p>
        The requested URL {location.pathname} was not found. That’s all we know.
      </p>
      <Link to="/">Home page</Link>
    </>
  );
};

export default NotFound;
