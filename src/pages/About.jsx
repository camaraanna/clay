import React from "react";
import team from "../assets/img/Team.jpg";

export const About = () => {
  return (
    <div>
      <div className="container-title-store">
        <h1 className="title-store">About </h1>
      </div>

      <section className="container-description-brand">
        <article>
          <figure>
            <img src={team} width="1000" style={{ borderRadius: "10px" }} />
          </figure>
          <div className="description-brand">
            <p className="description-brand-text about">
              <p>Address : John Doe 1234 Elm Street Los Angeles, CA 90001 United States</p>
              <br />
              <p>Phone number : (555) 123-4567</p>
              <a style={{ textDecoration: "none", color: "black" }} href="mailto:clay-store@mail.com">
                Email: clay-store@mail.com
              </a>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
