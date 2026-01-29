import aboutHero from "../assets/about/desktop/image-about-hero.jpg";
import worldClass from "../assets/about/desktop/image-world-class-talent.jpg";
import realDeal from "../assets/about/desktop/image-real-deal.jpg";
import { GetInTouch } from "../components/GetInTouch";
import { LocationImages } from "../components/LocationImages.jsx";

import { Link } from "react-router-dom";

export const About = () => {
  return (
    <main className="about-section text-center text-md-start">
      <section className="about-hero-section mx-auto d-flex flex-column flex-md-row rounded my-md-5 ">
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
      <section className="world-class-section mx-auto d-flex flex-column flex-md-row rounded text-center text-md-start  my-md-5">
        <div className="col-md-5 world-img">
          <img src={worldClass} alt="" className="img-fluid h-100 w-100" />
        </div>
        <div className="world-text d-flex flex-column justify-content-center col-md-7 p-5">
          <h1 className="sample-title">World-Class Talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. Our team is multi-disciplinary and
            we are not merely interested in form — content and meaning are just
            as important. We give great importance to craftsmanship, service,
            and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand’s story and
            mission.
          </p>
          <p></p>
        </div>
      </section>
      <section>
        <LocationImages></LocationImages>
      </section>
      <section className="real-deal-section mx-auto d-flex flex-column flex-md-row rounded  my-md-5">
        <div className="col-md-7 real-text p-5 d-flex flex-column justify-content-center ">
          <h1 className="sample-title">The real deal</h1>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success. We are visual
            storytellers in appealing and captivating ways. By combining
            business and marketing strategies, we inspire audiences to take
            action and drive real results.
          </p>
        </div>
        <div className="col-md-5">
          <img src={realDeal} alt="" className="w-100 h-100 img-fluid" />
        </div>
      </section>
      <section>
        <GetInTouch></GetInTouch>
      </section>
    </main>
  );
};
