import canadaPic from "../assets/locations/desktop/image-map-canada.png";
import australiaPic from "../assets/locations/desktop/image-map-australia.png";
import ukPic from "../assets/locations/desktop/image-map-united-kingdom.png";
import { GetInTouch } from "../components/GetInTouch";

export const Locations = () => {
  return (
    <>
      <section className="canada-section container d-flex flex-column flex-md-row rounded gap-3 my-3 text-center text-md-start">
        <div className="d-flex flex-column justify-content-center col-md-7 p-5 rounded gap-3 canada-text order-2 order-md-1">
          <h1 className="sample-title">Canada</h1>
          <div className="d-flex flex-column flex-md-row gap-5">
            <div className="d-flex flex-column ">
              <p className="fw-bold ">Designo Central Office </p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-bold">Contact </p>
              <p> P: +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 canada-img order-1 rounded">
          <img
            src={canadaPic}
            alt=""
            className="w-100 h-100 img-fluid canada-img"
          />
        </div>
      </section>
      <section className="aus-section container d-flex flex-column flex-md-row rounded  gap-3 text-center text-md-row">
        <div className="d-flex flex-column justify-content-center col-md-7 p-5 rounded canada-text order-1 ">
          <h1 className="sample-title">Australia</h1>
          <div className="d-flex gap-5 flex-column flex-md-row">
            <div className="d-flex-flex-column">
              <p className="fw-bold "> Designo AU Office 2443 M :</p>
              <p> 19 Balonne Street</p>
              <p> New South Wales</p>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-bold "> Contact </p>
              <p> P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 canada-img rounded">
          <img
            src={australiaPic}
            alt=""
            className="w-100 h-100 img-fluid canada-img"
          />
        </div>
      </section>
      <section className="uk-section container d-flex flex-column flex-md-row rounded  gap-3  my-3 text-center text-md-start ">
        <div className="d-flex flex-column justify-content-center col-md-7 p-5 rounded canada-text order-md-1 order-2">
          <h1 className="sample-title">United Kingdom</h1>
          <div className="d-flex gap-5 flex-column flex-md-row">
            <div className="d-flex-flex-column">
              <p className="fw-bold ">Designo UK Office Contact </p>
              <p> 13 Colorado Way</p>
              <p> Rhyd-y-fro SA8 9GA</p>
            </div>
            <div className="d-flex flex-column">
              <p className="fw-bold "> Contact </p>
              <p> P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 canada-img order-1 rounded">
          <img
            src={ukPic}
            alt=""
            className="w-100 h-100 img-fluid canada-img"
          />
        </div>
      </section>
      <section>
        <GetInTouch></GetInTouch>
      </section>
    </>
  );
};
