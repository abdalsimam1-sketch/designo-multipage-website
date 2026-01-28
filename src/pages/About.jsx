import aboutHero from "../assets/about/desktop/image-about-hero.jpg";
export const About = () => {
  return (
    <>
      <section className="about-hero-section mx-auto d-flex flex-column flex-md-row rounded">
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
    </>
  );
};
