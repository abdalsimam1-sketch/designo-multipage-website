import { GenericDesign } from "../components/GenericDesign";
import pic1 from "../assets/app-design/desktop/image-airfilter.jpg";
import pic2 from "../assets/app-design/desktop/image-eyecam.jpg";
import pic3 from "../assets/app-design/desktop/image-faceit.jpg";
import pic4 from "../assets/app-design/desktop/image-loopstudios.jpg";
import pic5 from "../assets/app-design/desktop/image-todo.jpg";
import { NavigationSection } from "../components/NavigationSection";
import { GetInTouch } from "../components/GetInTouch";

export const AppDesign = () => {
  const appDesignSamples = [
    {
      pic: pic1,
      title: " AIRFILTER",
      text: " Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      pic: pic2,
      title: " EYECAM",
      text: "  Product that lets you edit your favorite photos and videos at any time",
    },
    {
      pic: pic3,
      title: " FACEIT",
      text: "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      pic: pic4,
      title: " LOOPSTUDIOS",
      text: "A VR experience app made for Loopstudios",
    },
    {
      pic: pic5,
      title: " TODO",
      text: " A todo app that features cloud sync with light and dark mode",
    },
  ];

  return (
    <>
      <section>
        <GenericDesign
          name="APP DESIGN"
          text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        ></GenericDesign>
      </section>
      <section className=" container mb-5">
        <div className="app-design-samples row">
          {appDesignSamples.map((sample, index) => (
            <div
              className="col-10 mx-auto col-md-6 mx-md-0 col-lg-4 g-4"
              key={index}
            >
              <div className="card h-100">
                <img
                  src={sample.pic}
                  alt=""
                  className="card-img-top img-fluid"
                />
                <footer className="card-footer text-center sample-footer ">
                  <h3 className="sample-title">{sample.title}</h3>
                  <p className="text-dark">{sample.text}</p>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="nav-section">
        <NavigationSection
          class1="web-design"
          class2="graphic-design"
          title1="WEB DESIGN"
          title2="GRAPHIC DESIGN"
          link1="/web-design"
          link2="/graphic-design"
        ></NavigationSection>
      </section>
      <section className="">
        <GetInTouch></GetInTouch>{" "}
      </section>
    </>
  );
};
