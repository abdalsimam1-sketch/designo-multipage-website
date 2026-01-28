import React from "react";

export const GetInTouch = () => {
  return (
    <section className="get-in-touch d-flex flex-column flex-md-row  align-items-center justify-content-md-around py-3 card mx-auto text-center text-md-start">
      <div className="text-white col-md-4 ">
        <h2> Let’s talk about your project</h2>
        <p>
          {" "}
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="d-flex align-items-center ">
        <button className="btn bg-white text-black ">GET IN TOUCH</button>
      </div>
    </section>
  );
};
