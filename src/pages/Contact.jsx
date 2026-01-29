import { LocationImages } from "../components/locationImages";

export const Contact = () => {
  return (
    <>
      <section className=" container contact-section rounded d-flex flex-column flex-md-row text-center text-md-start ">
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
            />
            <input
              type="email"
              className="form-control inputs"
              placeholder="Email"
            />
            <input
              type="phone"
              className="form-control inputs"
              placeholder="Phone number"
            />
            <textarea
              type="text"
              className="form-control inputs"
              placeholder="Message"
              rows="5"
            />
            <button className="btn bg-white text-dark btn-bg align-self-end mb-5">
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
