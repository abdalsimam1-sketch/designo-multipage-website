import { LocationImages } from "../components/LocationImages";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
  };
  return (
    <>
      <section className=" contact-section mx-auto rounded d-flex flex-column flex-md-row text-center text-md-start ">
        <div className="contact-text text-white col-md-7 p-5 d-flex flex-column justify-content-center">
          <h1 className=""> Contact us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="contact-form text-white col-md-5 p-5 ">
          <form className="d-flex flex-column gap-3 ">
            <input
              type="text"
              className="form-control inputs"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="form-control inputs"
              placeholder="Email"
              required
            />
            <input
              type="phone"
              className="form-control inputs"
              placeholder="Phone number"
              required
            />
            <textarea
              type="text"
              className="form-control inputs"
              placeholder="Message"
              rows="5"
              required
            />
            <button
              type="submit"
              className="btn bg-white text-dark btn-bg align-self-end mb-5"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
      <section className="">
        <LocationImages></LocationImages>
      </section>
    </>
  );
};
