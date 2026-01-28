import React from "react";
import phoneImg from "../assets/home/desktop/image-hero-phone.png";
import pic1 from "../assets/home/desktop/illustration-passionate.svg";
import pic2 from "../assets/home/desktop/illustration-resourceful.svg";
import pic3 from "../assets/home/desktop/illustration-friendly.svg";
import { GetInTouch } from "../components/GetInTouch";
import { Link } from "react-router-dom";
export const Home = () => {
  const descriptions = [
    {
      pic: pic1,
      title: "Passionate",
      text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      pic: pic2,
      title: "Resourceful",
      text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      pic: pic3,
      title: "Friendly",
      text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    },
  ];
  return (
    <>
      <section className="home-hero-section mx-auto d-flex flex-column flex-md-row  justify-content-around text-center text-md-start my-5 pb-5 ">
        {" "}
        <div className="text-white col-md-5 d-flex flex-column justify-content-center order-2 order-md-1">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="btn bg-light text-dark align-self-start mx-auto m-md-0">
            Learn More
          </button>
        </div>
        <div className="col-md-5 hero-img order-1 order-md-2">
          <img src={phoneImg} alt="phone-image" className="img-fluid" />
        </div>
      </section>
      <section className="design-section d-flex flex-column flex-md-row mx-auto text-white  gap-3">
        <Link
          to="/web-design"
          className="web-design d-flex flex-column justify-content-center align-items-center rounded"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          <div className="">
            <h1>WEB DESIGN</h1>
            <h3>VIEW PROJECTS</h3>
          </div>
        </Link>
        <div
          className="column-2 d-flex flex-column gap-3"
          style={{ maxWidth: "550px", width: "100%" }}
        >
          <Link to="/app-design">
            {" "}
            <div className="app-design d-flex flex-column justify-content-center align-items-center rounded">
              <h1>APP DESIGN</h1>
              <h3>VIEW PROJECTS</h3>
            </div>
          </Link>
          <Link to="graphic-design">
            {" "}
            <div className="graphic-design  d-flex flex-column justify-content-center align-items-center rounded">
              <h1>GRAPHIC DESIGN</h1>
              <h3>VIEW PROJECTS</h3>
            </div>
          </Link>
        </div>
      </section>
      <section className="description-section mx-auto mt-5 text-center">
        <div className="cards d-flex flex-column flex-md-row gap-3 ">
          {descriptions.map((description, index) => (
            <div className="card" key={index}>
              <img src={description.pic} alt="" className="mx-auto" />
              <h3>{description.title}</h3>
              <p className="text-muted">{description.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <GetInTouch></GetInTouch>
      </section>
    </>
  );
};
