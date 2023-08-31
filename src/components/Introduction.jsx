import React from "react";
import { Link } from "react-router-dom";

export const Introduction = () => {
  return (
    <section className="container-intro"><div className="">
      <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="btn-shop">
        <Link to={`/Shop`}>
          <button className="btn-shop">Shop </button>
        </Link>
        </div>
    
    </section>
  );
};
export default Introduction;
