import aboutHero from "../assets/about/desktop/image-about-hero.jpg";
import worldClass from "../assets/about/desktop/image-world-class-talent.jpg";
import realDeal from "../assets/about/desktop/image-real-deal.jpg";

export const About = () => {
  return (
    <>
      <section className="about-hero-section mx-auto d-flex flex-column flex-md-row rounded my-5">
        <div className="about-hero-text col-md-7 d-flex flex-column justify-content-center p-5 text-white order-2 order-md-1">
          <h1>About us</h1>
          <p className="mb-5 m-md-0">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We've partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We're always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
        <div className="col-md-5 order-1 order-md-2">
          <img
            src={aboutHero}
            alt="About Designo team"
            className="img-fluid h-100 w-100 "
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="world-class-section mx-auto d-flex flex-column flex-md-row  mb-5 rounded">
        <div className="col-md-5">
          <img src={worldClass} alt="" className="img-fluid h-100 w-100" />
        </div>
        <div className="world-text d-flex flex-column justify-content-center col-md-7 p-5">
          <h1>World-Class Talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
        </div>
      </section>
    </>
  );
};
