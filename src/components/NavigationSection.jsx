import { Link } from "react-router-dom";
export const NavigationSection = ({
  link1,
  link2,
  title1,
  title2,
  class1,
  class2,
}) => {
  return (
    <>
      <section className="navigation-section   d-flex flex-column justify-content-center align-items-center flex-md-row gap-3 mb-5 navlink   ">
        <Link to={`${link1}`} className="">
          {" "}
          <div
            className={`${class1} rounded d-flex flex-column align-items-center justify-content-center mx-auto`}
          >
            <h1>{title1}</h1>
            <h3>VIEW PROJECTS</h3>
          </div>
        </Link>
        <Link to={`${link2}`}>
          {" "}
          <div
            className={`${class2} rounded d-flex flex-column align-items-center justify-content-center mx-auto`}
          >
            <h1>{title2}</h1>
            <h3>VIEW PROJECTS</h3>
          </div>
        </Link>
      </section>
    </>
  );
};
