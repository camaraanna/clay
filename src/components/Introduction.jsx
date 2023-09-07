import { Link } from "react-router-dom";

export const Introduction = () => {
  return (
    <section className="container-intro">
      <article>
        <div className="description-intro">
          <p className="description-intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <div className="container-btn-shop ">
            <Link to={`/Shop`}>
              <button className="btn-shop">Shop </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Introduction;
