import pic1 from "../assets/shared/desktop/illustration-australia.svg";
import pic2 from "../assets/shared/desktop/illustration-united-kingdom.svg";
import pic3 from "../assets/shared/desktop/illustration-canada.svg";
import { Link } from "react-router-dom";
export const LocationImages = () => {
  const locationSamples = [
    {
      pic: pic1,
      country: "AUSTRAILA",
    },
    {
      pic: pic3,
      country: "CANADA",
    },
    {
      pic: pic2,
      country: "UNITED KINGDOM",
    },
  ];
  return (
    <div>
      {" "}
      <section className="location-section mx-auto  my-md-5">
        <div className="row">
          {locationSamples.map((country) => (
            <div className="col-12 mx-auto col-md-6 col-lg-4 g-5">
              <div className="card">
                <img src={country.pic} alt="" className="mx-auto" />
                <div className="card-footer d-flex flex-column align-items-center">
                  <h3 className="text-dark">{country.country}</h3>
                  <Link to="/locations">
                    {" "}
                    <button className="btn location-btn text-white">
                      SEE LOCATION
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
