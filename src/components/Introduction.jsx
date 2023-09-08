import { Link } from "react-router-dom";

export const Introduction = () => {
  return (
    <section className="container-intro">
      <article>
        <div className="description-intro">
          <p className="description-intro-text">Clay is more than just a marketplace; it's a community that empowers emerging and established artists alike. We provide a platform where artists from around the world can showcase their talent, gain visibility, and connect with a global audience. </p>

          <div className="container-btn-shop ">
            <Link to={`/Store`}>
              <button className="btn-shop">Shop </button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Introduction;
