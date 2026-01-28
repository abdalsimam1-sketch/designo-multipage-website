import { GetInTouch } from "../components/GetInTouch";
import { GenericDesign } from "../components/GenericDesign";
import { NavigationSection } from "../components/NavigationSection";
import pic1 from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import pic2 from "../assets/graphic-design/desktop/image-change.jpg";
import pic3 from "../assets/graphic-design/desktop/image-science.jpg";

export const GraphicDesign = () => {
  const graphicSamples = [
    {
      pic: pic1,
      title: "Tim Brown",
      text: " A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      pic: pic2,
      title: " Boxed water",
      text: "A simple packaging concept made for Boxed Water",
    },
    {
      pic: pic3,
      title: "Science!",
      text: "A poster made in collaboration with the Federal Art Project",
    },
  ];
  return (
    <>
      <section>
        <GenericDesign
          name="Graphic Design"
          text="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        ></GenericDesign>
      </section>
      <section className="container my-5 ">
        <div className="row">
          {graphicSamples.map((sample) => (
            <div className="col-10  mx-auto mx-md-0 col-md-6 col-lg-4 g-3 ">
              <div className="card">
                <img src={sample.pic} alt="" className="card-img-top" />
                <footer className="card-footer sample-footer text-center">
                  <h3 className="sample-title">{sample.title}</h3>
                  <p className="text-dark">{sample.text}</p>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <NavigationSection
          link1="/app-design"
          link2="/web-design"
          title1="APP DESIGN"
          title2="WEB DESIGN"
          class1="app-design"
          class2="web-design"
        ></NavigationSection>
      </section>
      <section>
        <GetInTouch></GetInTouch>
      </section>
    </>
  );
};
