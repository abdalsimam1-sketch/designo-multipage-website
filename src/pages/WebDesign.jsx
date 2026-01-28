import { GenericDesign } from "../components/GenericDesign";
import pic1 from "../assets/web-design/desktop/image-blogr.jpg";
import pic2 from "../assets/web-design/desktop/image-builder.jpg";
import pic3 from "../assets/web-design/desktop/image-camp.jpg";
import pic4 from "../assets/web-design/desktop/image-express.jpg";
import pic5 from "../assets/web-design/desktop/image-photon.jpg";
import pic6 from "../assets/web-design/desktop/image-transfer.jpg";
import { GetInTouch } from "../components/GetInTouch";
import { NavigationSection } from "../components/NavigationSection";

export const WebDesign = () => {
  const sampleSites = [
    {
      pic: pic1,
      title: "EXPRESS",
      text: " A multi-carrier shipping website for ecommerce businesses",
    },
    {
      pic: pic2,
      title: "TRANSFER",
      text: "Site for low-cost money transfers and sending money within seconds",
    },
    {
      pic: pic3,
      title: "PHOTON",
      text: "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      pic: pic4,
      title: " BUILDER",
      text: " Connects users with local contractors based on their location",
    },
    {
      pic: pic5,
      title: " BLOGR",
      text: " Blogr is a platform for creating an online blog or publication",
    },
    {
      pic: pic6,
      title: "CAMP",
      text: " Get expert training in coding, data, design, and digital marketing",
    },
  ];

  return (
    <>
      <section>
        <GenericDesign
          name="Web Design"
          text=" We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        ></GenericDesign>
      </section>

      <section className="sample-webpages-section mb-5">
        <div className="container">
          <div className="row">
            {sampleSites.map((sample, index) => (
              <div className="col-10 mx-auto col-md-6 col-lg-4 g-3" key={index}>
                {" "}
                <div className="card ">
                  <img src={sample.pic} alt="" className="card-img-top" />
                  <div className="card-footer text-center text-dark ">
                    <h3
                      className="sample-title"
                      style={{ letterSpacing: "4px" }}
                    >
                      {sample.title}
                    </h3>
                    <p>{sample.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <NavigationSection
          class1="app-design"
          class2="graphic-design"
          title1="APP DESIGN"
          title2="GRAPHIC DESIGN"
        ></NavigationSection>
      </section>
      <section>
        <GetInTouch></GetInTouch>
      </section>
    </>
  );
};
