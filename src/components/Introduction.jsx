import React from "react";
import { Link } from "react-router-dom";

export const Introduction = () => {
  return (
    <div className="container-intro">
      <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Link to={`/Shop`}>
        <button className="btn-shop">Shop </button>
      </Link>
    </div>
  );
};
export default Introduction;
