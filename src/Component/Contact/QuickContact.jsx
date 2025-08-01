import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const QuickContact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="space overflow-hidden contact-area-1 position-relative z-index-common bg-white"
      id="contact-sec"
    >
      <div className="container">
        <div className="row gy-40 justify-content-center">
          <div className="col-xl-12">
            <div className="title-area mb-0 text-center">
              <span
                className="sub-title2 text-anim text-theme text-uppercase mb-30"
                data-aos="fade-up"
              >
                Quick contact info
              </span>
              <h2 className="sec-title text-anim2" data-aos="fade-up">
                Contact Information
              </h2>
            </div>
          </div>

          <div className="col-xl-3 mb-3">
            <div className="contact-info" data-aos="fade-up">
              <div className="box-icon">
                <i className="fal fa-map-marker-alt"></i>
              </div>
              <h4 className="box-title">Location</h4>
              <p className="box-text">
                44 Whitfield Road, London, England, E6 1AS
              </p>
            </div>
          </div>

          <div className="col-xl-3 mb-3">
            <div className="contact-info" data-aos="fade-up">
              <div className="box-icon">
                <i className="fal fa-envelope"></i>
              </div>
              <h4 className="box-title">Email us</h4>
              <p className="box-text">
                
                <a href="mailto:info@rentelligence.ai">info@rentelligence.ai</a>
              </p>
            </div>
          </div>

          <div className="col-xl-3 mb-3">
            <div className="contact-info" data-aos="fade-up">
              <div className="box-icon">
                <i className="fal fa-phone"></i>
              </div>
              <h4 className="box-title">Free Call</h4>
              <p className="box-text">
               
                <a href="tel:+919175513773">+44 7123 45XXXX</a>
              </p>
            </div>
          </div>

          <div className="col-xl-3 mb-3">
            <div className="contact-info" data-aos="fade-up">
              <div className="box-icon">
                <i className="fal fa-clock"></i>
              </div>
              <h4 className="box-title">Opening hour</h4>
              <p className="box-text">
                Mon to Fri: 09AM - 05PM
                <br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickContact;
